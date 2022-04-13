import { Grid, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useQuotesContext } from "../../contexts";
import api from '../../services/api';

interface IQuotes {
  date: string;
  values: object;
}

interface IPropsQuotes {
  keyQuotes: string;
}

const Graphic: React.FC<IPropsQuotes> = (props) => {

  //const { currencies } = useQuotesContext();

  const [ objeto, setObjeto ] = useState<any>();
  const [ quotes, setQuotes ] = useState<IQuotes[]>([]);
  const [ keyQuote, setKeyQuotes ] = useState<string>('USD');

  useEffect(() => {
    api
      .get(`/2022-02-05..?from=BRL`)
      .then((response) => {
        //console.log(Object.entries(response.data.rates));
        const obj: any = Object.entries(response.data.rates);
        //console.log(obj);
        setObjeto(obj);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

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
            values: {[keyQuote] : calcExchange(item[keyQuote])},
          }
        );
         
      });
      setKeyQuotes(props.keyQuotes)
      setQuotes(listaQuotes);
      //console.log(values);
      //console.log(listaQuotes);
    }
    //console.log('passou');

  }, [objeto, keyQuote, props]);

  const calcExchange = (value: number) => {
    let brl = 1;
    let res = brl / value;
    return res.toFixed(2);
  }

  const stats = () => {
    console.log('stats');
    console.log(keyQuote);
  }

  const idChange = (event: any) => {
    console.log('id change', event.target.value as string);
    setKeyQuotes(event.target.value as string);
  }

  return (
    <>
      <button onClick={stats}>stats</button>

      <Grid container>
        <Grid item xs={12}>
          <h1>{props.keyQuotes}</h1>
          <ResponsiveContainer width='90%' height={250} >
            <AreaChart data={quotes}>
              <CartesianGrid  strokeDasharray='1 1' verticalPoints={[0]}/>
              <XAxis dataKey='date' interval={'preserveEnd'} padding={{ right: 10 }}/>
              <YAxis domain={['dataMin', 'dataMax']}/>
              <Tooltip />
              <Area dataKey={`values.${keyQuote}`} />
            </AreaChart>
          </ResponsiveContainer>
        </Grid>

        <Grid item xs={12}>
          <Select 
            value={props.keyQuotes}
            onChange={idChange}
            label={props.keyQuotes}
          >
            <MenuItem value={'USD'}>{props.keyQuotes}</MenuItem>
            
          </Select>
        </Grid>
        
      </Grid>

      
    </>
  );
}

export default Graphic;