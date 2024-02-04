import React from "react";
import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Asset/router/router";
export const CountContext = createContext("");
export default function Home() {
  const [count, setCount] = useState(0);
  const[selected , setSelected]=useState([]);
  return (
    <CountContext.Provider value={{ count, setCount,selected , setSelected }}>
      <RouterProvider router={router}>
      </RouterProvider>
    </CountContext.Provider>
  );
}


