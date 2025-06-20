// Enums para mayor consistencia y escalabilidad
export enum ClubType {
  DRIVER = 'driver',
  WOODS = 'woods',
  HYBRID = 'hybrid',
  IRONS = 'irons',
  WEDGES = 'wedges',
  PUTTER = 'putter'
}

// Interfaz base
export interface GolfClub {
  brand: string;
  model: string;
}

// Mixins para propiedades comunes (composición)
export interface HasFlex {
  flex: string;
}

export interface HasLoft {
  loft: number; // Consistencia: siempre number
}

export interface HasMaterials {
  materials: string[];
}

export interface HasClubSelections {
  clubSelections: Record<string, number>; // Más idiomático que Map
}

// Tipos específicos usando composición
export interface Driver extends GolfClub, HasFlex, HasLoft {
  // Todas las propiedades vienen de los mixins
}

export interface Woods extends GolfClub, HasFlex, HasLoft, HasClubSelections {
  // Todas las propiedades vienen de los mixins
}

export interface HybridRescueClubs extends GolfClub, HasFlex, HasLoft, HasMaterials, HasClubSelections {
  // Todas las propiedades vienen de los mixins
}

export interface Irons extends GolfClub, HasFlex, HasLoft, HasMaterials, HasClubSelections {
  // Todas las propiedades vienen de los mixins
}

export interface Wedges extends GolfClub, HasFlex, HasLoft, HasMaterials, HasClubSelections {
  // Todas las propiedades vienen de los mixins
}

export interface Putter extends GolfClub, HasMaterials {
  // Solo hereda de GolfClub y HasMaterials
}

// Union type para type safety
export type AnyGolfClub = Driver | Woods | HybridRescueClubs | Irons | Wedges | Putter;