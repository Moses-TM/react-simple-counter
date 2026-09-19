import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count + 1)
  }

  function Decrement(){
    if(count > 0){
      setCount(count - 1)
    }
    else{
      setCount(0)
    }
  }

  function Reset(){
    setCount(0)
  }
  return (
      <div>
        <div>
          <header>Counter</header>
        </div>
        <div>
          <p>{count}</p>
        </div>
        <div>
          <button onClick={Decrement}>-</button>
          <button onClick={Reset}>Reset</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
  )
}

export default Counter