export default function useObjectState(
  initialState?: Object
): {
  state: Object;
  setState(state: Object): Object;
};
