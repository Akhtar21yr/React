import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color, width: '100vw', height: "100%" }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-10">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-3 rounded-3xl">

          <button
          onClick={() => {setColor('red')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'red' }}
          >Red</button>

          <button 
          onClick={() => {setColor('green')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'green' }}
          >green</button>

          <button 
          onClick={() => {setColor('blue')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'blue' }}
          >blue</button>

          <button 
          onClick={() => {setColor('black')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'black' }}
          >black</button>

          <button
          onClick={() => {setColor('grey')}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'grey' }}
          >grey</button>
          
          <button
          onClick={() => {setColor('olive')}}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: 'olive' }}
          >olive</button>

        </div>
      </div>
    </div>
  );
}

export default App;
