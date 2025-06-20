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
  },
  clubSelections: {
    validate: (value: Record<string, number> | undefined) => {
      // Si no hay valor o está vacío
      if (!value || Object.keys(value).length === 0) {
        return 'Please select at least one club';
      }
      
      // Verificar que al menos una selección tenga cantidad > 0
      const hasValidSelections = Object.values(value).some(quantity => 
        quantity && quantity > 0
      );
      
      if (!hasValidSelections) {
        return 'Please select at least one club with quantity greater than 0';
      }
      
      // Verificar que las cantidades sean números válidos
      const hasInvalidQuantities = Object.values(value).some(quantity => 
        typeof quantity !== 'number' || quantity < 0 || !Number.isInteger(quantity)
      );
      
      if (hasInvalidQuantities) {
        return 'All quantities must be valid positive integers';
      }
      
      return true;
    }
  }
};

export const getValidationRules = (fieldName: keyof FormField): any => {
  return formValidations[fieldName as keyof typeof formValidations];
};