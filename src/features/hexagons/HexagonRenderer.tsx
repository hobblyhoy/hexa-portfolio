import HexagonPng from './HexagonTile';
import { ICartesianCoordinates, IIsometricCoordinates } from './HexagonTypes';

// TODO might actually start this off as a big map covering the whole
// screen and then fade the edge pieces to 0 and the middle pieces to
// 0.75 or so
const isoPositions: IIsometricCoordinates[] = [
   { isoX: 0, isoY: 0 },
   { isoX: 1, isoY: 0 },
   { isoX: 2, isoY: 0 },
   { isoX: 3, isoY: 0 },
   { isoX: 0, isoY: 1 },
   { isoX: 1, isoY: 1 },
   { isoX: 2, isoY: 1 },
   { isoX: 0, isoY: 2 },
   { isoX: 1, isoY: 2 },
   { isoX: 0, isoY: 3 },
];

const positioner = (isoCoords: IIsometricCoordinates): ICartesianCoordinates => {
   // The scale function right now doesnt talk to it (yet!) but it's being scaled
   // to 100 pixels in the tile itself, thats where this 100 comes from
   
   //const fullSizeAssetHeight = 292;
   const fullSizeAssetWidth = 394;
   const scale = 100 / fullSizeAssetWidth;


   const screenXBasePoint = 300;
   const screenYBasePoint = 300;
   const tileBuffer = 4;

   let isoXLength = 347 * scale + tileBuffer;
   let isoXTheta = 6.0 * (Math.PI / 180); // degrees from horizontal
   let isoYLength = 194 * scale + tileBuffer;
   let isoYTheta = 33.85 * (Math.PI / 180); // degrees from vertical

   let cartX = screenXBasePoint
      - isoCoords.isoX * Math.cos(isoXTheta) * isoXLength
      - isoCoords.isoY * Math.sin(isoYTheta) * isoYLength;

   let cartY = screenYBasePoint
      + isoCoords.isoX * Math.sin(isoXTheta) * isoXLength
      + isoCoords.isoY * Math.cos(isoYTheta) * isoYLength;

   return { cartX, cartY };
};

function HexagonRenderer() {
   const positions = isoPositions.map(x => positioner(x));

   return (
      <div>
         {positions.map(coords => (
            <HexagonPng key={coords.cartX*10000 + coords.cartY} left={coords.cartX} top={coords.cartY} />
         ))}
      </div>
   );
}

export default HexagonRenderer;
