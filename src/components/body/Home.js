import React from "react";
import "./home.css";
import homeimg from '../images/homeimg.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {
  return (
    <div className="home">
      <div className="title" data-aos="fade-left">Youth India Foundation
      <div className="desc">A community for everyone to look beyond their own interests. Join us in our journey of a better and brighter tommorow.</div>
      <Link to="/getstarted"><button>Get Started</button></Link>
      </div>
      <div className="homeimg" data-aos="fade-right"><img src={homeimg}></img></div>
      <div className="homeorangebox"></div>
      <div className="homepinkbox"></div>
      <div className="homegreenbox"></div>
    </div>
  );
}
