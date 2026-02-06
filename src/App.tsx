import { useState } from "react";
import TaskInput from "./components/TaskInput";
import { Card } from "./components/ui/card";
import type { Task } from "./types/tasks";
import TaskList from "./components/TaskList";


function App() {
  const [task, setTask] = useState<Task[]>([]);
  const addTask = (title:string) => {
    setTask((prev) => [...prev, {id:Date.now(), title, completed:false}]);
  };
  
  const toggleTask = (id:number) => {
    setTask((prev) => prev.map((task) => task.id === id ? {...task, completed : !task.completed} :task,
  ),
);
  };

  const deleteTask = (id:number) => {
    setTask((prev) => prev.filter((task) => task.id !== id));
  }
  const completedCount = task.filter((t) => t.completed).length;

  return (
    <div className="max-w-xl mx-auto mt-14">
      <Card className = "p-6 shadow-md">
        <h1 className = "text-xl font-semibold mb-4"> Task Manager</h1>
        <TaskInput onAdd={addTask}/>
        <TaskList tasks={task} onToggle={toggleTask} onDelete={deleteTask}/>
        <p>
          Completed: {completedCount}/{task.length}
        </p>
      </Card>
      
    </div>
  );
} 

export default App;