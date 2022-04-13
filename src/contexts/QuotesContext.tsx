import { createContext, useContext, useEffect, useState } from "react";
import api from '../services/api';

interface IQuotesContextData {
  quotes: IQuotesContext[];
  currencies: ICurrencyContext[];
  objQuotes: IQuotesObj[];
}

export interface IQuotesObj {
  key: string;
  name: string;
  value: number;
}

interface ICurrencyContext{
  currency: string;
  moeda: string
}

interface IQuotesContext {
  currency: string;
  value: number;
}

const QuotesContext = createContext<IQuotesContextData>({} as IQuotesContextData);

const QuotesContextProvider: React.FC = (props) => {

  const [ currencies, setCurrencies ] = useState<ICurrencyContext[]>([]);
  const [ quotes, setQuotes ] = useState<IQuotesContext[]>([]);
  const [ objQuotes , setObjQuotes] = useState<IQuotesObj[]>([]);
  const [ go, setGo ] = useState(false);

  useEffect(() => {
    api
      .get('/currencies')
      .then((response) => {
        //console.log('response', response.data);
        setCurrencies(response.data);
        //console.log(quotes);
      })
      .catch((error) => {console.log(error);
      });


  }, []);

  useEffect(() => {
    api
      .get('/latest?from=BRL')
      .then((response) => {
        //console.log(response.data.rates);
        setQuotes(response.data.rates)
      })
      .catch((error) => {
        console.log(error);
    })

  }, [])

  useEffect(() => {
    setTimeout(() => {
      setGo(true);
    }, 2000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      let values = Object.entries(quotes);
    
      let moedas = Object.entries(currencies);

      let filterMoedas = moedas.filter((item) => item[0].toString().toUpperCase() !== 'BRL');

      let listaQuotes: any = [];

      filterMoedas.forEach((item, index) => {
        listaQuotes.push(
          {
            key : item[0],
            name:  item[1],
            value: values[index][1].toString(),
          }
        );
      });

      //console.dir('teste');
      //console.dir(listaQuotes);
      setObjQuotes(listaQuotes);

    }, 1000)
  }, [go]);

  

  return (
    <QuotesContext.Provider value={{quotes: quotes, currencies: currencies, objQuotes: objQuotes}}>
      {props.children}
    </QuotesContext.Provider>
  );
}

const useQuotesContext = () => {
  return useContext(QuotesContext);
}

export { useQuotesContext, QuotesContextProvider };