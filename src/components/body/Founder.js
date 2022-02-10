import React from "react";
import './founder.css';
import founder from '../images/founder.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Founder() {
  return (
    <div className="founder">
      <div className="founderimg" data-aos="fade-right"><img src={founder}></img></div>
      <div className="message" data-aos="zoom-in">
        <h1 style={{color: '#FF6600',textAlign: 'center'}}>OUR FOUNDER MESSAGE</h1>
        <div className="innermessage">
          Mr Subhankar Nanda
          <br />
          <br />
          The Founder and the Chairman but mostly importantly, the backbone of
          the organization. A brave hearted man, powerful and continuously
          growing to better. Shubhankar has been service oriented and worked on
          mammoth projects since his teenage. He organized a tech-fest just at
          the age of 16. He started Youth India to mobilize the youth of our
          nation to unleash their potentials to the fullest. Starting with only
          4 people, Youth India was led by Shubhankar and now has 7000 members.
          He started the organization with a good cause and to build a social
          entrepreneurship platform where the youth of the nation gather to
          become an organization where development, funding, and implementation
          of solutions to all kinds of problems takes place.
        </div>
        <button style={{marginTop:"20px"}}>Know More</button>
      </div>
      
    </div>
  );
}
