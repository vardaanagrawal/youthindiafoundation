import React from "react";
import './program.css';
import program1 from '../images/program1.jpg';
import program2 from '../images/program2.jpg';
import program3 from '../images/program3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Program() {

  const data = [
    {
      img: program1,
      desc: "For all the e-sport lovers, Youth OMR is organising a BGMI and Free Fire battleship 28, 29 July and 1, 2 August respectively.  Registrations are open with a price drop."
    },
    {
      img: program2,
      desc: "The Sunbeam society, U.P is organising a series of competitions for all the young talents out there. Unleash the hidden artist in you and showcase your talent through story-telling, acting, stand-up, art and much more. Register now from our website."
    },
    {
      img: program3,
      desc: "Youth India KTR chapter is here with an exciting hackathon, a web-development tech event organised on 29th and 30th July. Gear up yourself and register now!"
    }
  ]

  return (
    <div className="program">
      <div className="program-row1">Our Cases</div>
      <div className="program-row2">Our Recent Leadership Program for YOUTH</div>
      <div className="program-box">
      {data.map((item) => (
              <div key={item.img} className="programcard" data-aos="fade-up">
                <img src={item.img}></img>
                <div className="programcarddesc">{item.desc}</div>
                <button className="program-btn">To Register</button>
              </div>
            ))}
      </div>
    </div>
  );
}
