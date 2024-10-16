import { cookies } from "next/headers";
import React from "react";

export default function AboutPage() {
  const CookieStore = cookies();
  const theme = CookieStore.get("theme");
  console.log(theme);
  console.log("About Server Component");
  return <div>About Page {new Date().toLocaleTimeString()}</div>;
}
