'use client';

import { useState } from 'react';
import {
  Autocomplete,
  TextField,
  Chip,
  Checkbox,
  useTheme,
  InputProps,
  Typography,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

// Íconos para las opciones seleccionadas
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface CustomAutocompleteProps {
  options: string[]; // Opciones que llegan desde afuera
  placeholder: string; // Placeholder del input
  onSelectionChange: (selected: string[]) => void; // Callback cuando cambian las selecciones
  inputProps?: InputProps; // Props adicionales para el input
}

export default function CustomAutocomplete({
  options,
  placeholder,
  onSelectionChange,
  inputProps,
}: CustomAutocompleteProps) {
  const theme = useTheme(); // Usar el tema de Material-UI
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // Opciones seleccionadas

  // Maneja el cambio de selección
  const handleSelectionChange = (event: any, newValue: string[]) => {
    setSelectedOptions(newValue);
    onSelectionChange(newValue); // Notifica al componente padre
  };

  return (
    <Autocomplete
      multiple // Permite selección múltiple
      options={options} // Opciones que llegan desde afuera
      value={selectedOptions} // Opciones seleccionadas
      onChange={handleSelectionChange} // Maneja el cambio de selección
      disableCloseOnSelect // No cierra el desplegable al seleccionar una opción
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder} // Placeholder del input
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            ...inputProps,
            sx: {
              '& .MuiInputBase-input': {
                // Aplicando estilo de placeholder usando la variante overline que configuramos
                '&::placeholder': {
                  color: theme.palette.mode === 'light' ? 'var(--Gray-scale-500, #A6A6A6)' : theme.palette.grey[500],
                  opacity: 1,
                },
                // Para texto ingresado, usar el color de texto primario del tema
                color: theme.palette.text.primary,
                fontFamily: theme.typography.overline.fontFamily,
                fontSize: theme.typography.overline.fontSize,
                fontWeight: theme.typography.overline.fontWeight,
                lineHeight: theme.typography.overline.lineHeight,
                fontFeatureSettings: "'liga' off",
                padding: '8px 4px', // Reduce el padding del input
              },
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.background.paper, // Fondo del input
              padding: '0', // Elimina el padding
              margin: '0', // Elimina el margin
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.divider, // Color del borde
            },
          }}
        />
      )}
      renderTags={(value: string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            {...getTagProps({ index })} // Esto ya incluye la propiedad `key`
            label={
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {option}
              </Typography>
            }
            onDelete={() => {
              // Elimina la opción seleccionada
              const newSelected = selectedOptions.filter((item) => item !== option);
              setSelectedOptions(newSelected);
              onSelectionChange(newSelected); // Notifica al componente padre
            }}
            sx={{
              backgroundColor: theme.palette.primary.main, // Fondo del chip
              color: theme.palette.primary.contrastText, // Color del texto del chip
              height: '24px', // Reduce la altura del chip
              margin: '2px 4px', // Ajusta el margin de los chips
              padding: '0', // Elimina el padding interno
              '& .MuiChip-deleteIcon': {
                color: theme.palette.primary.contrastText, // Color del ícono de cierre
              },
            }}
          />
        ))
      }
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            checked={selected} // Muestra la tilde si está seleccionado
            sx={{
              color: theme.palette.primary.main, // Color del checkbox
              '&.Mui-checked': {
                color: theme.palette.primary.main, // Color del checkbox seleccionado
              },
              padding: '4px', // Reduce el padding del checkbox
            }}
          />
          <Typography variant="body1">{option}</Typography>
        </li>
      )}
      sx={{
        '& .MuiAutocomplete-popupIndicator': {
          color: theme.palette.text.primary, // Color del ícono de desplegable
        },
        width: '100%', // Ancho completo
        '& .MuiAutocomplete-inputRoot': {
          padding: '0', // Elimina el padding del contenedor
          margin: '0', // Elimina el margin del contenedor
        },
        '& .MuiAutocomplete-tag': {
          margin: '2px 4px', // Ajusta el margin de los tags
        },
      }}
    />
  );
}