import React from 'react'
import TodoItem from '../components/TodoItem';
export default function Todos(props) {
  return (
    <>
      <div className="container my-3" style={{  marginBottom: "10px" }}>
        <div className="card text-dark bg-light mb-3 text-center" style={{ maxWidth: "25rem" }}>
          <div className="card-header">My Todos List</div></div>
        {props.todos.length === 0 ? <p className="my-4">No Todos To Display</p>
          : props.todos.map((todos) => {
            return <TodoItem todo={todos} key={todos.Sno} onDelete={props.onDelete} />
          })}
      </div>
    </>
  )
}
