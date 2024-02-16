import React from "react";
import { useState } from "react";




function Input({onNewItem}){
  const[todoName, setTodoName]=useState();
const[dueDate, setDueDate]= useState();

const handelNameChange=(event)=>{
  setTodoName(event.target.value);
};

const handelDateChange = (event)=>{
  setDueDate(event.target.value);
};

const handleAddButtonClicked=()=>{
  onNewItem(todoName,dueDate);
  setDueDate("");
  setTodoName("");
};
    return(
   
    <div className="row">
    <div className="col-6"><input type="text" placeholder="Enter Todo" onChange={handelNameChange} value={todoName}/></div>
    <div className="col-4"><input type="date" onChange={handelDateChange} /></div>
    <div className="col-2"><button type="button" className="btn btn-success" onClick={handleAddButtonClicked} value={dueDate}>Add</button></div>
  </div>


    );
}

export default Input;