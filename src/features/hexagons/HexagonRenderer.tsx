import { TILE_WIDTH } from '../../app/constants';
import HexagonPng from './HexagonTile';
import { IHexagon } from './HexagonTypes';
import { generateIsoPositions, isoToCartesianPosition } from './RenderUtils';

// The plan for filling the screen with hexagons is to initially be dumb with it-
// we will fill a large multi dimensional array much larger than any actual real screen
// then whittle this down to just ones that could be contained within the viewport after
// we've mapped these to cartesian coordinates. This is for two reasons- one, I'm lazy
// and solving for correctly positioned tiles with iso coordinates is hard. And two,
// if we tweak the constants or any of the underlying variables it should all
// still "just work".

const tileCount = Math.round(Math.max(window.innerWidth, window.innerHeight) / TILE_WIDTH) * 3;
const isoPositions = generateIsoPositions(tileCount, tileCount);

let mappedArr: IHexagon[] = isoPositions.map(x => ({
   style: 'standard',
   isoCoords: x,
   cartCoords: isoToCartesianPosition(x),
   id: `${x.isoX}-${x.isoY}`,
}));

console.log('pre ' + mappedArr.length)

// Strip all the elements outside the bounds of our array
mappedArr = mappedArr.filter(
   x =>
      x.cartCoords.cartX > TILE_WIDTH * -1 &&
      x.cartCoords.cartX < window.innerWidth &&
      x.cartCoords.cartY > TILE_WIDTH * -1 &&
      x.cartCoords.cartY < window.innerHeight
);

console.log('post ' + mappedArr.length)

function HexagonRenderer() {
   return (
      <div>
         {mappedArr.map(x => (
            <HexagonPng key={x.id} {...x} />
         ))}
      </div>
   );
}

export default HexagonRenderer;
