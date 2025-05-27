import { Alert, AlertProps, AlertTitle } from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { styled } from '@mui/system';
import { AlertType } from '@/types/Alert';

interface CustomAlertProps extends AlertProps {
  text: string;
  type?: AlertType;
  width?: string;
  height?: string;
  customIcon?: React.ReactNode;
}

const typeStyles = {
  [AlertType.WARNING]: {
    bgcolor: '#fff3e0',
    borderColor: '#ffb74d',
    icon: <WarningRoundedIcon fontSize="medium" sx={{ color: '#ed6c02' }} />,
    textColor: '#8a5300'
  },
  [AlertType.DANGER]: {
    bgcolor: '#ffebee',
    borderColor: '#ef5350',
    icon: <ErrorRoundedIcon fontSize="medium" sx={{ color: '#d32f2f' }} />,
    textColor: '#c62828'
  },
  [AlertType.SUCCESS]: {
    bgcolor: '#e8f5e9',
    borderColor: '#66bb6a',
    icon: <CheckCircleRoundedIcon fontSize="medium" sx={{ color: '#2e7d32' }} />,
    textColor: '#1b5e20'
  },
  [AlertType.INFO]: {
    bgcolor: '#e3f2fd',
    borderColor: '#90caf9',
    icon: <InfoRoundedIcon fontSize="medium" sx={{ color: '#0288d1' }} />,
    textColor: '#01579b'
  },
};

const StyledAlert = styled(Alert)(({ theme }) => ({
  borderRadius: '8px',
  padding: '16px',
  alignItems: 'center',
  color: 'rgba(0, 0, 0, 0.87)', // Fuerza color de texto oscuro
  '& .MuiAlert-icon': {
    padding: '0 12px 0 0',
    marginRight: '8px',
    color: 'inherit' // Hereda el color del contenedor
  },
}));

const CustomAlert = ({
  text,
  type = AlertType.INFO,
  width = '100%',
  height = 'auto',
  customIcon,
  sx,
  ...props
}: CustomAlertProps) => {
  const selectedStyle = typeStyles[type];

  return (
    <StyledAlert
      icon={customIcon || selectedStyle.icon}
      sx={{
        width,
        height,
        backgroundColor: selectedStyle.bgcolor,
        border: `1px solid ${selectedStyle.borderColor}`,
        '& .MuiAlert-message': {
          color: selectedStyle.textColor,
          fontWeight: 500
        },
        ...sx,
      }}
      {...props}
    >
      {text}
    </StyledAlert>
  );
};

export default CustomAlert;