"use client";
import React, { useState } from "react";

export const DashBoard = () => {
  const [name, setName] = useState("Nafiur");
  console.log("DashBoard Client Component");
  return (
    <>
      <p>DashBoard Page</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}</p>
    </>
  );
};

export default DashBoard;
