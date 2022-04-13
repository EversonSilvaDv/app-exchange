import { useEffect, useState } from 'react';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { IQuotesObj, useQuotesContext } from '../../contexts';
import { useSnackbar } from 'notistack';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Graphic from './Graphic';

const Currency: React.FC = () => {

  const [ keyQuote, setKeyQuote ] = useState<string>('USD');

  const { objQuotes } = useQuotesContext();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //função de testes
  const show = () => {
    objQuotes.forEach((item) => {
      console.log(`${item.name} : R$ ${calcExchange(item.value)}`);
    })
    enqueueSnackbar('Valores calculados',{
      variant: 'success',
    });
  }

  useEffect(() => {
    console.log(objQuotes);
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
    console.log(key);
    setKeyQuote(key);
  }

  return (
    <>
      <Typography variant='h4' component={'h2'} align='center'>
        Currency
      </Typography>

      <Graphic keyQuotes={keyQuote}/>

      <TableContainer component={Paper} sx={{marginRight: '15px'}}>
        <Table size="small">

          <TableHead>
            <TableRow>
              <TableCell>Indice</TableCell>
              <TableCell>Moeda</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {objQuotes.map((item: IQuotesObj) => (
              <TableRow key={item.key} hover>
                <TableCell>{item.key}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{`R$ \u00A0${calcExchange(item.value)}`}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleKeyQuote(item.key)}>
                    <QueryStatsIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
      
    </>
  );
}

export default Currency;
