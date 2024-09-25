import { HexagonStyle, IIsometricCoordinates } from '../features/hexagons/HexagonTypes';

// Configurables
export const HEXAGON_TILE_WIDTH = 150; // Height is automatically set
export const HEXAGON_TILE_PIXEL_BUFFER = 3; // Pixel space between hexagons
export const HEXAGON_FADE_TIME = 500; // Opacity fade in / fade out time
export const HEXAGON_WIPE_INTERVAL_HIDE = 50; // Time for the initial wipe phase
export const HEXAGON_WIPE_INTERVAL_REVEAL = 150; // Time for the reveal phase
export const HEXAGON_WIPE_FINISH_POINT =
   window.innerWidth * -0.5 - HEXAGON_TILE_WIDTH / 2; // X coord to wipe away hexagons from during reveal phase
export const HEXAGON_START_DELAY_RANGE = [0, 10]; // How long to wait before starting to float
export const HEXAGON_OSCILLATION_RANGE = [5, 6]; // How long each up/down float cycle is
export const HEXAGON_FLOAT_HEIGHT_DESKTOP = 10; // Y offset from each tiles default location while floating
export const HEXAGON_FLOAT_HEIGHT_MOBILE = 15;

// The starting point of our hexagon arrays. We're dealing with assets which tile
// at non orthogonal angles and overlap so to avoid the complex math we push these
// deep off the screen and let the positioner do the heavy lifting later
export const SCREEN_X_BASE = window.innerWidth * 4;
export const SCREEN_Y_BASE = window.innerHeight * -1;

// Specify the locations of the special linking pages
export const KEY_TILES: { style: HexagonStyle; coords: IIsometricCoordinates }[] = [
   { style: 'projects', coords: { isoX: 1, isoY: 1 } },
];

// Static (shouldn't change unless the underlying assets change.. hopefully never)
export const FULL_SIZE_ASSET_WIDTH = 394;
