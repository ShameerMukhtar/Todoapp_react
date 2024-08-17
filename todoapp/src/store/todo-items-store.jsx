import { createContext } from "react"
export const  TodoItemsContext= createContext([{
  // Not Neccasary only if you want to autocomplete in other components:
  todoitems:[],
  handleNewItem:()=>{},
  handleOnDeleteButton:()=>{}}]);
