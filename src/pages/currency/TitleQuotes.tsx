import { useEffect } from 'react';
import { useQuotesContext } from '../../contexts/QuotesContext';
import { Grid, Typography, Paper } from '@mui/material';

interface IKey {
  keyQuotes: any;
}

const TitleQuotes: React.FC<IKey> = (props) => {

  const { currencies } = useQuotesContext();

  return (
    <>
      <Grid container justifyContent={'center'}>
        <Grid container justifyContent={'center'} component={Paper} sx={{width:'100%'}}>
          <Typography variant='h5'>
            {currencies[props.keyQuotes]}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default TitleQuotes;