import CurrencyAPI from '@everapi/currencyapi-js';
import { useEffect,useState } from 'react';


const currencyApi = new CurrencyAPI('YOUR CURRENCY API');
// console.log(currencyApi);


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await currencyApi.latest({
          base_currency: currency
        });
        setData(res.data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currency]);

  
  return { data, loading, error };

}

export default useCurrencyInfo