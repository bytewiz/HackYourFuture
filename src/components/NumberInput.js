import React from "react";

export default function NumberInput({ name, value, onChange }) {
  return (
    <label>
      {name}
      <input type="number" value={value} name={name} onChange={onChange} />
    </label>
  );
}
