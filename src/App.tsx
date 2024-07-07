import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
}

export default App;
