import { useReducer } from "react";
import Page from "./components/Page";
import { taskContext } from "./context";
import { getAllTasks } from "./data/data";
import { taskReducer } from "./reducers/taskReducer";
function App() {
  const tasks = getAllTasks();
  const [state, dispatch] = useReducer(taskReducer, tasks);
  return (
    <taskContext.Provider value={{ state, dispatch }}>
      <div className="bg-gray-900 text-white">
        <Page />
      </div>
    </taskContext.Provider>
  );
}

export default App;
