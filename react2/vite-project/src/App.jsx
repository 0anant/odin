import { useState } from "react";
import { useEffect } from "react";

function App() {
  return (
    <div>
      
       hi there!

       <Counter></Counter>
    </div>
    
  )
}


function Counter() {

  const [count, setCount] = useState(0)

  console.log("counter");

  useEffect( function(){
    setInterval( function(){
    setCount(function(count){
      return count + 1;
    });
  },1000);
  console.log("counted")
  }, [])
   
  
    function increaseCount(){
      setCount(count + 1)
    }
    return (
      <div>
        <h1 id="text">{count}</h1>
        <button onClick={increaseCount}>Increase Count</button>
      </div>

    )
}

export default App
