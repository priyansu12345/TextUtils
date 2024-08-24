import React, { useState, useEffect,useRef } from "react";
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

export default function App() {

  let myref=useRef();

  function getref()
  {
    console.log(myref.current);
    
  }

  const loadMode = () => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      return JSON.parse(savedMode);
    }
    
    return {
      background: "white",
      color: "black"
    };
  };


  const [dark, setDark] = useState(false);
  const [mode, setMode] = useState(loadMode);
  const [btnng, setBg] = useState({
    background: "#6EACDA",
    color: "white",
  });

  
  useEffect(() => {
    document.body.style.background = mode.background === "white" ? "#a2d2ff" : "#0D1117";
  }, [mode]);

  
  const toggle = () => {
    const newMode = mode.background === "white" ? {
      background: "#28282B",
      color: "white"
    } : {
      background: "white",
      color: "black"
    };

    const newBtnng = mode.background === "white" ? {
      background: "#28282B",
      color: "white",
      border: "none"
    } : {
      background: "#6EACDA",
      color: "white",
      border: "none"
    };

    setMode(newMode);
    setBg(newBtnng);
    setDark(!dark);

    
    localStorage.setItem('themeMode', JSON.stringify(newMode));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar title="TextUtils" Mode={mode} toggle={toggle} geeetref={getref} reef={myref}/>
          <Forms
            style={{
              margin: "30px",
            }}
            toggle={toggle}
            btmode={btnng}
            Mode={mode}
          />
          <Footer Mode={mode} className="my-3" />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar title="TextUtils" Mode={mode} toggle={toggle} />
          <Contact Mode={mode} />
          <Footer Mode={mode} className="my-3" />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar title="TextUtils" Mode={mode} toggle={toggle} reef={myref} />
          <About Mode={mode} />
          <Footer Mode={mode} className="my-3" />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
