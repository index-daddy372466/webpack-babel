import React, { useState } from "react";
import NewMod from "./newMod.js";
import "./styles.css";

export default function App() {
  const [parent,setParent] = useState("parent")
  const [child, setChild] = useState("child");
  return (
    <div>
      <h1>{parent}</h1>
      <NewMod {...{ child }} />
    </div>
  );
}
