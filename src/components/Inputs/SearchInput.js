import React from "react";
import search_icon from "../../packages/images/search_icon.png";
import { Button, ButtonText } from "../Button";

function SearchInput() {
  return (
    <div>
      <div
        class="Icon-inside"
        style={{
          position: "relative",
          background: "#BFBFBF",
          border: "none",
          borderRadius: 6,
          width: 1000,
          marginTop: 12,
        }}
      >
        <input
          type="text"
          placeholder="What Are You Looking For ?"
          style={{
            width: "100%",
            padding: "15px",
            margin: "2px",
            boxSizing: "border-box",
            paddingLeft: "60px",
            border: "none",
            outline: "none",
            borderRadius: 6,
          }}
        />
        <img
          src={search_icon}
          alt="search"
          style={{
            position: "absolute",
            left: 10,
            top: "3px",
            padding: "10px 10px",
            border: "none",
            borderRadius: 6,
          }}
        />
        <div
          class="Icon-outside"
          style={{
            position: "absolute",
            right: -26,
            top: "-25px",
            padding: "24px 25px",
            color: "#30A3F1",
            border: "none",
            borderRadius: 6,
          }}
        >
          <Button style={{ width: 80, border: "none" }}>
            <ButtonText>GO</ButtonText>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
