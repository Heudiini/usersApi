import React from "react";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="pageTitle">User List</h1>
      <UserList />
    </div>
  );
}

export default App;
