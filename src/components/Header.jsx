import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <aside
      style={{
        width: 220,
        minHeight: "100vh",
        borderRight: "1px solid #eee",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: "1.5rem" }}>
        {/* Logo / Title - not part of navigation */}
        <h2 style={{ margin: 0 }}>Mon Portfolio</h2>
        <small style={{ color: "#666" }}>Vincent Liu</small>
      </div>

      <Navbar />
    </aside>
  );
}
