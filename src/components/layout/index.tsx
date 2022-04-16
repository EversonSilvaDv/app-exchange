import { Paper, Grid, Box} from '@mui/material';
import AppTopBar from '../appBar/index';

const Layout: React.FC = (props: any) => {
  return (
    <>
      <AppTopBar />

      <Grid mt={7} >
        <Paper
          elevation={3} 
          sx={{
            minWidth: '1vh',
            minHeight: 'calc(100vh - 80px)'
          }}
        >
          {props.children}
        </Paper>
      </Grid>

    </>
  );
}
export default Layout;