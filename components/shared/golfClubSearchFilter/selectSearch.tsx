'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import useAutocomplete, { AutocompleteGetTagProps } from '@mui/material/useAutocomplete';
import CloseIcon from '@mui/icons-material/Close';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { useTheme } from '@mui/material/styles';

const InputWrapper = styled('div')(({ theme }) => `
  width: 100%;
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#E5E5E5'};
  background-color: ${theme.palette.background.paper};
  border-radius: 8px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.primary.main};
  }

  &.focused {
    border-color: ${theme.palette.primary.main};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.background.paper};
    color: ${theme.palette.text.primary};
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
    font-size: ${theme.typography.body1.fontSize};
    font-weight: ${theme.typography.body1.fontWeight};
    line-height: ${theme.typography.body1.lineHeight};
    font-feature-settings: '"liga" off';
  }
`);

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

const StyledTag = styled(Tag)<TagProps>(({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${theme.palette.primary.light};
  border: 1px solid ${theme.palette.primary.main};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;
  color: ${theme.palette.primary.contrastText};

  &:focus {
    border-color: ${theme.palette.primary.dark};
    background-color: ${theme.palette.primary.main};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`);

const Listbox = styled('ul')(({ theme }) => `
  width: 100%;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.background.paper};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.action.selected};
    font-weight: 600;

    & svg {
      color: ${theme.palette.primary.main};
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.action.hover};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`);

interface SearchSelectProps {
  title: string;
  placeholder: string;
  options: string[];
  onChange?: (value: string[]) => void;
}

export default function SearchSelect({ 
  title, 
  placeholder, 
  options,
  onChange 
}: SearchSelectProps) {
  const theme = useTheme();

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    multiple: true,
    options: options,
    getOptionLabel: (option) => option,
  });

  React.useEffect(() => {
    if (onChange) {
      onChange(value as string[]);
    }
  }, [value, onChange]);

  return (
    <div>
      <label {...getInputLabelProps()} style={{
        ...theme.typography.body1,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(0.5),
        display: 'block',
      }}>
        {title}
      </label>
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {(value as string[]).map((option: string, index: number) => (
            <StyledTag label={option} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} placeholder={placeholder} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as string[]).map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option}</span>
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

