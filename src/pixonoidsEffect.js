import React from "react";
import TextSpan from "./TextSpan";

function PixonoidsEffect() {
    const sentence = "Pixonoids".split(""); 
  return (
    <div id="pixonoids-text">
        {sentence.map((letter, index) => {
            return(
                <TextSpan key ={index}>
                    {letter}
                </TextSpan>
            )
        })}
    </div>
   );
}
export default PixonoidsEffect;