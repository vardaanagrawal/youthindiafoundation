import React from "react";
import "./getintouch.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Getintouch() {
  return (
    <div className="getintouch">
      <div className="gittop">
        <div className="gitmessage" data-aos="fade-right">
          <div className="gitrow1">CHARITY</div>
          <div className="gitrow2">Get In Touch</div>
          <div className="gittext">
            Our wonderful team is always here to help clearing your doubts about
            our organization. If you have a tiniest bit of doubt, let us help
            you in understanding our organization in a way we understand it. You
            can also donate your hard earned money to help someone having a hard
            time. Send us a message and we know we will not let you down.
          </div>
        </div>
        <div className="gitform"  data-aos="zoom-in">
          <div className="gitformbox">
            <h3>Send Us a Message</h3>
            <input placeholder="First Name"></input>
            <input placeholder="Last Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Phone"></input>
            <input placeholder="Message"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="gitbottom">
        <div className="gbbox">
          <div className="gblogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="green"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
          </div>
          <div className="gbtext">
            <b>PHONE</b>
            <br />
            +91 9176559056
          </div>
        </div>
        <div className="gbbox">
          <div className="gblogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="green"
              class="bi bi-at"
              viewBox="0 0 16 16"
            >
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
            </svg>
          </div>
          <div className="gbtext">
            <b>MAIL</b>
            <br />
            contactus@youth india foundation.com
          </div>
        </div>
        <div className="gbbox">
          <div className="gblogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="green"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </div>
          <div className="gbtext">
            <b>ADDRESS</b>
            <br />
            CM-1 VSS NAGAR, BHUBNESHWAR, ODISHA, 751007
          </div>
        </div>
      </div>
    </div>
  );
}
