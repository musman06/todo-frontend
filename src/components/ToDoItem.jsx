import React, { useState } from "react";
import InputArea from "./InputArea";

function ToDoItem({ text, id, onDeleteClick, onEditClick }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="deleteList">
      {isEdit ? (
        <InputArea
          onAdd={(text) => {
            if (!text) return;
            onEditClick(id, text);
            setIsEdit(false);
          }}
          type="edit"
          value={text}
          onCancel={() => setIsEdit(false)}
        />
      ) : (
        <li>{text}</li>
      )}
      {!isEdit ? (
        <div className="list-actions">
          <button className="editButton" onClick={() => setIsEdit(true)}>
            Edit
          </button>
          <button
            className="deleteButton"
            onClick={() => {
              onDeleteClick(id);
            }}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ToDoItem;
