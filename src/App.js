/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";

import { DataStore } from "@aws-amplify/datastore";
import { Task } from "./models";

import TaskItem from "./components/task-item";

function App() {
  const [tasks, setTasks] = useState([]);

  const queryTasks = async () => {
    try {
      const tasks = await DataStore.query(Task);
      if (tasks) {
        console.log("Posts retrieved successfully!", tasks);
        if (tasks?.length > 0) {
          setTasks(tasks);
        }
      }
    } catch (error) {
      console.log("Error retrieving tasks", error);
    }
  };

  useEffect(() => {
    queryTasks();
    return () => {};
  }, []);

  return (
    <div className="App">
      <ul>
        {tasks.map((el, i) => {
          <TaskItem key={i} title={el} />;
        })}
      </ul>
    </div>
  );
}

export default App;
