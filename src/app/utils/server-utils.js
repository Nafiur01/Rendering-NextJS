import "server-only";
import React from "react";

export default function ServerUtils() {
  console.log(`
        use multiple libraries,
            use environment variables,
            interact with a database,
            process confidential information
        `);
  return "server result";
}
