import React from "react";
import { useState } from "react";
import { Escena } from "./components/escena/Escena";
import { frases } from "./components/frases";
import { Button } from "./styled";
import { Welcome } from "./components/escena/Welcome";

const frasesLength = frases.length;
function App() {
  const [position, setPosition] = useState(1);

  console.log("Posició -->", position);

  const next = () => {
    if (position < frasesLength) {
      setPosition(position + 1);
    }
    if (position >= frasesLength) {
      setPosition(1);
    }
  };

  const back = () => {
    if (position <= frasesLength) {
      setPosition(position - 1);
    }
    if (position === 1) {
      setPosition(4);
    }
  };

  const [welcome, setWelcome] = useState(true);
  console.log(welcome);
  const start = () => {
    setWelcome(false);
  };

  return welcome === true ? (
    <Welcome start={start} />
  ) : (
    <div
      id='img'
      style={{
        backgroundImage: `url(./src/img/${position}.jpg)`,
        backgroundRepeat: `no-repeat`,
        height: `50rem`,
      }}
    >
      <Button onClick={back}>Anterior</Button>
      <Button onClick={next}>Següent</Button>

      {frases.map((frase) => (
        <Escena
          key={frase.id}
          id={frase.id}
          linia={frase.text}
          position={position}
        />
      ))}
    </div>
  );
}

export default App;
