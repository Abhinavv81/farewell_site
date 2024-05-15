import React from "react";
import TextSpan from "./TextSpan";
import "./index.css";
import "./global.css";

function FarewellEffect() {
    const sentence = "farewell 2K24".split("");
    return (
        <div id="farewell-text">
            {sentence.map((letter, index) => (
                <TextSpan key={index}>
                    {letter ===" " ? "\u00A0" : letter}
                </TextSpan>
            ))}
        </div>
    );
}

export default FarewellEffect;
