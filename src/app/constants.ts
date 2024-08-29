import { HexagonStyle, IIsometricCoordinates } from '../features/hexagons/HexagonTypes';

// Configurables
export const TILE_WIDTH = 125;
export const TILE_PIXEL_BUFFER = 3;
export const HEXAGON_FADE_TIME = 500; // typically 3000 but lower for debugging
export const HEXAGON_WIPE_INTERVAL = 150; // typically 25 but lower for debugging

// The starting point of our hexagon arrays. We're dealing with assets which tile
// at non orthogonal angles and overlap so to avoid the complex math we push these
// deep off the screen and let the positioner do the heavy lifting later
export const SCREEN_X_BASE = window.innerWidth * 3;
export const SCREEN_Y_BASE = window.innerHeight * -1;

// Specify the locations of the special linking pages
export const KEY_TILES: { style: HexagonStyle; coords: IIsometricCoordinates }[] = [
   { style: 'projects', coords: { isoX: 1, isoY: 1 } },
];

// Static (shouldn't change unless the underlying assets change.. hopefully never)
export const FULL_SIZE_ASSET_WIDTH = 394;
