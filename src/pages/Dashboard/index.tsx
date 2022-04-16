import { Typography, Grid, Paper } from "@mui/material";
import Graphic from "../currency/Graphic";
import Balance from './Balance';
import Profile from './Profile';


const Dashboard: React.FC = () => {
  return (
    <>
      <Typography variant='h4' component={'h2'} align='center'>
        Dashboard
      </Typography>
      <Grid container rowSpacing={0}>

        <Grid
          item component={Paper} xs={12} sm={6} lg={4}
        >
          Profile
          <Profile />
        </Grid>

        <Grid
          item component={Paper} xs={12} sm={6} lg={4}
        >
          Balanço
          <Balance />
        </Grid>

        <Grid
          container component={Paper}
        >

          <Grid item xs={12} sm={6}>
            <Graphic keyQuotes="" />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Graphic keyQuotes="" />
          </Grid>
          
        </Grid>

      </Grid>
    </>
  );
}

export default Dashboard;