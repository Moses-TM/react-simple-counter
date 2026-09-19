import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function Decrement() {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      setCount(0)
    }
  }

  function Reset() {
    setCount(0)
  }
  return (
    <div className="flex flex-col items-center max-h-screen overflow-x-hidden ">
      <div className="text-4xl">
        <header>Counter</header>
      </div>
      <div className="h-[calc(100vh-2.25rem)] w-150 flex flex-col items-center justify-center">
        <p className="flex h-50 w-auto items-center justify-center text-9xl">{count}</p>

        <div className="w-auto pt-2">
          <button className="mr-2 bg-red-500 w-10 h-10 rounded-sm shadow-[0_5px_0_2px_#feaeb1]  active:shadow-[0_2px_0_1px_#feaeb1]  transition-all duration-75 active:translate-y-0.5 " onClick={Decrement}>-</button>
          <button className="mr-2 ml-2 pr-2 pl-2 bg-gray-200 w-auto h-10 rounded-sm shadow-[0_5px_0_2px_#d1d5db] active:shadow-[0_2px_0_1px_#d1d5db] transition-all duration-75 active:translate-y-0.5" onClick={Reset}>Reset</button>
          <button className="ml-2 bg-green-500 w-10 h-10 rounded-sm shadow-[0_5px_0_2px_#dcfce7] active:shadow-[0_2px_0_1px_#dcfce7]  transition-all duration-75 active:translate-y-0.5" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Counter