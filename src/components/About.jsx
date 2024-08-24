import "./Style/About.css";
import React, { useState, useEffect } from "react";

export default function About(props) {
  return (
    <>
      <section className="about-section">
        <div
          className="container"
          style={{ ...props.Mode, background: "none" }}
        >
          <h1>About TextUtils</h1>
          <p>
            Welcome to TextUtil, your ultimate destination for all things text
            manipulation! Whether you're a developer, writer, student, or just
            someone who loves to play around with text, TextUtil is designed to
            make your life easier. With a suite of tools at your fingertips, you
            can transform, analyze, and manage your text in ways you never
            thought possible.
          </p>
          <p>
            TextUtil was born out of the idea that text manipulation should be
            simple, fast, and accessible to everyone. We noticed that many
            existing tools were either too complicated or lacked the features
            that users really needed. So, we decided to create a platform that
            strikes the perfect balance between functionality and
            user-friendliness.
          </p>
          <p>
            Thank you for choosing TextUtil. We're thrilled to have you on
            board, and we can't wait to see how you'll use our tools to make
            your text truly stand out. Stay tuned for updates, and feel free to
            reach out to us with any suggestions or feedback. Together, let's
            make text manipulation fun and effortless!
          </p>
        </div>
      </section>
    </>
  );
}
