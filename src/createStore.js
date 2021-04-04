export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: "__INIT__" });
  const subscribers = [];
  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callBack) {
      subscribers.push(callBack);
    },
    getState() {
      return state;
    }
  }
}
