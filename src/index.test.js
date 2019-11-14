import React from "react";
import useStateObject from "./index";
import { render, fireEvent } from "@testing-library/react";

describe("Testing useStateObject hook", () => {
  const initialState = {
    stateA: "stateA",
    stateB: "stateB"
  };

  const SampleComponent = () => {
    const [state, setState] = useStateObject(initialState);

    return (
      <>
        {Object.values(state).map(val => val && <span key={val}>{val}</span>)}
        <button
          data-testid="setStateA"
          onClick={() => setState({ stateA: "newStateA" })}
        />
        <button
          data-testid="setStateB"
          onClick={() => setState({ stateB: "newStateB" })}
        />
        <button
          data-testid="setNewStateC"
          onClick={() => setState({ stateC: "stateC" })}
        />
      </>
    );
  };

  it("should set state A and do not change the rest of the state", () => {
    const { getByTestId, getByText, queryByText } = render(<SampleComponent />);

    Object.values(initialState).forEach(val => getByText(val));

    const stateBtn = getByTestId("setStateA");
    fireEvent.click(stateBtn);
    getByText("newStateA");
    getByText("stateB");
    expect(queryByText(initialState.stateA)).not.toBeInTheDocument();
  });

  it("should set state B and do not change the rest of the state", () => {
    const { getByTestId, getByText, queryByText } = render(<SampleComponent />);

    const stateBtn = getByTestId("setStateB");
    fireEvent.click(stateBtn);
    getByText("stateA");
    getByText("newStateB");
    expect(queryByText(initialState.stateB)).not.toBeInTheDocument();
  });

  it("should add new state C and do not change the rest of the state", () => {
    const { getByTestId, getByText, queryByText } = render(<SampleComponent />);
    expect(queryByText("stateC")).not.toBeInTheDocument();

    const stateBtn = getByTestId("setNewStateC");
    fireEvent.click(stateBtn);
    Object.values(initialState).forEach(val => getByText(val));
    getByText("stateC");
  });

  it("should throw error if initial state is not an object", () => {
    const InvalidStateComponent = () => {
      useStateObject("test");

      return "component";
    };

    expect(() => render(<InvalidStateComponent />)).toThrow(
      "Initial state has to be an object to be able to make use of this hook."
    );
  });
});
