import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'


function App() {
  const [fromAmount, setFromAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [toAmount, setToAmount] = useState(0);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  const { data, loading, error } = useCurrencyInfo(fromCurrency);


  const currencyOptions = data ? Object.keys(data) : [];
  // console.log(data);
  // console.log(currencyOptions.length);

  // useEffect(() => {
  //   if (data && data[toCurrency]) {
  //     const rate = data[toCurrency].value;
  //     setToAmount((fromAmount * rate).toFixed(2));
  //   }
  // }, [fromAmount, fromCurrency, toCurrency, data]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error fetching data</div>;

   // Convert when rates or selections change
  
   useEffect(() => {
    if (!data || !data[toCurrency]) return;
    const rate = data[toCurrency].value;

    if (amountInFromCurrency) {
      setToAmount((fromAmount*rate).toFixed(2));
    } else {
      setFromAmount((toAmount/rate).toFixed(2));
    }
  }, [fromAmount, toAmount, fromCurrency, toCurrency, data, amountInFromCurrency]);

  const handleFromAmountChange=(val) => {
    setFromAmount(val);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange= (val)=>{
    setToAmount(val);
    setAmountInFromCurrency(false);
  };

  const handleSwap = ()=>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    // also swap the amounts
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setAmountInFromCurrency(true); 
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;


  return (
    <>
    <div
      className='w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage:`url(https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg)`, backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'}}
    >
      <div className="bg-white/70 p-5 rounded-xl shadow-lg max-w-md w-full">
        <h1 className='text-2xl font-bold mb-4 text-center'>Currency Converter</h1>
        
        {/* From Box */}
        <InputBox
          label="From"
          amount={fromAmount}
          onChangeAmount={setFromAmount}
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />

        <div className="text-center my-4">=</div>
        <div className="flex justify-center my-4">
          <button
            onClick={handleSwap}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Swap
          </button>
        </div>

        {/* To Box */}
        <InputBox
          label="To"
          amount={toAmount}
          onChangeAmount={setToAmount} // optional, if you want manual edit
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onCurrencyChange={setToCurrency}
        />
      </div>
    </div>
    </>
  )
}

export default App
