import { useState } from "react";
import "./App.css";
//components
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import Todoitem from "./components/Todoitem";
function App() {
  return (
    <div className="App w-[500px] my-0 mx-auto flex flex-col gap-[10px]">
      <header>
        <Header></Header>
      </header>
      <Editor></Editor>
      <List></List>
    </div>
  );
}

export default App;
