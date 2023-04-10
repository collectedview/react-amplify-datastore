import { useState, useEffect } from "react";

import { DataStore } from "@aws-amplify/datastore";
import { Task } from "./models";

import TaskItem from "./components/task-item";

function App() {
  const [tasks, setTasks] = useState([]);

  const queryTasks = async () => {
    try {
      const models = await DataStore.query(Task);
      if (models) {
        console.log("Models retrieved successfully!", models);
        if (models?.length > 0) {
          return setTasks(models);
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
        {tasks.map(({ id, title, description, status }) => {
          return (
            <TaskItem
              key={id}
              title={title}
              description={description}
              status={status}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
