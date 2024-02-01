import "./App.css";
import Home from "./Home";
import { createContext, useState } from "react";
export const CountContext = createContext("");
function App() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div className="App bodycolor">
        <Home />
      </div>
    </CountContext.Provider>
  );
}

export default App;
