import React from "react";
import "./reach.css";
import tamilnadu from '../images/TamilNadu.svg';
import odhisha from '../images/Odhisha.svg';
import maharashtra from '../images/Maharshtra.svg';
import karnataka from '../images/Karnataka.svg';
import delhi from '../images/Delhi.svg';
import westbengal from '../images/WestBengal.svg';
import outreach from '../images/yiffffff.png';

export default function Reach() {
  const data = [
    {
      loc: "Tamil Nadu",
      desc: "Youth Tamil Nadu is society with over 500 members. They have put their heart and energy into developing a society that we are pleased to be a part of.",
      img: tamilnadu
    },
    {
      loc: 'Odhisha',
      desc: "Youth Odisha has aided Youth India Foundation in making the world a better place to live in every manner imaginable. They have recognized the power that youth possesses and have utilized it to bring smiles to many people's faces.",
      img: odhisha
    },
    {
      loc: "Maharashtra",
      desc: "Youth Maharashtra is a group of students from over 10+ different colleges in the commercial hub of India. The team has repeatedly proved their dedication by joining us in our efforts to develop a community and raise donations for worthy social causes.",
      img: maharashtra
    },
    {
      loc: 'Karnataka',
      desc: "Welcome to the land of gold, also known as Electronic city or IT hub of India. None other than Karnataka. People here are kind hearted, Interacting with them feels as comfortable as drinking a nicely brewed coorg coffee on a early morning. .",
      img: karnataka
    },
    {
      loc: "Delhi",
      desc: "We make, a living from what we get, but we make a life from what we give,” Youth India Delhi is a team of dedicated members who are working towards addressing Delhi’s social, cultural, and environmental issues. The goal of Youth India Delhi is to bring young people from all areas of life together",
      img: delhi
    },
    {
      loc: "West Bengal",
      desc: "Youth Bengal is a thriving branch of the Youth India Foundation. It brings together young people from throughout the country to put their expertise and skills to good use. ",
      img: westbengal
    },
    {
      loc: "Outreach",
      desc: "The Youth India Outreach initiative by the Youth India Foundation revolves around the idea of kindness and compassion towards the society. Currently, there is an outreach team in 12 states working to bring together young people to engage in and promote social work.",
      img: outreach
    }
  ]
  return (
    <div className="reach">
      <div className="row1">OUR REACH IN INDIA</div>
      <div className="row2">Check all the states we are planned into</div>
      <div className="states">
      
          
            {data.map((item) => (
              <div key={item.loc} className="statecard">
                <img src={item.img}></img>
                <div>{item.loc}</div>
                <div className="statecarddesc">{item.desc}</div>
              </div>
            ))}
      </div>
    </div>
  );
}
