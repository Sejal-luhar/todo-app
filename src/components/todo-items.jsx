import TodoItem from "./todo-item";
import styles from "./todo-items.module.css";
const TodoItems=({todoItems ,onDeleteClick}) =>{
  return (
  <div className={styles.itemsContainer}>
  {todoItems.map((item)=> (
    <TodoItem 
    key={item.name}
    todoDate={item.dueDate}  todoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>
  ))}
  
   </div>
  );
};
export default TodoItems;