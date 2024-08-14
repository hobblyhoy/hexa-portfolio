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
      const tileCount = Math.round(Math.max(window.innerWidth, window.innerHeight) / TILE_WIDTH) * 5;
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

   // This is having an identity crisis-
   // the slow oscilation effect looks very cool
   // the fast depletion of the tiles looks cool
   // but the two together feels contradictory, it doesn't jive
   // will need to rework
   useEffect(() => {
      const endXCoord = window.innerWidth / 2.5;
      let intervalRef = setInterval(() => {
         setHexagonArray(arr => {
            const filteredArr = arr.filter(x => x.cartCoords.cartX > endXCoord && x.opacity > 0);
            if (!filteredArr.length) {
               clearInterval(intervalRef);
               return arr;
            }
            const furthestRightHexa = filteredArr.reduce((max, obj) =>
               obj.cartCoords.cartX > max.cartCoords.cartX ? obj : max
            );
            console.log({ furthestRightHexa });
            // const hexasToRemove = arr.filter(
            //    x => x.opacity > 0 && x.cartCoords.cartX > currentXCoord && x.cartCoords.cartX > endXCoord
            // );
            // const randomIndex = Math.floor(Math.random() * hexasToRemove.length);
            // const randomHexagon = hexasToRemove[randomIndex];
            return arr.map(x => (x.id === furthestRightHexa.id ? { ...x, opacity: 0 } : x));
            //return arr.map(x => (hexasToRemove.map(y => y.id).includes(x.id) ? { ...x, opacity: 0 } : x));
         });
      }, 25);
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
