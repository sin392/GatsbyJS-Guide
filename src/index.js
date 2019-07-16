import React from "react";
import ReactDOM from "react-dom";

import "minireset.css";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Portfolio</h1>
        <nav className="headerNav">
          <a className="headerNav-item" href="#about">
            About
          </a>
          <a className="headerNav-item" href="#works">
            Works
          </a>
        </nav>
      </header>
      <div className="hero">
        <h1 className="hero-title">mottox2</h1>
        <p className="hero-description">Web Engineer, Prototyper</p>
      </div>
      <section className="section" id="about">
        <h2 className="section-title">About</h2>
        <p className="aboutDescription">
          React, Gatsuby, Ruby on Rails
          を中心に都内で開発しているエンジニアです。
        </p>
      </section>
      <section className="section" id="works">
        <h2 className="section-title">Works</h2>
        <ul>
          <li className="workItem">
            <img
              className="workItem-image"
              src="https://dummyimage.com/600x300/eee/ccc"
              alt=""
            />
            <h3 className="workItem-category">2018 - Fronted</h3>
            <h3 className="workItem-title">すごいC向けサービス</h3>
          </li>
          <li className="workItem">
            <img
              className="workItem-image"
              src="https://dummyimage.com/600x300/eee/ccc"
              alt=""
            />
            <h3 className="workItem-category">2017 - Design</h3>
            <h3 className="workItem-title">すごいスマートフォンアプリ</h3>
          </li>
        </ul>
      </section>
      <footer className="footer">
        <a href="https://twitter.com/mottox2">Twitter</a>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
