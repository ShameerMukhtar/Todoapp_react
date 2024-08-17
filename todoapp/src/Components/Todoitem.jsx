import { MdDeleteSweep } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function Todoitem({todoName,todoDate}){
  const Contextobj=useContext(TodoItemsContext)
  const handleOnDeleteButton=Contextobj.handleOnDeleteButton;


  return <div className="row kgrow">
  <div className="col-6">{todoName}</div>
  <div className="col-4" >{todoDate}</div>
  <div className="col-2" ><button type="button" className="btn btn-danger kg-button"
  onClick={()=>handleOnDeleteButton(todoName,todoDate)}
  ><MdDeleteSweep />
  </button></div>
  
  </div>
  
  }
  export default Todoitem