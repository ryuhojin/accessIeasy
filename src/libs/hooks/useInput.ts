import React, { useState } from "react";

const useInput = (value: string) => {
  const [state, setState] = useState(value);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return [state, onChange];
};
export default useInput;
