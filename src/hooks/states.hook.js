/* eslint-disable */
import { useState } from "react";

function useStates(init) {
  const [variable, setVariable] = useState(init);

  const updateVariable = (e) => {
    setVariable(e.target.value);
    console.log(`${e.target.value}  -   ${variable}`);
  };

  return { variable, updateVariable };
}

export default useStates;
