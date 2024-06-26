import React from "react";
import TextSpan from "./TextSpan";
import "./index.css";
import "./global.css";

function PixonoidsEffect() {
    const sentence = "Pixonoids".split("");
    return (
        <div id="pixonoids-text">
            {sentence.map((letter, index) => (
                <TextSpan key={index}>
                    {letter}
                </TextSpan>
            ))}
        </div>
    );
}

export default PixonoidsEffect;
