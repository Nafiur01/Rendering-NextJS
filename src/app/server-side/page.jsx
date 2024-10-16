import React from "react";
import ServerUtils from "../utils/server-utils";
import ImageSlider from "@/components/ImageSlider";

export default function ServerComponent() {
  console.log("server route rendered");
  const result = ServerUtils();

  return (
    <>
      <h1>Server Route page</h1>
      <p>{result}</p>
      <ImageSlider /> 
    </>
  );
}
