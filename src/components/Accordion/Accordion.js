import React, { useRef, useState } from "react";
import {
  Accordion,
  AccordionContainer,
  AccordionItem,
} from "./Accordion.style";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";

const AccordionComponent = ({ heading, element }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <Accordion className={`accordion_item ${clicked ? "active" : ""}`}>
      <AccordionContainer className="button" onClick={handleToggle}>
        {clicked ? (
          <RiArrowDownSFill style={{ color: "white", fontSize: "36px" }} />
        ) : (
          <RiArrowRightSFill className="ico-1" />
        )}
        <p
          style={{
            marginRight: "auto",
            marginLeft: 12,
            fontSize: "18px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          {heading}
        </p>
      </AccordionContainer>

      <AccordionItem
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{element}</div>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
