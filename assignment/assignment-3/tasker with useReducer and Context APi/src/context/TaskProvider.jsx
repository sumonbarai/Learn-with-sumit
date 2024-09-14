/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import taskReducer, { initialTasks } from "../reducer/task/reducer";

const TaskContext = createContext(null);

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={{ tasksState: state, taskDispatch: dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => useContext(TaskContext);

export { useTask, TaskProvider };
