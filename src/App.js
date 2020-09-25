import React from "react";
import Nav from "./components/sections/Nav";
import Main from "./components/sections/Main";
import { TypingTextProvider } from "./components/providers/TypingTextContext";

function App() {
  return (
    <TypingTextProvider>
      <div className="container">
        <Nav />
        <Main />
      </div>
    </TypingTextProvider>
  );
}

export default App;
