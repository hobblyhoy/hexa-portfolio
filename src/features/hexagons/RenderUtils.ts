import {
   TILE_WIDTH,
   FULL_SIZE_ASSET_WIDTH,
   TILE_PIXEL_BUFFER,
   SCREEN_X_BASE,
   SCREEN_Y_BASE,
} from '../../app/constants';
import { IIsometricCoordinates, ICartesianCoordinates, IHexagon } from './HexagonTypes';

export const generateIsoPositions = (xCount: number, yCount: number): IIsometricCoordinates[] => {
   const isoPositions: IIsometricCoordinates[] = [];

   for (let y = 0; y < yCount; y++) {
      for (let x = 0; x < xCount; x++) {
         isoPositions.push({ isoX: x, isoY: y });
      }
   }

   return isoPositions;
};

export const isoToCartesianPosition = (isoCoords: IIsometricCoordinates): ICartesianCoordinates => {
   const scaleFactor = TILE_WIDTH / FULL_SIZE_ASSET_WIDTH;

   let isoXLength = 347 * scaleFactor + TILE_PIXEL_BUFFER;
   let isoXTheta = 6.0 * (Math.PI / 180); // degrees from horizontal
   let isoYLength = 194 * scaleFactor + TILE_PIXEL_BUFFER;
   let isoYTheta = 33.85 * (Math.PI / 180); // degrees from vertical

   let cartX =
      SCREEN_X_BASE -
      isoCoords.isoX * Math.cos(isoXTheta) * isoXLength -
      isoCoords.isoY * Math.sin(isoYTheta) * isoYLength;

   let cartY =
      SCREEN_Y_BASE +
      isoCoords.isoX * Math.sin(isoXTheta) * isoXLength +
      isoCoords.isoY * Math.cos(isoYTheta) * isoYLength;

   return { cartX, cartY };
};

export const findHexagonAtPosition = (hexas: IHexagon[], coords: ICartesianCoordinates) => {
   let found = hexas.find(
      h =>
         h.cartCoords.cartX <= coords.cartX &&
         h.cartCoords.cartX + TILE_WIDTH >= coords.cartX &&
         h.cartCoords.cartY <= coords.cartY &&
         h.cartCoords.cartY + TILE_WIDTH >= coords.cartY
   );

   if (!found) throw `No hexagon found at position: ${coords?.cartX}/${coords?.cartY}`;
   return found;
};
