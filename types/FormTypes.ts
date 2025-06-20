import { ClubType } from "./GolfClub";

export interface FormField {
  brand?: string;
  model?: string;
  flex?: string;
  loft?: number;
  shaft?: 'Steel' | 'Graphite';
}

export type FormType = ClubType.DRIVER | ClubType.HYBRID | ClubType.IRONS | ClubType.PUTTER | ClubType.WEDGES | ClubType.WOODS;

export interface FormConfig {
  fields: {
    brand?: boolean;
    model?: boolean;
    flex?: boolean;
    loft?: boolean;
    shaft?: boolean;
  };
  title?: string;
}

export interface GolfClubFormProps {
  type: FormType;
  onSubmit: (data: Partial<FormField>) => void;
  onValidationChange?: (isValid: boolean) => void;
  initialData?: Partial<FormField>;
  config?: FormConfig;
}
