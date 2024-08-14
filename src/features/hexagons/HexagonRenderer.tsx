import { useEffect, useState } from 'react';
import { TILE_WIDTH } from '../../app/constants';
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
      const tileCount =
         Math.round(Math.max(window.innerWidth, window.innerHeight) / TILE_WIDTH) * 5;
      const isoPositions = generateIsoPositions(tileCount, tileCount);

      let hexas: IHexagon[] = isoPositions.map(x => ({
         style: 'standard',
         isoCoords: x,
         cartCoords: isoToCartesianPosition(x),
         id: `${x.isoX}-${x.isoY}`,
         opacity: 1,
      }));

      // Strip all the elements outside the bounds of our array
      hexas = hexas.filter(
         x =>
            x.cartCoords.cartX > TILE_WIDTH * -1 &&
            x.cartCoords.cartX < window.innerWidth &&
            x.cartCoords.cartY > TILE_WIDTH * -1 &&
            x.cartCoords.cartY < window.innerHeight
      );
      setHexagonArray(hexas);
   }, []);

   useEffect(() => {
       let intervalRef = setInterval(() => {
         console.log('in interval');
         setHexagonArray(arr => {
            const hexasStillActive = arr.filter(x => x.opacity > 0);
            const randomIndex = Math.floor(Math.random() * hexasStillActive.length);
            const randomHexagon = hexasStillActive[randomIndex];
            if (!randomHexagon) {
               clearInterval(intervalRef);
               return arr;
            };
            return arr.map(x => (x.id === randomHexagon.id ? { ...x, opacity: 0 } : x));
         });
      }, 1000);
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
