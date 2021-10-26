import './App.css';
import Footer from './components/Footer';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/About';
import { useState ,useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
     let initTodo;
     if(localStorage.getItem("todos")===null){
       initTodo=[]
     }else{
       initTodo = JSON.parse(localStorage.getItem("todos"));
     }
 
 
let onDelete =(todo)=>{
  console.log('delete this item',todo)
  setTodos(todos.filter((e)=>{
    return e!==todo
  }))
  alert("Confirm to Delete this todo")
}
  let addTodo =(title,description)=>{
  console.log("i am adding this todo",title,description)
  let sno;
  if(todos.length===0){
    sno=1
  }else{
    sno= todos[todos.length-1].sno +1;
  }
   const myTodo={
     sno : sno,
     title : title,
     description :description
   }
   setTodos([...todos,myTodo]);
   console.log(myTodo)
   
    
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  
  return (
        <>
        <Router>
         <Header/>
         
         <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <AddTodo addTodo={addTodo} />
         <Todos  todos={todos} onDelete={onDelete} />
          </Route>
         <Footer/>
        </Switch>
      
    </Router>
        </>
  );
}

export default App;
