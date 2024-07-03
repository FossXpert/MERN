// My Solution
import { useEffect, useState } from 'react'
import './App1.css'

function ProgressBar(){
    const [flag,setFlag] = useState(false);

    useEffect(()=>{
        if(flag){
            return;
        }
        setFlag(true);
        console.log("useffect",flag)
    },[flag]);

    return (
        <>
        <div className='bar'>
            <div className={`bar-content ${flag ? 'bar-active' : ''}`}>
            </div>
        </div>
        </>
    )
   
}
const App1 = () => {
    const [count,setCount] = useState(0);

    const handleOnclick = () => {
        setCount(count+1);
    }

  return (
    <div className='wrapper'>
        <button onClick={handleOnclick}>Click</button>
        <h1>{count}</h1>
        {/* <div className='bars'> */}
        {Array(count).fill(null).map((value,index)=>(
            <ProgressBar key={index} />
        ))
        }
        {/* </div> */}
    </div>
  )
}

export default App1