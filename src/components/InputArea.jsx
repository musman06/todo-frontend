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
      <div className="input-actions">
        <button
          onClick={() => {
            onAdd(inputText);
            setInputText("");
          }}
        >
          <span>{type === "edit" ? "Save" : "Add"}</span>
        </button>
        {type === "edit" && (
          <button className="deleteButton" onClick={onCancel}>
            <span>Cancel</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default InputArea;
