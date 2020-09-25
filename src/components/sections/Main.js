import React, { useState, useEffect, useContext, useRef } from "react";

import { TypingTextContext } from "../providers/TypingTextContext";

export default function Main() {
  const [typingText, setTypingText] = useContext(TypingTextContext);
  const [typedText, setTypedText] = useState("");
  const [timer, setTimer] = useState(0);
  const [speed, setSpeed] = useState("");
  const [correct, setCorrect] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const typeTextRef = useRef("");
  const playBtn = useRef("");

  const spans = document.querySelectorAll(".correct");
  const text = document.querySelectorAll(".text");

  const play = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setTypingText({ content: data.content }));
    setTimer(0);
    typeTextRef.current.disabled = false;
    typeTextRef.current.focus();
    setIsPlaying((play) => !play);
    setSpeed("");
    setTypedText("");
    playBtn.current.disabled = true;

    [...spans].map((span) => span.classList.remove("correct"));
    [...spans].map((span) => span.classList.remove("incorrect"));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (spans.length === text.length && isPlaying === true) {
      setCorrect(true);
    }
  }, [typedText]);

  const handleTextChange = (e) => {
    if (isPlaying) {
      setTypedText(e.target.value);
      const textTyped = e.target.value.split("");

      text.forEach((textLetter, i) => {
        const character = textTyped[i];
        if (character == null) {
          textLetter.classList.remove("correct");
          textLetter.classList.remove("incorrect");
        } else if (character == textLetter.innerText) {
          textLetter.classList.add("correct");
          textLetter.classList.remove("incorrect");
        } else {
          textLetter.classList.remove("correct");
          textLetter.classList.add("incorrect");
        }
      });
    }
  };

  if (correct) {
    const word = spans.length / 4.7;
    setCorrect(false);
    setSpeed(Math.round((word / timer) * 60) + " Words Per Minute");
    setIsPlaying(false);
    playBtn.current.disabled = false;
    playBtn.current.innerText = "Play Again";
    typeTextRef.current.disabled = true;
  }

  return (
    <div>
      <div className="speed-section">
        {" "}
        <h3 className={isPlaying ? "" : "timer"}>{timer}</h3>
        <h3 className="speed">{speed}</h3>
      </div>

      <div className="text-box quote-display">
        {" "}
        {typingText.content.split("").map((text, i) => (
          <span key={i} className="text">
            {text}
          </span>
        ))}{" "}
      </div>
      <div className="type-box">
        <textarea
          ref={typeTextRef}
          value={typedText}
          onChange={handleTextChange}
        ></textarea>
        <button onClick={play} ref={playBtn}>
          Play
        </button>
      </div>
    </div>
  );
}
