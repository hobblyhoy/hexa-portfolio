import { HexagonStyle, IIsometricCoordinates } from '../features/hexagons/HexagonTypes';

// Configurables
export const TILE_WIDTH = 100;
export const TILE_PIXEL_BUFFER = 4;

// Specify the locations of the special linking pages
export const KEY_TILES: { style: HexagonStyle; coords: IIsometricCoordinates }[] = [
   { style: 'projects', coords: { isoX: 1, isoY: 1 } },
];

// Static (shouldn't change unless the underlying assets change.. hopefully never)
export const FULL_SIZE_ASSET_WIDTH = 394;
