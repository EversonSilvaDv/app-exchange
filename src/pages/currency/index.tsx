import { useEffect, useState } from 'react';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid, Tooltip } from '@mui/material';
import { IQuotesObj, useQuotesContext } from '../../contexts';
import { useSnackbar } from 'notistack';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Graphic from './Graphic';

const Currency: React.FC = () => {

  const [ keyQuote, setKeyQuote ] = useState<string>('USD');

  const { objQuotes } = useQuotesContext();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (objQuotes.length == 0) {
      enqueueSnackbar('Cotações indisponiveis',{
        variant: 'warning',
      });
    }
  }, []);

  const calcExchange = (value: number) => {
    let brl = 1;
    let res = brl / value;
    return res.toFixed(2);
  }

  const handleKeyQuote = (key: string) => {
    //console.log(key);
    setKeyQuote(key);
  }

  return (
    <>

      <Graphic keyQuotes={keyQuote}/>

      <Typography variant='h4' component={'h2'} align='center'>
        Currency quotes
      </Typography>

      <Grid container justifyContent='center'>
        <Grid item sx={{width:'95%'}}>
          <TableContainer elevation={9} component={Paper} sx={{marginRight: '5px', maxHeight: 460}}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Index</TableCell>
                  <TableCell>Currency</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Graphic</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {objQuotes.map((item: IQuotesObj) => (
                  <TableRow key={item.key} hover>
                    <TableCell>{item.key}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{`R$ \u00A0${calcExchange(item.value)}`}</TableCell>
                    <TableCell>
                      <Tooltip title='Show graphic'>
                        <IconButton onClick={() => handleKeyQuote(item.key)}>
                          <QueryStatsIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

    </>
  );
}

export default Currency;
