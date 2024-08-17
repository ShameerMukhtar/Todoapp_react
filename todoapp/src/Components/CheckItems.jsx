import { useContext } from "react"
import styles from "./CheckItems.module.css"
import { TodoItemsContext } from "../store/todo-items-store"
const CheckItems=()=>{
  const Contextobj=useContext(TodoItemsContext)
  const todoitems=Contextobj.todoitems;
  
  
  
  return  <>
  
  {todoitems.length===0 && <p className={styles.CheckItems}>No work today so, <br></br> Enjoy Your Day!</p>}
  
  
  
  </>


}
export default CheckItems