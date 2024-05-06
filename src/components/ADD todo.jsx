import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function AddTodo({onNewItems}){
   const [todoName, settodoName]=useState("");
   const [dueDate, settodoDate]=useState("");

   const handleNameChnage =(event) =>{
  settodoName(event.target.value);
   };

   const handleDateChnage =(event) =>{
      settodoDate(event.target.value);
   };
   const handleAddButtonClicked=(event) => {
      event.preventDefault();
      onNewItems(todoName,dueDate);
      settodoDate('');
      settodoName('');
   };

 return (
  <div className="container">
    <form className="row kg-row" onSubmit=
    {handleAddButtonClicked}>
       <div className="col-6">
         <input type="text" placeholder="Enter todo here"
         value={todoName}
         onChange={handleNameChnage} />
       </div>
       <div className="col-4">
          <input type="date"
          value={dueDate}
          onChange={handleDateChnage} />
      </div>
       <div className="col-2">
           <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>
           <IoAddCircleOutline />
           </button>
      </div>
   </form>
</div>
 );
}
export default AddTodo;