import React, { useCallback, useState } from "react";

const useInput = (value: string) => {
  const [state, setState] = useState(value);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  return [state, onChange] as [string, typeof onChange];
};
export default useInput;
