import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount]= useState(0);
    const [isActive, setIsActive]= useState(false);


    useEffect(()=>{
        let timerClear;
        if(isActive){
            timerClear= setInterval(() => {
                setCount((prev)=>(prev+1));
            }, 500);
        }
        return ()=> clearInterval(timerClear)
    },[isActive])
    const handleIncrement=()=>{
        setIsActive(true);
        
    }
    const handleDecrement=()=>{
        setIsActive(false);
    }
     // Reset the counter to zero and stop it
  const resetCounter = () => {
    setIsActive(false);
    setCount(0);
  };
  return (

    
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement} disabled={isActive}>Increment</button>
        <button onClick={handleDecrement} disabled={!isActive}>Decrement</button>
        <button onClick={resetCounter}>reset</button>
    </div>
  )
}

export default Counter