import { useEffect, useState } from 'react';
import './App.css';


export const ProgressBar= ()=> {
  const [flag,setFlag] = useState(false);

  useEffect(()=>{
    if(flag)return;
    setFlag(true);
    console.log("useffect",flag)
  },[flag]);

  return (
    <>
        <div className={`barCover ${!flag?'bar':''}`}></div>
    </>
  )
}


function App() {
  const [bars, setBars] = useState<number[]>([]);

  const handleClick = () => {
    setBars((prevBars) => [...prevBars, 1]); // Add a new bar when clicked
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <div className='wrapper'>
        {bars.map((value, index) => (
          <ProgressBar key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
