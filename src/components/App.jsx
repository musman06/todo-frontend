import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sapphire-chatter-vertebra.glitch.me/api/v1/todo"
        );
        setItems((el) => response?.data?.data?.todos || []);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchData();
  }, []);

  const addItem = async (inputText) => {
    if (!inputText) return;
    const newItem = {
      name: inputText,
      status: "pending",
      priority: "high",
      createdDate: "20-03-2024",
      dueDate: "24-03-2024",
      updatedDate: "20-03-2024",
    };
    try {
      const response = await axios.post(
        "https://sapphire-chatter-vertebra.glitch.me/api/v1/todo",
        {
          ...newItem,
        }
      );
      if (response?.status === 201) {
        setItems((prevItems) => [...prevItems, newItem]);
      } else {
        console.error("Error making post request");
      }
    } catch (error) {
      console.error("Error making post request:", error);
    }
  };

  console.log(items);

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(
        `https://sapphire-chatter-vertebra.glitch.me/api/v1/todo/${id}`
      );
      if (response?.status === 200) {
        setItems((prevItems) => prevItems?.filter((item) => item?.id !== id));
      } else {
        console.error("Error making post request");
      }
    } catch (error) {
      console.error("Error making post request:", error);
    }
  };

  const handleEdit = async (id, text) => {
    const newItem = items?.find((item) => item?.id === id);
    try {
      const response = await axios.patch(
        `https://sapphire-chatter-vertebra.glitch.me/api/v1/todo/${id}`,
        {
          ...newItem,
          name: text,
        }
      );
      if (response?.status === 200) {
        setItems((prevItems) =>
          prevItems?.map((item) =>
            item?.id === id ? { ...item, name: text } : item
          )
        );
      } else {
        console.error("Error making post request");
      }
    } catch (error) {
      console.error("Error making post request:", error);
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul className="todoslist">
          {items?.map((todoItem, index) => (
            <ToDoItem
              key={todoItem?.id}
              item={todoItem}
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
