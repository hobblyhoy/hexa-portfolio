export type HexagonStyle = 'standard' | 'projects';

export interface IHexagon {
   style: HexagonStyle;
   isoCoords: IIsometricCoordinates;
   cartCoords: ICartesianCoordinates;
   id: string;
}

// Positioning
export interface IIsometricCoordinates {
   isoX: number;
   isoY: number;
}

export interface ICartesianCoordinates {
   cartX: number;
   cartY: number;
}
