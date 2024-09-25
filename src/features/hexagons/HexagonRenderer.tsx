import { useEffect, useState } from 'react';
import {
   HEXAGON_WIPE_FINISH_POINT,
   HEXAGON_WIPE_INTERVAL_HIDE,
   HEXAGON_WIPE_INTERVAL_REVEAL,
   HEXAGON_TILE_WIDTH,
} from '../../app/constants';
import HexagonTile from './HexagonTile';
import { IHexagon } from './HexagonTypes';
import { generateIsoPositions, isoToCartesianPosition } from './RenderUtils';
import { useAppDispatch } from '../../app/hooks';
import { filledScreen, initialized, revealed } from './hexagonSlice';
import useBreakpoint from '../customHooks/useBreakpoint';

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
   const { isDesktop } = useBreakpoint();

   // Initialize the Hexagons and get them positioned appropriately on the screen
   useEffect(() => {
      const tileCount =
         Math.round(
            Math.max(window.innerWidth, window.innerHeight) / HEXAGON_TILE_WIDTH
         ) * 8;
      const isoPositions = generateIsoPositions(tileCount, tileCount);

      let hexas: IHexagon[] = isoPositions.map(x => ({
         style: 'standard',
         isoCoords: x,
         cartCoords: isoToCartesianPosition(x),
         id: `${x.isoX}-${x.isoY}`,
         isVisible: isDesktop ? null : true,
      }));

      // Strip all the elements outside the bounds of the screen
      hexas = hexas.filter(
         x =>
            x.cartCoords.cartX > HEXAGON_TILE_WIDTH * -1 &&
            x.cartCoords.cartX < window.innerWidth &&
            x.cartCoords.cartY > HEXAGON_TILE_WIDTH * -1 &&
            x.cartCoords.cartY < window.innerHeight
      );

      // Place our special tiles (desktop view only)
      if (isDesktop) {
         const aboutTile = hexas.getHexagonAtCartesianCoords({
            cartX: window.innerWidth / 3,
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

         const contactTile = hexas.getHexagonAtIsoCoords({
            isoX: workTile.isoCoords.isoX,
            isoY: workTile.isoCoords.isoY + 2,
         });
         contactTile.style = 'contact';
      }

      setHexagonArray(hexas);
      dispatch(initialized());

      if (!isDesktop) {
         dispatch(filledScreen());
         dispatch(revealed());
      }
   }, [isDesktop]);

   // Build an interval and a variable to manage tracking an X coordinate
   // move across the screen
   const [currentRevealXLine, setCurrentRevealXLine] = useState(
      window.innerWidth + HEXAGON_TILE_WIDTH
   );
   useEffect(() => {
      if (!isDesktop) return;
      const runTimeout = () => {
         setCurrentRevealXLine(currentX => {
            let newX = currentX - HEXAGON_TILE_WIDTH / 4;
            if (newX < HEXAGON_WIPE_FINISH_POINT) {
               return newX; // Stop updating if the condition is met
            }

            // Continue calling the setTimeout until the finish point is reached
            const time =
               newX > 0 ? HEXAGON_WIPE_INTERVAL_HIDE : HEXAGON_WIPE_INTERVAL_REVEAL;
            setTimeout(runTimeout, time);

            return newX;
         });
      };

      // Start the initial timeout
      setTimeout(runTimeout, HEXAGON_WIPE_INTERVAL_HIDE);
   }, [isDesktop]);

   // Handle the wipe and lifecycle notifications
   useEffect(() => {
      const hideBuffer = window.innerWidth + HEXAGON_TILE_WIDTH;
      const currentHideXLine = currentRevealXLine + hideBuffer;

      // First wipe - Reveal phase
      const hexasOnXLineToReveal = hexagonArray
         .filter(
            x =>
               x.cartCoords.cartX <= currentRevealXLine &&
               x.cartCoords.cartX + HEXAGON_TILE_WIDTH >= currentRevealXLine
         )
         .filter(x => !x.isVisible);

      // Second wipe - hide phase
      const hexasOnXLineToHide = hexagonArray
         .filter(
            x =>
               x.cartCoords.cartX <= currentHideXLine &&
               x.cartCoords.cartX + HEXAGON_TILE_WIDTH >= currentHideXLine
         )
         .filter(x => x.isVisible);

      // Lifecycle notifications
      if (currentRevealXLine - HEXAGON_TILE_WIDTH < 0) {
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
