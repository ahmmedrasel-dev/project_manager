const taskReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "TASK_ADDED":
      return [...state, action.payload];
    default:
      return state;
  }
};

export { taskReducer };
