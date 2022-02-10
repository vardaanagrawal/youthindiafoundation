import React from "react";
import "./events.css";
import event1 from '../images/event1.jpeg';
import event2 from '../images/event2.jpeg';
import event3 from '../images/event3.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Events() {

  const data = [
    {
      desc: "An online singing competition organized by Youth Odisha.The finale had a reach of 1.5 lakh people with over 5000 live viewers, all the top 6 were past winners of various national level competitions. ",
      img: event1
    },
    {
      desc: "November 15th, 2020, Shades, an event organized by Youth Odisha. The event brought forth the raw unrecognised local talents of Odisha, to give them their own special stands to prove their worth before thousands of eyes. ",
      img: event2
    },
    {
      desc: "An online coding competition was organized from 6th - 10th June, 2021by the SICSR Chapter of Youth Maharashtra. The event was a great success as youth from all over the country gathered to showcase their skills. ",
      img: event3
    }
  ]

  return (
    <div className="events">
      <div className="eventsrow1">Our Events</div>
      <div className="eventsbox">
        {data.map((item) => (
          <div key={item.desc} className="eventcard" data-aos="fade-up" style={{backgroundImage: `url(${item.img})`,backgroundSize: '100% 100%'}}>
            <div className="eventwhitebox"><div className="eventdesc">{item.desc}</div></div>
          </div>
        ))}
      </div>
      <button>Explore All</button>
    </div>
  );
}
