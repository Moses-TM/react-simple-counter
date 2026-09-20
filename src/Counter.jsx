import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function increment() {
    setCount(count + 1);
  }

  function Decrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  function Reset() {
    setCount(0);
  }
  return (
    <div className="flex flex-col items-center max-h-screen overflow-x-hidden dark:bg-dark-bg">
      <div className="w-screen flex justify-between items-center text-4xl pl-2 pr-2 dark:text-dark-txt">
        <header>Counter</header>
        <button onClick={() => setDark(!dark)}>
          {dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="h-[calc(100vh-2.25rem)] w-150 flex flex-col items-center justify-center">
        <p className="flex h-50 w-auto items-center justify-center text-9xl dark:text-dark-txt">
          {count}
        </p>

        <div className="w-auto pt-2">
          <button
            className="mr-2 bg-red-500 w-10 h-10 rounded-sm shadow-[0_5px_0_2px_#feaeb1]  active:shadow-[0_2px_0_1px_#feaeb1]  transition-all duration-75 active:translate-y-0.5 "
            onClick={Decrement}
          >
            -
          </button>
          <button
            className="mr-2 ml-2 pr-2 pl-2 bg-gray-200 w-auto h-10 rounded-sm shadow-[0_5px_0_2px_#d1d5db] active:shadow-[0_2px_0_1px_#d1d5db] transition-all duration-75 active:translate-y-0.5"
            onClick={Reset}
          >
            Reset
          </button>
          <button
            className="ml-2 bg-green-500 w-10 h-10 rounded-sm shadow-[0_5px_0_2px_#dcfce7] active:shadow-[0_2px_0_1px_#dcfce7]  transition-all duration-75 active:translate-y-0.5"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex w-screen pr-2 justify-end">
          <footer className="dark:text-dark-txt">&copy; Moses-TM</footer>
      </div>
    </div>
  );
};

export default Counter;
