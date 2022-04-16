import {  AppBar, Toolbar, Grid, } from '@mui/material';
import MenuSpeedDial from '../menuSpeedDial';
import MenuOptions from '../menuOptions';

const AppTopBar: React.FC = () => {

  return (
    <Grid container >
      <AppBar position='fixed'>
        <Toolbar >
          <Grid container justifyContent={'space-between'} alignItems='center'>

            <Grid item xs={11} md={11} xl={11}>
              <MenuSpeedDial />
            </Grid>

            <Grid item container xs={1} md={1} xl={1} justifyContent='flex-end'>
              <MenuOptions />
            </Grid>

          </Grid>
          
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default AppTopBar;

//2022.212.202.152

//justifyContent={'space-between'} alignItems='center'