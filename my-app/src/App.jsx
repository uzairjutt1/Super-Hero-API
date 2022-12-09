import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
const url =
  "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
const App = () => {
  const [heros, setHeros] = useState([]);
  const fetchHeros = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setHeros(data);
    console.log(data);
  };
  const [mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [text, setText] = useState("Enable Darkmode");
  const enableLightMode = () => {
    if (mode.backgroundColor === "white") {
      setMode({
        backgroundColor: "rgb(33, 32, 32)",
        color: "white",
      });
      setText("Enable Lightmode");
    } else {
      setMode({
        backgroundColor: "white",
        color: "black",
      });
      setText("Enable Darkmode");
    }
  };
  const removeHeros = (id) => {
    const singleHeros = heros.filter((myHeros) => myHeros.id !== id);
    setHeros(singleHeros);
  };
  useEffect(() => {
    fetchHeros();
  }, []);
  return (
    <div className="allBody" style={mode}>
      <button className="modeBtn" onClick={enableLightMode}>
        {text}
      </button>
      <div>
        <h1 className="heading"> ‣ Super Heros API</h1>
      </div>
      <main className="superHeros">
        {heros.map((myHeros) => {
          return (
            <div className="herosApi">
              <img src={myHeros.images.sm} alt="herosPic" />
              <h3 className="nameHeading"> Name: {myHeros.name}</h3>
              <div className="biography">
                <h4 style={{ textDecoration: "underline" }}>Biography</h4>
                <p> Full Name:{myHeros.biography.fullName}</p>
                <p> Place Of Birth:{myHeros.biography.placeOfBirth}</p>
                <p> Publisher:{myHeros.biography.publisher}</p>
                <p> First Appearence{myHeros.biography.firstAppearance}</p>
              </div>
              <div className="flex">
                <div className="one">
                  <h4 style={{ textDecoration: "underline" }}>Powerstats</h4>
                  <p> Intelligence:{myHeros.powerstats.intelligence}</p>
                  <p> Strength:{myHeros.powerstats.strength}</p>
                  <p> Speed:{myHeros.powerstats.speed}</p>
                  <p> Durability:{myHeros.powerstats.durability}</p>
                </div>
                <div className="two">
                  <h4 style={{ textDecoration: "underline" }}>Appearence</h4>
                  <p> Gender:{myHeros.appearance.gender}</p>
                  <p> Gender:{myHeros.appearance.race}</p>
                  <p> Gender:{myHeros.appearance.height}</p>
                </div>
              </div>
              <h4 style={{ textDecoration: "underline" }}>Connections</h4>
              <p>{myHeros.connections.groupAffiliation}</p>
              <button
                onClick={() => removeHeros(myHeros.id)}
                className="removeBtn"
              >
                Delete
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default App;
