import {useState} from "react";
function  App(){
  const[tasks,setTask]=useState([])
  const[text,setText]=useState("")
  const addTask=()=>{
    setTask([...tasks,{name:text,completed:false}])
    setText("")
  }
const deleteTask=(index)=>{
  SetTask(tasks.filter((_,i)=> i !==index))


}
  return(
    <>
    <h1> TODOLIST </h1>
    <input 
    value={text}
    onChange={(e)=>setText(e.target.value)}
    placeholder="enter a task"
    />
    <button onClick={addTask}>ADD</button>
    <ul>
      {tasks.map((task,index)=>(
        <li key={index}>
          <input
          type="checkbox"
          checked={tasks.completed}
           />
          <span>{task.name}</span>
          <button onclick={()=>deleteTask(index)}>delete</button>
        </li>
      ))}
    </ul>




    </>
  )
}
export default App;