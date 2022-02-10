import React from "react";
import './service.css';
import service1 from '../images/service1.png';
import service2 from '../images/service2.png';
import service3 from '../images/service3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Service() {

  const data = [
    {
      img: service1,
      title: "Your Friend",
      desc: "One for all and all for one, Youth India Foundation is your friend through the best or the worst, nothing in between."
    },
    {
      img: service2,
      title: "Karton",
      desc: "An online initiative for marketing that provides an open and safe platform for all entrepreneurs to promote and sell their products."
    },
    {
      img: service3,
      title: "E-School",
      desc: "Distance is no barrier in the way of education. Youth India Foundation’s initiative to help the society by providing study materials and guidance to every being despite anything. Because a better tomorrow starts with today."
    }
  ]

  return <div className="service">
    <div className="service-row1">Our Service</div>
    <div className="service-row2">Service we Provide</div>
    <div className="servicebox">
      {data.map((item) => (
        <div key={item.img} className="servicecard" data-aos="fade-up">
          <div className="servicecardtop"><img src={item.img}/>{item.title}</div>
          <div className="servicecardmid">{item.desc}</div>
          <button className="servicebtn">Learn More</button>
        </div>
      ))}
    </div>
  </div>;
}
