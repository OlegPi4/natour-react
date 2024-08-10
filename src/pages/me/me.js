import * as React from "react";
import { useEffect } from "react";

const Me = () => {
  useEffect(() => {
    document.title = "Natour | me";
  });

  return (
    <div>
      <h1>Me</h1>
    </div>
  );
};
export default Me;
