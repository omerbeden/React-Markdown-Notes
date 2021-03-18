import React from "react";
import SideBar from "./components/sideBar";
import MyAppBar from "./components/AppBar";
import Content from "./components/Content";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <MyAppBar />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
