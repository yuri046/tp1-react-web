import Button from '../../components/button';
import Alert from "../../components/alert/index.js";
import Avatar from "../../components/avatar/index.js";
import Box from '../../components/box';
import Card from '../../components/card';
import CheckBox from '../../components/checkbox';
import Container from '../../components/container';
import Fab from '../../components/fab';
import Grid from '../../components/grid';
import IconButton from '../../components/iconButton';
import Snackbar from '../../components/snackBar';
import Switch from '../../components/switch';
import Tab from '../../components/tab';
import TextField from '../../components/textField';
import TextComponent from '../../components/typography';

const Teste: React.FC = ()=>{
    return (
        <div>
        <Button >teste</Button>
        <Alert severity='error' message='Erro'/>
        <Avatar props=''/>
        <Box 
            sx={{
                backgroundColor: 'yellow', 
                padding: 2, 
                borderRadius: '8px',
                textAlign: 'center',
                marginTop: 10,
            }}>
            <p>teste</p>
        </Box>
        <Card
            sx={{
                backgroundColor: 'lightblue', 
                padding: 2, 
                borderRadius: '8px',
                textAlign: 'center',
                marginTop: 10,
            }}
        >
            <h1>Bem-vindo ao CardComponent!</h1>
            <p>Este é um exemplo de uso do componente personalizado.</p>
        </Card>

        <CheckBox sx={{backgroundColor: 'yellow'}}/>

        <Container sx={{
            backgroundColor: 'lightblue', 
            padding: 2, 
            borderRadius: '8px',
            textAlign: 'center',
            marginTop: 10,
        }}>
            <p>teste</p>
        </Container>

        <Fab sx={{
            backgroundColor: 'lightblue',
            padding: 5,
            
        }}>
            <p>enviar</p>
        </Fab>

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <p style={{ backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
                Header
                </p>
            </Grid>
            <Grid item xs={12} sm={4}>
                <p style={{ backgroundColor: 'lightgreen', padding: '10px', textAlign: 'center' }}>
                Sidebar
                </p>
            </Grid>
            <Grid item xs={12} sm={8}>
                <p style={{ backgroundColor: 'lightcoral', padding: '10px', textAlign: 'center' }}>
                Main Content
                </p>
            </Grid>
            <Grid item xs={12}>
                <p style={{ backgroundColor: 'lightgray', padding: '10px', textAlign: 'center' }}>
                Footer
                </p>
            </Grid>
    </Grid>

    <IconButton sx={{padding:'10px', backgroundColor:'lightblue'}}>teste</IconButton>
    <Snackbar sx={{padding:'10px', backgroundColor:'lightblue'}}><p>teste</p></Snackbar>
    <Switch/>
    <Tab></Tab>
    <TextField/>
    <TextComponent>teste</TextComponent>
       </div>
    )
}

export default Teste