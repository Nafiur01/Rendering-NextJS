"use client";
import React from "react";
import ServerUtils from "../utils/server-utils";

export default function ClientComponent() {
  const result = ServerUtils();
  console.log("server route rendered");
  return (
    <>
      <h1>Client Route Page</h1>
      <p>{result}</p>
    </>
  );
}
