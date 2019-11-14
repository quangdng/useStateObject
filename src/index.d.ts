export default function useStateObject(
  initialState?: Object
): {
  state: Object;
  setState(state: Object): Object;
};
