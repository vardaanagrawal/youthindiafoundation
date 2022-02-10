import React, { useEffect, useState } from "react";
import Logo from "./Logo.png";
import "./navbar.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [mobiledd, setmobiledd] = useState(false);
  const [quickaction, setquickaction] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "white",
        scrollTrigger: {
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
          <Link to="/">
            <img src={Logo}></img>
          </Link>
        </div>
        <div className="navlinks">
          <Link to={"/about"}>About Us</Link>
          <Link to="/work">Our Work</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/events">Our Events</Link>
        </div>
        <div className="mobilenavlinks">
          <div onClick={() => setmobiledd(!mobiledd)}>
            {mobiledd ? (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </div>
        </div>
        {mobiledd && (
          <div className="mobiledropdown">
            <Link to={"/about"}  onClick={() => setmobiledd(!mobiledd)}>About Us</Link>
            <Link to="/work"  onClick={() => setmobiledd(!mobiledd)}>Our Work</Link>
            <Link to="/team"  onClick={() => setmobiledd(!mobiledd)}>Our Team</Link>
            <Link to="/events"  onClick={() => setmobiledd(!mobiledd)}>Our Events</Link>
          </div>
        )}
      </div>
      <div className="navright">
        <Link to="/joinus">
          <button>Join Us</button>
        </Link>
        <Link to="memberlogin">
          <button>Member Login</button>
        </Link>
      </div>

      {quickaction && (
        <div className="qabtns">
          <div className="qablistitem" data-aos="fade-up">
            <Link to="/events" onClick={() => setquickaction(!quickaction)}>Our Events</Link>
            <div className="qablogo" style={{ backgroundColor: "lightblue" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="currentColor"
                className="bi bi-calendar3-week"
                viewBox="0 0 16 16"
              >
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </div>
          </div>
          <div className="qablistitem" data-aos="fade-up">
            <Link to="/adminlogin" onClick={() => setquickaction(!quickaction)}>Admin Login</Link>
            <div className="qablogo" style={{ backgroundColor: "lightpink" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="currentColor"
                className="bi bi-person-square"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>
            </div>
          </div>
          <div className="qablistitem" data-aos="fade-up">
            <Link to="memberlogin" onClick={() => setquickaction(!quickaction)}>Member Login</Link>
            <div className="qablogo" style={{ backgroundColor: "lightgreen" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="currentColor"
                className="bi bi-box-arrow-in-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                />
                <path
                  fillRule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </div>
          </div>
          <div className="qablistitem" data-aos="fade-up">
            <Link to="/contact" onClick={() => setquickaction(!quickaction)}>Contact Us</Link>
            <div className="qablogo" style={{ backgroundColor: "yellow" }} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div
        className="quickaccessbtn"
        onClick={() => setquickaction(!quickaction)}
      >
        {quickaction ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="68"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
