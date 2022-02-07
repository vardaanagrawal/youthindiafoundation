import React from "react";
import "./home.css";
import homeimg from '../images/homeimg.png';

export default function Home() {
  return (
    <div className="home">
      <div className="title">Youth India Foundation
      <div className="desc">A community for everyone to look beyond their own interests. Join us in our journey of a better and brighter tommorow.</div>
      <button>Get Started</button>
      </div>
      <div className="homeimg"><img src={homeimg}></img></div>
      <div className="homeorangebox"></div>
      <div className="homepinkbox"></div>
      <div className="homegreenbox"></div>
    </div>
  );
}
