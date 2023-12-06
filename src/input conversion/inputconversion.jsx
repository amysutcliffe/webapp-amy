import { useState } from "react";

export function InputConversion({}) {
  const [inputValue, setValue] = useState(0);
  return (
    <>
      {" "}
      <h2>Conversion: Euros to Dollars</h2>
      <div>
        {" "}
        <input onChange={(e) => setValue(e.target.value)} /> €
        <div>
          <input onChange={(e) => setValue(e.target.value)} /> $
        </div>
        <div>
          You entered {inputValue} Euros that equals {inputValue * 1.0841}{" "}
          Dollars
        </div>{" "}
      </div>
    </>
  );
}
