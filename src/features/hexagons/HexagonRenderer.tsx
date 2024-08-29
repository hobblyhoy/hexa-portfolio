import { useEffect, useState } from 'react';
import { HEXAGON_WIPE_INTERVAL, TILE_WIDTH } from '../../app/constants';
import HexagonTile from './HexagonTile';
import { IHexagon } from './HexagonTypes';
import { generateIsoPositions, isoToCartesianPosition } from './RenderUtils';

// The plan for filling the screen with hexagons is to initially be dumb with it-
// we will fill a large multi dimensional array much larger than any actual real screen
// then whittle this down to just ones that could be contained within the viewport after
// we've mapped these to cartesian coordinates. This is for two reasons- one, I'm lazy
// and solving for correctly positioned tiles with iso coordinates is hard. And two,
// if we tweak the constants or any of the underlying variables it should all
// still "just work".

function HexagonRenderer() {
   const [hexagonArray, setHexagonArray] = useState<IHexagon[]>([]);

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

      // Temp debug
      //hexas = hexas.filter(x => x.id === '27-12' || x.id === '22-12');

      setHexagonArray(hexas);
   }, []);

   // Probs need to rework this so that we're pulling out multiple on each pass
   // I mean it may work but it severely rate limits how quickly we can pull these
   // things out and may cause perf issues on slower machines
   useEffect(() => {
      //const endXLeftCoord = TILE_WIDTH * -1;
      const endXLeftCoord = window.innerWidth * -0.6;
      const hideBuffer = window.innerWidth + TILE_WIDTH;

      let currentRevealXLine = window.innerWidth + TILE_WIDTH;
      let intervalRef = setInterval(() => {
         setHexagonArray(arr => {
            // First wipe, we process the full screen from right to left filling
            // the screen with Hexagons
            const hexasOnXLineToReveal = arr
               .filter(
                  x => x.cartCoords.cartX <= currentRevealXLine && x.cartCoords.cartX + TILE_WIDTH >= currentRevealXLine
               )
               .filter(x => !x.isVisible);

            // Simulatenously in the same wipe but offset we'll hide the tiles to reveal whats underneath
            const currentHideXLine = currentRevealXLine + hideBuffer;
            const hexasOnXLineToHide = arr
               .filter(
                  x => x.cartCoords.cartX <= currentHideXLine && x.cartCoords.cartX + TILE_WIDTH >= currentHideXLine
               )
               .filter(x => x.isVisible);

            console.log({ hexasOnXLineToReveal, currentXLine: currentRevealXLine });
            currentRevealXLine -= TILE_WIDTH / 4;

            if (currentRevealXLine < endXLeftCoord) {
               clearInterval(intervalRef);
               return arr;
            }

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
      }, HEXAGON_WIPE_INTERVAL);
   }, []);

   return (
      <div>
         {hexagonArray.map(x => (
            <HexagonTile key={x.id} {...x} />
         ))}
      </div>
   );
}

export default HexagonRenderer;
