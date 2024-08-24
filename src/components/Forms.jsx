import React, { useState, useEffect } from "react";

export default function Forms(props) {
  const [text, setText] = useState("");
  const [isFirstChange, setIsFirstChange] = useState(true);

  useEffect(() => {
    const savedText = localStorage.getItem("txt");
    if (savedText) {
      setText(savedText);
      setIsFirstChange(false);
    }
  }, []); 

  const change = (event) => {
    if (isFirstChange) {
      setIsFirstChange(false);
      setText("");
    } else {
      setText(event.target.value);
      localStorage.setItem("txt", event.target.value);
    }
  };

  const getword = () => {
    const wordsArray = text.trim().split(/\s+/);
    return text.trim().length === 0 ? 0 : wordsArray.length;
  };

  const getalpha = () => {
    const alphabetsArray = text.match(/[a-zA-Z]/g);
    return alphabetsArray ? alphabetsArray.length : 0;
  };

  const toupper = () => {
    const upperText = text.toUpperCase();
    setText(upperText);
    localStorage.setItem("txt", upperText);
  };

  const tolower = () => {
    const lowerText = text.toLowerCase();
    setText(lowerText);
    localStorage.setItem("txt", lowerText);
  };

  const remove = () => {
    const trimmedText = text.trim().replace(/\s+/g, " ");
    setText(trimmedText);
    localStorage.setItem("txt", trimmedText);
  };

  const clear = () => {
    setText("");
    localStorage.removeItem("txt");
  };

  const copy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard successfully!");

        let ctxt = document.querySelector(".cp");
        ctxt.innerText = "copied!";
        setTimeout(() => {
          ctxt.innerText = "copy to clipboard";
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <div
        className="form-floating"
        style={{
          margin: "2%",
        }}
      >
        <h4 style={{ fontSize: "medium", ...props.Mode, background: "none" }}>
          Enter Text Below
        </h4>
        <textarea
          className="form-control tex"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: 500, ...props.Mode, padding: "2%" }}
          value={text}
          onChange={change}
        />

        <button
          type="button"
          className="btn btn-primary btn-sm my-2"
          style={{
            padding: "1%",
            ...props.btmode,
            border:"none"
          }}
          onClick={toupper}
        >
          toUpperCase
        </button>

        <button
          type="button"
          className="btn btn-primary btn-sm my-2"
          style={{
            padding: "1%",
            ...props.btmode,
            border:"none"
          }}
          onClick={tolower}
        >
          toLowerCase
        </button>

        <button
          type="button"
          className="btn btn-primary btn-sm my-2"
          style={{
            padding: "1%",
            ...props.btmode,
            border:"none"
          }}
          onClick={remove}
        >
          remove extra spaces
        </button>

        <button
          type="button"
          className="btn btn-primary btn-sm my-2  cp"
          style={{
            padding: "1%",
            ...props.btmode,
            border:"none"
          }}
          onClick={copy}
        >
          copy to clipboard
        </button>

        <button
          type="button"
          className="btn btn-primary btn-sm my-2"
          style={{
            padding: "1%",
            ...props.btmode,
            border:"none"
          }}
          onClick={clear}
        >
          clear
        </button>

        <h5 className="my-2" style={{...props.Mode,background:"none"}}>Your text summary</h5>
        <p  style={{...props.Mode,background:"none"}}>{`${getword()} words and ${getalpha()} characters`}</p>

       
      </div>
    </>
  );
}

