import HexagonPng from './HexagonTile';
import { ICartesianCoordinates, IIsometricCoordinates } from './HexagonTypes';

// TODO might actually start this off as a big map
const isoPositions: IIsometricCoordinates[] = [
   { isoX: 0, isoY: 0 },
   { isoX: 0, isoY: 1 },
   { isoX: 1, isoY: 0 },
   { isoX: 1, isoY: 1 },
];

const positioner = (isoCoords: IIsometricCoordinates, scale: number): ICartesianCoordinates => {
   const tileWidth = 394 * scale;
   const tileHeight = 292 * scale;

   const screenXBasePoint = 300;
   const screenYBasePoint = 300;

   // Ripped this from tiny-town but obviously hexagons
   // have a different plotting algorithm than squares
   // so need to rewrite this!
   let cartX = screenXBasePoint + isoCoords.isoX * tileWidth * 0.5 + -1 * isoCoords.isoY * tileWidth * 0.5;
   let cartY = screenYBasePoint + isoCoords.isoX * tileHeight * 0.5 + isoCoords.isoY * tileHeight * 0.5;

   return { cartX, cartY };
};

function HexagonRenderer() {
   const positions = isoPositions.map(x => positioner(x, 0.2538071065989848));

   return (
      <div>
         {/* <HexagonPng left={190} top={86} />
         <HexagonPng left={100} top={95} isLinkTest={true} />
         <HexagonPng left={162} top={128} />
         <HexagonPng left={72} top={137} /> */}
         {positions.map(coords => (
            <HexagonPng key={coords.cartX*10000 + coords.cartY} left={coords.cartX} top={coords.cartY} />
         ))}
      </div>
   );
}

export default HexagonRenderer;
