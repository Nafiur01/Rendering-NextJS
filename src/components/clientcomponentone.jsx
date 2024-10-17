"use client";
import { useState } from "react";
import React from "react";

export function ClientComponentOne() {
  const [name, setName] = useState("Spider Man");
  return <div>Client Component One</div>;
}
