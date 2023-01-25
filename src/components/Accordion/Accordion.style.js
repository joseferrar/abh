import styled from "styled-components";

export const Accordion = styled.li`
  list-style: none;
  width: 80%;
  margin-top: 11px;
  &.accordion_item.active .button {
    background-color: #c42335;
    color: #fff;
  }
`;
export const AccordionContainer = styled.div`
  font-size: 16px;
  background-color: #f4f4f4;
  color: #000;
  text-align: left;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 8px;
  cursor: pointer;
  border: none;
  &:hover {
    color: #fff;
    background-color: #c42335;
  }
  
`;

export const AccordionItem = styled.div`
  height: 0;
  overflow: hidden;
  transition: height ease 0.2s;
`;
