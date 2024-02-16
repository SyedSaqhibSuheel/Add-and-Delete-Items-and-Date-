
function TodoItem({food,date,  onDeleteClick}){
    return(
    <div className="row">
    <div className="col-6"><h2>{food}</h2></div>
    <div className="col-4"><h2>{date}</h2></div>
    <div className="col-2"><button type="button" className="btn btn-danger" onClick={()=> onDeleteClick(food)}>Delete</button></div>
  </div>);
}

export default TodoItem;