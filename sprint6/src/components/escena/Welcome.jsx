import React from "react";
import { Titular, Start } from "../../styled";

export const Welcome = ({ start }) => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`,
        alignItems: `center`,
      }}
    >
      <Titular> Benvingut/da a la història d'un heroi</Titular>
      <p
        style={{
          color: `#3b3b3b`,
          fontFamily: `Helvetica`,
          marginTop: `-1rem`,
        }}
      >
        Fes clic per començar i podràs descobrir la història{" "}
      </p>
      <Start onClick={start}>Comença</Start>
    </div>
  );
};
