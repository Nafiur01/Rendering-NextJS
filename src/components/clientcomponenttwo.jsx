"use client";
import { useState } from "react";
import React from "react";

export function ClientComponentTwo() {
  const [name, setName] = useState("Spider Man");
  return <div>Client Component Two</div>;
}
