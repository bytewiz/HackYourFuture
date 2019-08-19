import React from "react";

export default function Page({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100%"
      }}
    >
      {children}
    </div>
  );
}
