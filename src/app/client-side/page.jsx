"use client";
import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import ClientUtils from "../utils/client-utils";

export default function ClientComponent() {
  const result = ClientUtils();
  const theme = useTheme();
  return <h1>Client Route {result}</h1>;
}
