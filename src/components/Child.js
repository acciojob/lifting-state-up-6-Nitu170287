import React from "react"

const Child = ({todos, markTodoCompleted })=>{
    return(
        <div>
        <h2>Child Componenet</h2>
            {todos.map(task => <li>{task.todo} {!task.state && (<button onClick={()=>{markTodoCompleted(task.id)}}>Complete</button>)}</li>)}
        
        </div>
    )
}
export default Child