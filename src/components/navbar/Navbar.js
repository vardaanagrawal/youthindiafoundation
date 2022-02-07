import React, { useEffect, useState } from "react";
import Logo from "./Logo.png";
import "./navbar.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [mobiledd, setmobiledd] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "white",
        scrollTrigger: {
          trigger: ".home",
          start: "0px",
          end: "100px",
          scrub: true,
          toggleActions: "restart pause pause reverse",
        },
      }
    );
    return;
  }, []);

  return (
    <div className="navbar">
      <div className="navleft">
        <div className="logo">
          <img src={Logo}></img>
        </div>
        <div className="navlinks">
          <a href="#">About Us</a>
          <a href="#">Our Work</a>
          <a href="#">Our Team</a>
          <a href="#">Our Events</a>
        </div>
        <div className="mobilenavlinks">
          <div onClick={() => setmobiledd(!mobiledd)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
        {mobiledd && (
          <div className="mobiledropdown">
            <a href="#">About Us</a>
            <a href="#">Our Work</a>
            <a href="#">Our Team</a>
            <a href="#">Our Events</a>
          </div>
        )}
      </div>
      <div className="navright">
        <button>Join Us</button>
        <button>Member Login</button>
      </div>
    </div>
  );
}
