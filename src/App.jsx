import AddTodo from "./components/ADD todo";
import AppName from "./components/Appname";
import "./App.css";
import TodoItems from "./components/todo-items";
import { useState } from "react";
import WelcomeMsg from "./components/welcomemsg";
function App(){

  const initialTodoItems =[
     ];

  const [todoItems, setTodoItems] =useState(initialTodoItems);
  const handleNewItems= (itemName,itemdueDate) => {
     console.log(`new item aadded: ${itemName} date:${itemdueDate}`);
     const newTodoItems=[...todoItems,
    {name:itemName , dueDate:itemdueDate},];
    setTodoItems(newTodoItems);
  };
  const handleDeleteButton= (todoItemName) => {
    const newTodoItems=todoItems.filter ((item)=> item.name!= todoItemName);
   setTodoItems(newTodoItems);
  }
  return (
     <center className="todo-container">
   <AppName></AppName>
   <AddTodo onNewItems={handleNewItems}></AddTodo>
   {todoItems.length==0  && <WelcomeMsg></WelcomeMsg>}
   <TodoItems  todoItems={todoItems} onDeleteClick={handleDeleteButton}></TodoItems>
  
    </center>
  );
}
export default  App;