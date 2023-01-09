import React from "react";
import { BorderText } from "../../styled";

export const Escena = ({ linia, id, position }) => {
  return (
    <BorderText isRight={position === id ? true : false}>{linia}</BorderText>
  );
};
