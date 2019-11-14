import { useState } from "react";

export default function useObjectState(initialState) {
  if (initialState && typeof initialState != "object") {
    throw new Error(
      "Initial state has to be an object to be able to make use of this hook."
    );
  }

  const [state, setStateObject] = useState(initialState);

  // Merging state instead of replacing
  const setState = newState =>
    setStateObject(state => ({
      ...state,
      ...newState
    }));

  return [state, setState];
}
