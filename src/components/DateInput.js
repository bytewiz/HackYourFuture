import React from "react";

export default function DateInput({ date, handleDateChange }) {
  return (
    <input name="date" type="date" value={date} onChange={handleDateChange} />
  );
}
