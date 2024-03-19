import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([
    "complete this task",
    "complete this task as soon",
  ]);

  function addItem(inputText) {
    if (!inputText) return;
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function handleEdit(id, text) {
    setItems((prevItems) =>
      prevItems?.map((item, index) => (index === id ? text : item))
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} type="create" />
      <div>
        <ul className="todoslist">
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onDeleteClick={deleteItem}
              onEditClick={handleEdit}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
