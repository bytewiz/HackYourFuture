import React from "react";

export default function TextInput({ text, handleTextChange }) {
  return (
    <input name="text" type="text" value={text} onChange={handleTextChange} />
  );
}
