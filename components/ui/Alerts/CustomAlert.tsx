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
    icon: <WarningRoundedIcon fontSize="medium" color="warning" />,
  },
  [AlertType.DANGER]: {
    bgcolor: '#ffebee',
    borderColor: '#ef5350',
    icon: <ErrorRoundedIcon fontSize="medium" color="error" />,
  },
  [AlertType.SUCCESS]: {
    bgcolor: '#e8f5e9',
    borderColor: '#66bb6a',
    icon: <CheckCircleRoundedIcon fontSize="medium" color="success" />,
  },
  [AlertType.INFO]: {
    bgcolor: '#e3f2fd',
    borderColor: '#90caf9',
    icon: <InfoRoundedIcon fontSize="medium" color="info" />,
  },
};

const StyledAlert = styled(Alert)(({ theme }) => ({
  borderRadius: '8px',
  padding: '16px',
  alignItems: 'center',
  '& .MuiAlert-icon': {
    padding: '0 12px 0 0',
    marginRight: '8px',
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
        ...sx,
      }}
      {...props}
    >
      {text}
    </StyledAlert>
  );
};

export default CustomAlert;