import React from 'react'

function InputBox({
  label,
  amount,
  onChangeAmount,
  onCurrencyChange,
  currencyOptions=[],
  selectedCurrency="usd",
  ammountDisabled = false,
  currencyDisabled = false,
  className = ""
}) {
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1-2'>
        <label className='text-black/40 mb-2 font-bold inline-block' htmlFor="">{label}</label> 
        <input type="number"
        className='outline-none w-full bg-transparent py-1.5 m-4 p-2 border-2'
        placeholder='Amout'
        disabled={ammountDisabled}
        value={amount}
        onChange={(e)=>{onChangeAmount && onChangeAmount(Number(e.target.value))}}
        />
      </div>

      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 font-bold mb-2 w-full'>Currency Type</p>
        <select 
        className='rounded-lg border-b-2 border-b-blue-900  px-1 py-1 bg-gray-100 cursor-pointer outline-none '
        value={selectedCurrency}
        onChange={(e) => {
          onCurrencyChange && onCurrencyChange(e.target.value)
        }}
        disabled={currencyDisabled}
        >
          {currencyOptions.map((curr) => (  //Dont use curly brace here you dont have to return anything
            <option key={curr} value={curr}>{curr}</option>
          ) )}
        </select>
      </div>

    </div>
  )
}

export default InputBox