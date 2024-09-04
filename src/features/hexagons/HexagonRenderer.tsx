import { useEffect, useState } from 'react';
import { HEXAGON_WIPE_FINISH_POINT, HEXAGON_WIPE_INTERVAL, TILE_WIDTH } from '../../app/constants';
import HexagonTile from './HexagonTile';
import { IHexagon } from './HexagonTypes';
import { generateIsoPositions, isoToCartesianPosition } from './RenderUtils';
import { useAppDispatch } from '../../app/hooks';
import { filledScreen, initialized, revealed } from './hexagonSlice';

// The plan for filling the screen with hexagons is to initially be dumb with it-
// we will fill a large multi dimensional array much larger than any actual real screen
// then whittle this down to just ones that could be contained within the viewport after
// we've mapped these to cartesian coordinates. This is for two reasons- one, I'm lazy
// and solving for correctly positioned tiles with iso coordinates is hard. And two,
// if we tweak the constants or any of the underlying variables it should all
// still "just work".

function HexagonRenderer() {
   const [hexagonArray, setHexagonArray] = useState<IHexagon[]>([]);
   const dispatch = useAppDispatch();

   // Initialize the Hexagons and get them positioned appropriately on the screen
   useEffect(() => {
      const tileCount = Math.round(Math.max(window.innerWidth, window.innerHeight) / TILE_WIDTH) * 5;
      const isoPositions = generateIsoPositions(tileCount, tileCount);

      let hexas: IHexagon[] = isoPositions.map(x => ({
         style: 'standard',
         isoCoords: x,
         cartCoords: isoToCartesianPosition(x),
         id: `${x.isoX}-${x.isoY}`,
         isVisible: null,
      }));

      // Strip all the elements outside the bounds of the screen
      hexas = hexas.filter(
         x =>
            x.cartCoords.cartX > TILE_WIDTH * -1 &&
            x.cartCoords.cartX < window.innerWidth &&
            x.cartCoords.cartY > TILE_WIDTH * -1 &&
            x.cartCoords.cartY < window.innerHeight
      );

      // Place our special tiles
      //let aboutTile = findHexagonAtPosition(hexas, { cartX: window.innerWidth / 4, cartY: window.innerHeight / 4 });
      const aboutTile = hexas.getHexagonAtCartesianCoords({
         cartX: window.innerWidth / 4,
         cartY: window.innerHeight / 3,
      });
      aboutTile.style = 'about';

      const projectsTile = hexas.getHexagonAtIsoCoords({
         isoX: aboutTile.isoCoords.isoX,
         isoY: aboutTile.isoCoords.isoY + 2,
      });
      projectsTile.style = 'projects';

      const workTile = hexas.getHexagonAtIsoCoords({
         isoX: projectsTile.isoCoords.isoX - 1,
         isoY: projectsTile.isoCoords.isoY + 2,
      });
      workTile.style = 'work';

      setHexagonArray(hexas);
      dispatch(initialized());
   }, []);

   // Build an interval and a variable to manage tracking an X coordinate
   // move across the screen
   const [currentRevealXLine, setCurrentRevealXLine] = useState(window.innerWidth + TILE_WIDTH);
   useEffect(() => {
      let intervalRef = setInterval(() => {
         setCurrentRevealXLine(currentX => {
            let newX = currentX - TILE_WIDTH / 4;
            if (newX < HEXAGON_WIPE_FINISH_POINT) {
               clearInterval(intervalRef);
            }
            return newX;
         });
      }, HEXAGON_WIPE_INTERVAL);
   }, []);

   // Handle the wipe and lifecycle notifications
   useEffect(() => {
      const hideBuffer = window.innerWidth + TILE_WIDTH;
      const currentHideXLine = currentRevealXLine + hideBuffer;

      // First wipe - Reveal phase
      const hexasOnXLineToReveal = hexagonArray
         .filter(x => x.cartCoords.cartX <= currentRevealXLine && x.cartCoords.cartX + TILE_WIDTH >= currentRevealXLine)
         .filter(x => !x.isVisible);

      // Second wipe - hide phase
      const hexasOnXLineToHide = hexagonArray
         .filter(x => x.cartCoords.cartX <= currentHideXLine && x.cartCoords.cartX + TILE_WIDTH >= currentHideXLine)
         .filter(x => x.isVisible);

      // Lifecycle notifications
      if (currentRevealXLine - TILE_WIDTH < 0) {
         dispatch(filledScreen());
      }
      if (currentRevealXLine < HEXAGON_WIPE_FINISH_POINT) {
         dispatch(revealed());
      }

      // Perform the actual Array update
      setHexagonArray(arr => {
         return arr.map(x => {
            if (hexasOnXLineToReveal.map(y => y.id).includes(x.id)) {
               return { ...x, isVisible: true };
            } else if (hexasOnXLineToHide.map(y => y.id).includes(x.id)) {
               return { ...x, isVisible: false };
            } else {
               return x;
            }
         });
      });
   }, [currentRevealXLine]);

   return (
      <div>
         {hexagonArray.map(x => (
            <HexagonTile key={x.id} {...x} />
         ))}
      </div>
   );
}

export default HexagonRenderer;
