import React from "react";
import Heading from "./Heading";
import Input from "./Input";
import TodoItems from "./TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Welcome";


import "./App.css";

function App(){

    const initialTodoItems=[
    {
        food:"egg",
        date:"20/05/2001",
    },
    {
        food:"cake",
        date:"20/05/2001",

    },
];
const[todoItems,setTodoItems]= useState(initialTodoItems)

const handleNewItem =(itemName, itemDuedate) => {
    console.log(`new item add:${itemName} date:${itemDuedate}`);
    const newTodoItems = [...todoItems,{food: itemName, date:itemDuedate}];
    setTodoItems(newTodoItems);
};

const handleDeleteItem=(todoItemName)=>{
    const newTodoItems = todoItems.filter((item) => item.food !== todoItemName);
    setTodoItems(newTodoItems);
}

    return (
    <center>
   
    <Heading/>
    <Input onNewItem={handleNewItem}/>
    {todoItems.length === 0 && <WelcomeMessage />}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
   
    
  
   
    </center>
    );
}

export default App;