export function createStore(rootReducer, initialState) {
  const state = rootReducer(initialState, { type: "__INIT__" });
  const subscribers = [];
  return {
    dispatch(action) {
      const state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callBack) {
      subscribers.push(callBack);
    },
    getState() {
      return state;
    },
  };
}
