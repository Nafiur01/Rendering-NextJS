import fs from "fs";
import React from "react";

export function ServerComponentOne() {
  fs.readFileSync("src/components/servercomponentone.jsx", "utf-8");
  return <h1>Server Component One </h1>;
}
