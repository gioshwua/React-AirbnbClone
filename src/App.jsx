import React from "react";
import Container from "./components/Container";
import "./App.css";
import Header from "./components/Header";
import Datas from "./Datas";

export default function App() {
  const Item = Datas.map((Data) => <Container key={Data.id} Data={Data} />);
  return (
    <div className="Main-Container">
      <div className="Main-Content">
        <Header img="nav.png" title="My Travel Journal" />
        <div className="Travel-Container">
          <div className="Travel-Content">{Item}</div>
        </div>
      </div>
    </div>
  );
}
