import React from "react";
import TextSpan from "./TextSpan";

function FarewellEffect() {
  const sentence = "Farewell 2K24".split("");
  return (
    <div id="farewell-text">
      {sentence.map((letter, index) => {
        return <TextSpan key={index}>{letter}</TextSpan>;
      })}
    </div>
  );
}
export default FarewellEffect;
