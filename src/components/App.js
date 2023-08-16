import React, { useState } from "react";
import "./../styles/App.css";
import Child from "./Child";

const App = () => {
  const [todos, setTodos] = useState([
    {id:1, todo: "Learn React", state: false },
    {id:2, todo: "Build a React app", state: false },
    {id:3, todo: "Deploy the React app", state: false },
  ]);



  // function markComplete(taskId) {
  //   let obj = todos.filter((item) => (item.id === taskId));
  //   console.log(obj);
  //   obj.state = true;
  //   console.log(todos);
  // }
    function markTodoCompleted(taskId){
      const updatedTodo = todos.map((todo)=> {
        if(todo.id == taskId){
          return {...todo, state:true}
        }else{
          return todo
        }
      })
      console.log(updatedTodo)
      setTodos(updatedTodo)
    }

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <Child todos={todos} markTodoCompleted={markTodoCompleted} />
    </div>
  );
};

export default App;
