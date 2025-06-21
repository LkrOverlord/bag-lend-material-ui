import { ClubType } from "./GolfClub";

export interface ShaftItem {
  id: string;
  name: string;
}

export interface FormField {
  brand?: string;
  model?: string;
  flex?: string;
  loft?: number;
  shaft?: ShaftItem[];
  clubSelections?: Record<string, number>;
}

export type FormType = ClubType.DRIVER | ClubType.HYBRID | ClubType.IRONS | ClubType.PUTTER | ClubType.WEDGES | ClubType.WOODS;

export interface FormConfig {
  fields: {
    brand?: boolean;
    model?: boolean;
    flex?: boolean;
    loft?: boolean;
    shaft?: boolean;
    clubSelections?: boolean;
  };
  title?: string;
}

export interface GolfClubFormProps {
  type: FormType;
  onSubmit: (data: Partial<FormField>) => void;
  onValidationChange?: (isValid: boolean) => void;
  initialData?: Partial<FormField>;
  config?: FormConfig;
  clubOptions?: Record<string, string>; // Nueva prop para las opciones de palos
}