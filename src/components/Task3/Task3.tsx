import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  /*
----------------------------------------------
  useEffect(() => {
    setCount(count + 1);
  }, [count]);
----------------------------------------------
What wrong with above code? 
- It will cause infinite loop.
- useEffect is dependent on count.
- Inside useEffect same state (count) is updating using setCount.
- Every state update cause re-render. 
- Re-render change the value of count, it again trigger useEffect.
- This craate infinite loop. 
- component render with count = 0. 
- useEffect run because the component is mounted. 
- setCount update the count value. 
- state update trigger re-render because count value changed. 
- Dependency change cause useEffect to run again. 
  */

  function handleClick() {
    setCount(count + 1);
  }

  return <h1 onClick={handleClick}>{count}</h1>;

  /* 
  What the above code do:
  - Component render with count = 0.
  - h1 display 0.
  - nothing update automatically. 
  - user click on <h1> then onClick handler run and update state with setCount(count + 1).
  - Component re-render with count updated.
  */
};
