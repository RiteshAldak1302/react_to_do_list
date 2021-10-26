import React ,{ useState } from 'react'

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !description){
          alert("title or description should not be blank")
        }
        else{
         props.addTodo(title,description)
         setTitle("");
         setDescription("")
        }
    }
   const handleOnChangeTitle=(e)=>{
       setTitle(e.target.value)
   }
   const onChangeDecs=(event)=>{
    setDescription(event.target.value)
}
    return (
        <>
            <div className="container ">
                <h3 className=" my-3">Add Todo</h3>
                <form>
                    <div className="mb-3">
                    <div className="form-group my-2">
                        <label htmlFor="exampleInputEmail1">Todo Title</label> 
                        <input type="title" value={title}  onChange={handleOnChangeTitle} className="form-control" id="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group my-1">
                        <label htmlFor="exampleInputPassword1">Todo Description</label>
                        <input type="text" value={description}  onChange={onChangeDecs} className="form-control" id="description" />
                    </div>
                    <button type="submit" onClick={submit} className="btn btn-sm btn-success my-3">Add Todo</button>
                    </div>
                </form>
            </div>
        </>
    )
}
