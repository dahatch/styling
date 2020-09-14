import React from 'react';
import './style/App.css';
import Rectangle from "./components/Rectangle";
import Block from "./components/Block";
import style from "./style/style";

function App() {
  return (
    <div className="App" style={{backgroundColor:color, color:"white"}}>
      <Rectangle style={style.rectangle}/>
      <Rectangle style={style.rectangle}/>
      <Rectangle style={style.rectangle}/>
      <Block backColor={"black"} borderColor={"red"}/>
      <Block backColor={"green"} borderColor={"yellow"}/>
      <Block backColor={"orange"} borderColor={"blue"}/>
    </div>
  );
}

export default App;
