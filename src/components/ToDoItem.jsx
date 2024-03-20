import React, { useState } from "react";
import InputArea from "./InputArea";

function ToDoItem({ item, onDeleteClick, onEditClick }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="deleteList">
      {isEdit ? (
        <InputArea
          onAdd={(text) => {
            if (!text) return;
            onEditClick(item?.id, text);
            setIsEdit(false);
          }}
          type="edit"
          value={item?.todoName}
          onCancel={() => setIsEdit(false)}
        />
      ) : (
        <li>{item?.todoName}</li>
      )}
      {!isEdit ? (
        <div className="list-actions">
          <button className="editButton" onClick={() => setIsEdit(true)}>
            Edit
          </button>
          <button
            className="deleteButton"
            onClick={() => {
              onDeleteClick(item?.id);
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
