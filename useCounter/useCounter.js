import { useState } from "react"

export const useCounter = ( initialValue = 1) => {

  const [Counter, setCounter] = useState( initialValue)

   const increment = () => {
      setCounter((current) => Counter +1);
   };
   const descrement = () =>{
      setCounter(Counter -1);
   };
   
   const reset = () =>{
      setCounter(initialValue);
   };
   
    return {
        Counter,
        increment,
        descrement,
        reset,
        initialValue

  }
}
