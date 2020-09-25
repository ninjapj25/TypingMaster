import React, { useState, createContext } from "react";

export const TypingTextContext = createContext();

export const TypingTextProvider = (props) => {
  const [typingText, setTypingText] = useState({
    content: "Press Play!!",
  });

  return (
    <TypingTextContext.Provider value={[typingText, setTypingText]}>
      {props.children}
    </TypingTextContext.Provider>
  );
};
