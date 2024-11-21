import Alert from '@mui/material/Alert'

interface Alertaprops {
    severity: 'error' | 'warning' | 'info' | 'success';
    message: string;
}

const AlertComponent: React.FC<Alertaprops> = ({  severity, message  }) =>{
    return(
        <Alert severity={severity}>{message}</Alert>
    )
}

export default AlertComponent