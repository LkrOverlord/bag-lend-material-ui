import { PaletteMode } from '@mui/material';

export const getFormOverrides = (mode: PaletteMode) => ({
    // TextField configuration
    MuiTextField: {
        styleOverrides: {
            root: ({ theme }: any) => ({
                '& .MuiOutlinedInput-root': {
                    backgroundColor: theme.palette.grey[50],
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontWeight: 400,
                    border: `1px solid ${theme.palette.grey[400]}`,
                    '& fieldset': {
                        border: 'none',
                    },
                    '&:hover fieldset': {
                        border: 'none',
                    },
                    '&.Mui-focused': {
                        border: `1px solid ${theme.palette.primary.main}`,
                        '& fieldset': {
                            border: 'none',
                        }
                    },
                    '&.Mui-error': {
                        border: `1px solid ${theme.palette.error.main}`,
                        '& fieldset': {
                            border: 'none',
                        }
                    },
                    '&.Mui-disabled': {
                        backgroundColor: theme.palette.grey[100],
                        border: '1px solid transparent',
                        '& .MuiOutlinedInput-input': {
                            color: theme.palette.grey[400],
                            WebkitTextFillColor: theme.palette.grey[400],
                        }
                    }
                },
                '& .MuiInputLabel-root': {
                    fontSize: '14px',
                    fontWeight: 500,
                    color: theme.palette.grey[700],
                    marginBottom: '8px',
                    position: 'static',
                    transform: 'none',
                    '&.Mui-focused': {
                        color: theme.palette.primary.main,
                    },
                    '&.Mui-error': {
                        color: theme.palette.error.main,
                    }
                },
                '& .MuiOutlinedInput-input': {
                    padding: '5px 6px',
                    fontSize: '16px',
                    color: theme.palette.text.primary,
                    '&::placeholder': {
                        color: theme.palette.grey[400],
                        opacity: 1,
                    }
                }
            })
        },
        defaultProps: {
            variant: 'outlined',
            fullWidth: true,
        }
    },

    // Select configuration
    MuiSelect: {
        styleOverrides: {
            root: ({ theme }: any) => ({
                backgroundColor: theme.palette.grey[50],
                borderRadius: '2px',
                fontSize: '16px',
                border: `1px solid ${theme.palette.grey[400]}`,
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&.Mui-focused': {
                    border: `2px solid ${theme.palette.primary.main}`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    }
                },
                '&.Mui-disabled': {
                    backgroundColor: theme.palette.grey[100],
                    border: '1px solid transparent',
                    color: theme.palette.grey[400],
                }
            }),
            select: ({ theme }: any) => ({
                padding: '5px 6px',
                fontSize: '16px',
                color: theme.palette.text.primary,
            }),
            icon: ({ theme }: any) => ({
                color: theme.palette.grey[700],
                right: '12px',
            })
        }
    },

    // FormControl configuration
    MuiFormControl: {
        styleOverrides: {
            root: {
                marginBottom: '0px',
            }
        }
    },

    // InputLabel configuration
    MuiInputLabel: {
        styleOverrides: {
            root: ({ theme }: any) => ({
                fontSize: '14px',
                fontWeight: 500,
                color: theme.palette.grey[700],
                marginBottom: '8px',
                position: 'static',
                transform: 'none',
                '&.Mui-focused': {
                    color: theme.palette.primary.main,
                },
                '&.Mui-error': {
                    color: theme.palette.error.main,
                }
            })
        }
    },

    // FormHelperText configuration
    MuiFormHelperText: {
        styleOverrides: {
            root: ({ theme }: any) => ({
                fontSize: '12px',
                marginTop: '4px',
                marginLeft: '0px',
                color: theme.palette.grey[700],
                '&.Mui-error': {
                    color: theme.palette.error.main,
                }
            })
        }
    },

    // OutlinedInput configuration
    MuiOutlinedInput: {
        styleOverrides: {
            root: ({ theme }: any) => ({
                backgroundColor: theme.palette.grey[50],
                borderRadius: '2px',
                fontSize: '16px',
                border: '1px solid transparent',
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&.Mui-focused': {
                    border: `2px solid ${theme.palette.primary.main}`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    }
                },
                '&.Mui-error': {
                    border: `2px solid ${theme.palette.error.main}`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    }
                },
                '&.Mui-disabled': {
                    backgroundColor: theme.palette.grey[100],
                    border: '1px solid transparent',
                    '& .MuiOutlinedInput-input': {
                        color: theme.palette.grey[400],
                        WebkitTextFillColor: theme.palette.grey[400],
                    }
                }
            }),
            input: ({ theme }: any) => ({
                padding: '12px 16px',
                fontSize: '16px',
                color: theme.palette.text.primary,
                '&::placeholder': {
                    color: theme.palette.grey[400],
                    opacity: 1,
                }
            })
        }
    },

    // Checkbox configuration
    MuiCheckbox: {
        styleOverrides: {
            root: ({ theme }: any) => ({
                color: theme.palette.grey[700],
                '&.Mui-checked': {
                    color: theme.palette.primary.main,
                },
                '&.Mui-disabled': {
                    color: theme.palette.grey[300],
                }
            })
        }
    },

    // FormControlLabel configuration
    MuiFormControlLabel: {
        styleOverrides: {
            root: {
                marginLeft: '0px',
                marginRight: '16px',
            },
            label: ({ theme }: any) => ({
                fontSize: '16px',
                color: theme.palette.text.primary,
                '&.Mui-disabled': {
                    color: theme.palette.grey[400],
                }
            })
        }
    },

    // MenuItem configuration for Select dropdowns
    MuiMenuItem: {
        styleOverrides: {
            root: ({ theme }: any) => ({
                fontSize: '16px',
                padding: '8px 16px',
                color: theme.palette.text.primary,
                '&:hover': {
                    backgroundColor: theme.palette.grey[100],
                },
                '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.light,
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                    }
                }
            })
        }
    }
});