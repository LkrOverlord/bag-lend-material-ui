import { FormConfig, FormType } from "@/types/FormTypes";

export enum FormsNumber {
  FIRST = 'First',
  SECOND = 'Second',
  THIRD = 'Third',
  FOURTH = 'Fourth',
  FIFTH = 'Fifth',
  SIXTH = 'Sixth',
  SEVENTH = 'Seventh',
  EIGHTH = 'Eighth',
  NINTH = 'Ninth',
  TENTH = 'Tenth',
  ELEVENTH = 'Eleventh',
  TWELFTH = 'Twelfth',
  THIRTEENTH = 'Thirteenth',
  FOURTEENTH = 'Fourteenth',
  FIFTEENTH = 'Fifteenth',
  SIXTEENTH = 'Sixteenth',
  SEVENTEENTH = 'Seventeenth',
  EIGHTEENTH = 'Eighteenth'
}

export const formConfigs: Record<FormType, FormConfig> = {
  'driver': {
    fields: {
      brand: true,
      model: true,
      flex: true,
      loft: true,
      clubSelections: true
    },
    title: 'club'
  },
  'woods': {
    fields: {
      brand: true,
      model: true,
      flex: true,
      loft: true,
      clubSelections: true
    },
    title: 'Product Information'
  },
  'putter': {
    fields: {
      brand: true,
      model: true,
      flex: true,
      loft: false,
      shaft: true,
    },
    title: 'Equipment Details'
  },
  'hybrid': {
    fields: {
      brand: true,
      model: true,
      flex: true,
      loft: true,
      shaft: true,
      clubSelections: true
    },
    title: 'Provide addtional information for the hybrid / rescue clubs'
  },
  'irons': {
    fields: {
      brand: true,
      model: true,
      flex: true,
      loft: false,
      shaft: true,
      clubSelections: true
    },
    title: 'Equipment Details'
  },
  'wedges': {
    fields: {
      brand: true,
      model: true,
      flex: true,
      loft: false,
      shaft: true,
      clubSelections: true
    },
    title: 'Equipment Details'
  }
};

export const getFormConfig = (type: FormType): FormConfig => {
  return formConfigs[type];
};