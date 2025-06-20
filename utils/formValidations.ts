import { FormField } from "@/types/FormTypes";

export const formValidations = {
  brand: {
    required: 'Brand is required',
    minLength: {
      value: 2,
      message: 'Brand must be at least 2 characters'
    },
    maxLength: {
      value: 50,
      message: 'Brand cannot exceed 50 characters'
    }
  },
  model: {
    required: 'Model is required',
    minLength: {
      value: 2,
      message: 'Model must be at least 2 characters'
    },
    maxLength: {
      value: 50,
      message: 'Model cannot exceed 50 characters'
    }
  },
  flex: {
    required: 'Flex is required'
  },
  loft: {
    required: 'Loft is required',
    min: {
      value: 1,
      message: 'Loft must be at least 1'
    },
    max: {
      value: 90,
      message: 'Loft cannot exceed 90'
    },
    pattern: {
      value: /^\d*\.?\d+$/,
      message: 'Loft must be a valid number'
    }
  },
  shaft: {
    required: 'Shaft material is required'
  }
};

export const getValidationRules = (fieldName: keyof FormField) => {
  return formValidations[fieldName];
};
