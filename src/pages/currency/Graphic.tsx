import { Grid, Typography, Paper, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import api from '../../services/api';
import TitleQuotes from '../currency/TitleQuotes';

interface IQuotes {
  date: string;
  values: object;
}

interface IPropsQuotes {
  keyQuotes: string;
}

interface IDate {
  year: string;
  month: string;
  day: string;
}

const Graphic: React.FC<IPropsQuotes> = (props) => {

  const [ objeto, setObjeto ] = useState<any>();
  const [ quotes, setQuotes ] = useState<IQuotes[]>([]);
  const [ data, setData ] = useState<IDate | undefined>();
  const [ button, setButton ] = useState<string>('week');

  const date = new Date();

  const dateSelect = {
    year: (date.getFullYear()).toString(),
    month: (date.getMonth() + 1).toString().length == 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString(),
    day: (date.getDate() - 7).toString().length == 1 ? '0' + (date.getDate() - 7).toString() : (date.getDate() - 7).toString(),
  }

  useEffect(() => {

    setData(dateSelect);
    
  }, []);

  const handleMonth = () => {
    dateSelect.month = (date.getMonth()).toString().length == 1 ? '0' + (date.getMonth()).toString() : (date.getMonth()).toString();
    setData(dateSelect);
    setButton('month');
    //console.log(data);
  }

  const handleYear = () => {
    dateSelect.year = (date.getFullYear() -1).toString();
    setData(dateSelect);
    setButton('year');
    ///console.log(data);
  }

  const handleWeek = () => {
    setData(dateSelect);
    setButton('week');
    //console.log(data);
  }

  useEffect(() => {

    if (data != null) {

      api
        .get(`/${data?.year}-${data?.month}-${data?.day}..?from=BRL`)
        .then((response) => {
          //console.log(Object.entries(response.data.rates));
          const obj: any = Object.entries(response.data.rates);
          //console.log(obj);
          setObjeto(obj);
        })
        .catch((error) => {
          console.log(error);
        })
    }

      
  }, [data])

  useEffect(() => {
    
    if (objeto != null) {

      const values: any = objeto.map((item: any) => item[1]);
      const date: any = objeto.map((item: any) => item[0]);
      const listaQuotes: any = [];
      
      values.forEach((item: any, index: number) => {
        //console.log(calcExchange(item[keyQuote]));
        listaQuotes.push(
          {
            date: date[index],
            values: {[props.keyQuotes] : calcExchange(item[props.keyQuotes])},
          }
        );
         
      });

      setQuotes(listaQuotes);
      //console.log(values);
      //console.log(listaQuotes);
    }
    //console.log('passou');
    //console.log(quotes.length);
  }, [objeto, props]);

  const calcExchange = (value: number) => {
    let brl = 1;
    let res = brl / value;
    return res.toFixed(2);
  }

  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={11} elevation={9} component={Paper} sx={{margin: '5px 3px'}}>

          <TitleQuotes keyQuotes={props.keyQuotes} />

          <Grid item container xs={12} justifyContent='center'>

            <Button
              variant={button === 'week' ? 'outlined' : 'text'}
              size="small" 
              onClick={handleWeek}
            >
              week
            </Button>

            <Button
              variant={button === 'month' ? 'outlined' : 'text'}
              size="small" 
              onClick={handleMonth}
            >
              month
            </Button>

            <Button
              variant={button === 'year' ? 'outlined' : 'text'}
              size="small" 
              onClick={handleYear}
            >
              year
            </Button>

          </Grid>

          <ResponsiveContainer width='90%' height={250} >
            <AreaChart data={quotes}>
              <CartesianGrid  strokeDasharray='1 1' verticalPoints={[0]}/>
              <XAxis tick={true} dataKey='date' interval={quotes.length - 10} padding={{ right: 10 }}/>
              <YAxis domain={['dataMin', 'dataMax']}/>
              <Tooltip />
              <Area dataKey={`values.${props.keyQuotes}`} />
            </AreaChart>
          </ResponsiveContainer>

        </Grid>

        
      </Grid>
    </>
  );
}

export default Graphic;