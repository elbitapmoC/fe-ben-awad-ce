import { useState } from "react";

const PhaseOne = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Incremembent By One
      </button>
      ;
    </>
  );
};

export default PhaseOne;
