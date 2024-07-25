import { FULL_SIZE_ASSET_WIDTH, TILE_PIXEL_BUFFER, TILE_WIDTH } from '../../app/constants';
import HexagonPng from './HexagonTile';
import { ICartesianCoordinates, IHexagon, IIsometricCoordinates } from './HexagonTypes';

// TODO might actually start this off as a big map covering the whole
// screen and then fade the edge pieces to 0 and the middle pieces to
// 0.75 or so
// const isoPositions: IIsometricCoordinates[] = [
//    { isoX: 0, isoY: 0 },
//    { isoX: 1, isoY: 0 },
//    { isoX: 2, isoY: 0 },
//    { isoX: 3, isoY: 0 },
//    { isoX: 0, isoY: 1 },
//    { isoX: 1, isoY: 1 },
//    { isoX: 2, isoY: 1 },
//    { isoX: 3, isoY: 1 },
//    { isoX: 0, isoY: 2 },
//    { isoX: 1, isoY: 2 },
//    { isoX: 0, isoY: 3 },
// ];

const generateIsoPositions = (xCount: number, yCount: number): IIsometricCoordinates[] => {
   const isoPositions: IIsometricCoordinates[] = [];

   for (let y = 0; y < yCount; y++) {
      for (let x = 0; x < xCount; x++) {
         isoPositions.push({ isoX: x, isoY: y });
      }
   }

   return isoPositions;
};

const isoPositions = generateIsoPositions(4, 7);

const positioner = (isoCoords: IIsometricCoordinates): ICartesianCoordinates => {
   const scaleFactor = TILE_WIDTH / FULL_SIZE_ASSET_WIDTH;
   const screenXBasePoint = window.innerWidth / 2;
   //const screenYBasePoint = (TILE_WIDTH / 3) * -1;
   const screenYBasePoint = 100;

   let isoXLength = 347 * scaleFactor + TILE_PIXEL_BUFFER;
   let isoXTheta = 6.0 * (Math.PI / 180); // degrees from horizontal
   let isoYLength = 194 * scaleFactor + TILE_PIXEL_BUFFER;
   let isoYTheta = 33.85 * (Math.PI / 180); // degrees from vertical

   let cartX =
      screenXBasePoint -
      isoCoords.isoX * Math.cos(isoXTheta) * isoXLength -
      isoCoords.isoY * Math.sin(isoYTheta) * isoYLength;

   let cartY =
      screenYBasePoint +
      isoCoords.isoX * Math.sin(isoXTheta) * isoXLength +
      isoCoords.isoY * Math.cos(isoYTheta) * isoYLength;

   return { cartX, cartY };
};

// todo refactor all this ugliness
const mappedArr: IHexagon[] = isoPositions.map(x => ({
   style: 'standard',
   isoCoords: x,
   cartCoords: positioner(x),
   id: `${x.isoX}-${x.isoY}`,
}));

function HexagonRenderer() {
   const positions = isoPositions.map(x => positioner(x));

   return (
      <div>
         {mappedArr.map(x => (
            <HexagonPng key={x.id} {...x} />
         ))}
      </div>
   );
}

export default HexagonRenderer;
