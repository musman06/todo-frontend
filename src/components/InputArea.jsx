import React, { useState } from "react";

function InputArea({ onAdd, type, value = "", onCancel }) {
  const [inputText, setInputText] = useState(value || "");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      {type !== "edit" && (
        <div className="input-actions">
          <button
            onClick={() => {
              onAdd(inputText);
              setInputText("");
            }}
          >
            <span>Add</span>
          </button>
        </div>
      )}
      {type === "edit" && (
        <div className="input-actions">
          <button
            onClick={() => {
              onAdd(inputText);
              setInputText("");
            }}
            className="editButton"
          >
            Save
          </button>
          <button className="deleteButton" onClick={onCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default InputArea;
