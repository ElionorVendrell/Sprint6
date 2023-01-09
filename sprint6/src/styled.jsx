import styled from "styled-components";

export const Titular = styled.p`
  font-size: 2rem;
  font-family: Helvetica;
  color: #3b3b3b;
  text-align: center;
`;

export const Start = styled.button`
  border: none;
  border-radius: 20px;
  width: 20%;
  height: 30px;
  text-align: center;
  color: #3b3b3b;
  background-color: #b0c4de;
  font-size: 1.1rem;
  font-family: Helvetica;
  overflow: hidden;
  cursor: pointer;
`;

export const BorderText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3b3b3b;
  border-radius: 25px;
  height: 50px;
  text-align: center;
  font-family: Helvetica;
  color: #3b3b3b;
  background-color: ${({ isRight }) => (isRight ? "#b0c4de" : "white")};
`;

export const Button = styled.button`
  display: inline;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 30%;
  border: none;
  border-radius: 20px;
  text-align: center;
  color: #3b3b3b;
  background-color: #b0c4de;
  font-size: 1.1rem;
  font-family: Helvetica;
  margin: 5px;
  margin-left: 12%;
  overflow: hidden;
  cursor: pointer;
`;

export default styled;
