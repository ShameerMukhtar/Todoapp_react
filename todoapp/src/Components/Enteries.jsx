import { useRef} from "react"
import { IoIosAdd } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function Enteries(){
  const Contextobj=useContext(TodoItemsContext)
  const handleNewItem=Contextobj.handleNewItem;
 
const todonameElements=useRef();
const tododateElements=useRef();



const handleAddButtonClicked=(event)=>{
  event.preventDefault();
const todoName= todonameElements.current.value
const todoDate= tododateElements.current.value

handleNewItem(todoName,todoDate)
tododateElements.current.value=""
todonameElements.current.value=""
}




return <div classna="container text-center">

<form className="row kgrow"
onSubmit={handleAddButtonClicked}
>
  <div className="col-6"><input type="text"placeholder="Enter Todo here"
   
  
    ref={todonameElements}
    ></input></div>
  
  
  
  
  
  
  <div className="col-4"><input type="date" 

 
  ref={tododateElements}
  ></input></div>
  
  
  
  
  
  <div className="col-2"><button  className="btn btn-success kg-button"
  
  
  ><IoIosAdd/>
  </button></div>
</form>
</div>







}
export default Enteries