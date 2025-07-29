import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');

  function changeColor(color){
      setColor(color);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 p-6 rounded-2xl m-1.5">
        <button 
        style={{backgroundColor:'yellow'}}
        // onClick={() => {changeColor('yellow')}}  //* bina run karaye parameter pass karna click hoga tabhi run hoga
        onClick={() => setColor('yellow')}  //* bina run karaye parameter pass karna click hoga tabhi run hoga
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Yellow</button>
        <button 
        onClick={() => setColor('red')} 
        style={{backgroundColor:'red'}}

        // onClick={() => {changeColor('red')}} 
        className='outline-none px-4 py-1 rounded-full shadow-lg '>Red</button>
      </div>
    </div>
  );
}



export default App;