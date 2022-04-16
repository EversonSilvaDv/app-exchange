import { Typography, Grid, Button, Box } from '@mui/material';
import { useAppThemeContext } from '../../contexts';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';

const Options: React.FC = () => {

  const { themeName, handleTheme } = useAppThemeContext();

  return (
    <>
      <Typography variant='h4' component={'h2'} align='center'>
        Options
      </Typography>

      <Grid container spacing={2} mt={5}>
        <Grid item xs={6}>
          <Button 
            variant='outlined' 
            onClick={handleTheme}
            startIcon={themeName === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          >
            {themeName === 'light' ? 'dark mode' : 'light mode'}
          </Button>
        </Grid>

        <Grid item xs={6}>

        </Grid>
      </Grid>
    </>
  );
}

export default Options;