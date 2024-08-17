import AppName from './Components/AppName'
import Enteries from './Components/Enteries'
import { TodoItemsContext } from './store/todo-items-store';

import Todoitems from './Components/Todoitems';
import "./App.css";
import { useReducer} from 'react';
import CheckItems from './Components/CheckItems';

//pure function 
const todoitemsReducer=(currValue,action)=>{

  let newTodoItem=currValue;
  
  if(action.type==="NEW_ITEM"){
 
     newTodoItem=[...currValue,{
  
      todoName: action.payload.todoName ,
      todoDate:action.payload.todoDate}];
      

}
else if (action.type==="DELETE_ITEM"){
 newTodoItem = currValue.filter(item=>item.todoName!==action.payload.todoName);
  return newTodoItem;
}
return newTodoItem;
}






function App() {
 




  // let [todoitems,settodoitems]=useState( []); 
  const [todoitems,dispatchTodo]= useReducer(todoitemsReducer,[])


// Add Items

  const handleNewItem=(todoName,todoDate)=>{
  if(todoName.length>=1 && todoDate){
    
   const newItemAction={
type:"NEW_ITEM" 
,
payload:{
  todoName,
  todoDate

}
   }
   dispatchTodo(newItemAction)
   
   
   
    
    
    }

}
 // Delete items using filter method
const handleOnDeleteButton=(todoName,todoDate)=>{
   // filter method
const DeleteTodoItems={
type:"DELETE_ITEM",
payload:{todoName:todoName}
}
dispatchTodo(DeleteTodoItems)

  
     
}
 


 
 return<>
 <TodoItemsContext.Provider value={{
  todoitems:todoitems,
  handleNewItem:handleNewItem,
  handleOnDeleteButton:handleOnDeleteButton}}>
 
 
 <center className='tudo-container'>

 <AppName></AppName>
  <CheckItems></CheckItems>
  <Enteries ></Enteries>
   <Todoitems ></Todoitems>

 </center> 
 </TodoItemsContext.Provider>
 </>
 };

export default App
