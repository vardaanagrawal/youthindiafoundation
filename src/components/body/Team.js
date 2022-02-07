import React from "react";
import "./team.css";
import team1 from '../images/team1.png';
import team2 from '../images/team2.png';

export default function Team() {

  const data = [
    {
      img: team1,
      pos: "Founder",
      name: "Subhankar Nanda",
      desc: "True success is not acing all your exams, working at the top notch companies, earnings millions of money but becoming a humble human who uses his power to bring smiles on the faces."
    },
    {
      img: team2,
      pos: "Co-Founder",
      name: "Aanis Narnolia",
      desc: "I've always believed that every nook and cranny has a story waiting to be told and I am set to make sure those beautiful stories are heard"
    },
    {
      img: team1,
      pos: "Co-Founder",
      name: "Sangram Sahoo",
      desc: "Capturing precious moments from life - photography - is something that helps you to know who you are, connecting you to your past."
    },
    {
      img: team2,
      pos: "Co-Founder",
      name: "Pushney Mahapatra",
      desc: "Versatility - the key competency of the future. Just as important it is to master something you have a talent for, it is equally important to take up new hobbies and develop them."
    },
  ]

  return (
    <div className="team">
      <div className="teamrow1">VOLUNTEERS</div>
      <div className="teamrow2">OUR TEAM</div>
      <div className="teambox">
        {data.map((item) => (
          <div className="teamcard" style={{backgroundImage: `url(${item.img})`}}>
            <div className="teamcardtext">
            <div className="teampos">{item.pos}</div>
            <div className="teamname">{item.name}</div>
            <div className="teamdesc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <button style={{marginTop: '50px'}}>Read More</button>
    </div>
  );
}
