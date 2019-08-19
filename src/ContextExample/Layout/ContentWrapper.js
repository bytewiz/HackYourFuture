import React from "react";

export default function ContentWrapper({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
      {children}
    </div>
  );
}
