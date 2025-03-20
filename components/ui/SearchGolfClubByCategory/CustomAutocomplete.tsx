'use client';

import { useState } from 'react';
import {
  Autocomplete,
  TextField,
  Chip,
  Checkbox,
  useTheme,
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
}

export default function CustomAutocomplete({
  options,
  placeholder,
  onSelectionChange,
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
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.background.paper, // Fondo del input
              color: theme.palette.text.primary, // Color del texto
              padding: '0', // Elimina el padding
              margin: '0', // Elimina el margin
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.divider, // Color del borde
            },
            '& .MuiOutlinedInput-input': {
              padding: '8px 4px', // Reduce el padding del input
            },
          }}
        />
      )}
      renderTags={(value: string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            {...getTagProps({ index })} // Esto ya incluye la propiedad `key`
            label={option}
            {...getTagProps({ index })}
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
          {option}
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