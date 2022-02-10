import React from "react";
import "./volunteer.css";
import volimg from "../images/volimg.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Volunteer() {
  return (
    <div className="volunteer">
      <div className="voldesc" data-aos="fade-right">
        <div className="volrow1">VOLUNTEER</div>
        <div className="volrow2">OUR OUTREACH CAMPAIGN</div>
        <div className="volrow3">
          They say helping someone in times of need is God's work and helping
          without any expectations is the most human thing one can do. So let’s
          join hands to reach out to those in need. Volunteer for a good future.
          Be a volunteer!
        </div>
        <button style={{marginTop:"20px",fontWeight: '500',fontSize: '22px'}}>Be A Volunteer</button>
      </div>
      <div className="volimg" data-aos="zoom-in">
        <img src={volimg}></img>
      </div>
    </div>
  );
}
