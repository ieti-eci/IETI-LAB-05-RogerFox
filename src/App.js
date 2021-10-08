import { useState } from "react";
import { TaskItem } from "./TaskItem";

function App() {

  const [tasks, setTasks]=useState([
    {
      isCompleted: true,
      name: "learn React"},
    {
      isCompleted:false,
      name:"learn Hooks"},
    {
      isCompleted:true,
      name:"keep on keeping on"
    },

  ]);

  const [textValue, setTextValue] = useState("");

  const handleSubmit= (event)=>{
    event.preventDefault();
    newTask(textValue);

  };


  const handleTaskChange = (index) =>()=>{
    console.log("changed"+index)
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTasks(arr)
  };

  const handleTextChange = (event)=>{
    const value = event.target.value;
    setTextValue (value);
  };

  const newTask=(name)=>{
    const newTask = {
      isCompleted:false,
      name: name,

    };
    setTasks([...tasks, newTask]);

  };


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          value={textValue}
          onChange={handleTextChange}
          type="text"
          placeholder="Task name"
        />
        <button>Create Task</button>
      </form>        

      <ul>
        {tasks.map ((task, index)=>{
          return(
            <TaskItem
              isChecked={task.isCompleted}
              taskName={task.name}
              onTaskChange={handleTaskChange(index)}

            />
          );
        })}
    
                
      </ul>
    </main>
  );
  
}

export default App;
