import React from 'react'

export default function TodoItem({todo, onDelete,last}) {
    return (
        <>  <div className="container my-3">
            <h4>{todo.title}</h4> 
            <p>{todo.description}</p>
            <div className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}} >Delete</div>
            <hr />
            </div>
        </>
    )
}
