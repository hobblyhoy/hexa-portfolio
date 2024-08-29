export type HexagonStyle = 'standard' | 'projects';

export interface IHexagon {
   style: HexagonStyle;
   isoCoords: IIsometricCoordinates;
   cartCoords: ICartesianCoordinates;
   id: string;
   isVisible: boolean | null;
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
