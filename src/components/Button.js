import styled from "styled-components";
import "../App.css";

export const Button = styled.button`
  display: inline-block;
  flex-direction: row;
  border-color: #c42335;
  box-sizing: border-box;
  border-width : 1px;
  width: 100%;
  height: 50px;
  background: #c42335;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  width: 73px;
  height: 20px;
  display: contents;
  font-family: outfit-regular;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #ffffff;
`;

