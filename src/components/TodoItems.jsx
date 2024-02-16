import TodoItem from "./Todo-Item";

const TodoItems=({todoItems,  onDeleteClick})=>{
    return(
      <div className="container">

        {todoItems.map((item => <TodoItem food={item.food} date={item.date} onDeleteClick={ onDeleteClick}/>))}
        
       
      </div>
    
    );
}
export default TodoItems;