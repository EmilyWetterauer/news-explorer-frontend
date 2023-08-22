import { useState } from "react";

const useInputWithState = (initialValue) => {
  const [query, setQuery] = useState(initialValue);

  const handleChange = (event) => {
    console.log(event.target);
    setQuery(event.target.value);
  };
  return [query, handleChange];
};

export default useInputWithState;
