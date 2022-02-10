import React from "react";
import "./stories.css";
import story1 from "../images/story1.png";
import story2 from "../images/story2.jpeg";
import story3 from "../images/story3.jpg";
import graph1 from '../images/graph1.png'
import graph2 from '../images/graph2.png'
import graph3 from '../images/graph3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Stories() {

  const data = [
    {
      img: graph1
    },
    {
      img: graph2
    },
    {
      img: graph3
    }
  ]

  return (
    <div className="stories">
      <h1 style={{ marginBottom: "70px" }}>Read Stories</h1>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="storyimg">
              <img src={story1}></img>
            </div>
            <h3>Ankit Soni</h3>
            <div className="storydesc">
              I am Ankit Soni, National General Secretary of Youth India
              Foundation. I started my journey in youth india in January 2021 as
              a business development member. It's been almost 7 months, and the
              graph of my learning experience has shown tremendous growth. With
              every passing day, not just on how to be a better worker or
              manager, but also, how to be a better person. Started in the field
              of public relations, marketing and business development.
            </div>
          </div>
          <div class="carousel-item">
            <div className="storyimg">
              <img src={story2}></img>
            </div>
            <h3>Deeksha Lamba</h3>
            <div className="storydesc">
              My name is Deeksha Lamba, my experience at Youth India foundation
              has been wholesome, I started as a member of the Ramanujan
              Society's PR department, where I not only learned a lot of new
              skills, but also grew professionally. I was promoted as a PR head
              of society , and learned the know-how of team management, and
              cultivated healthy relations with people which improved my
              communication skills. Youth India Foundation was my first
              internship, and I put my heart and soul into it.
            </div>
          </div>
          <div class="carousel-item">
            <div className="storyimg">
              <img src={story3}></img>
            </div>
            <h3>Harsh</h3>
            <div className="storydesc">
              My name is Harsh and I'm currently a part of the Marketing
              Department. My journey at Youth India Foundation has been amazing.
              The Marketing department is like one big family for me. Youth
              India Foundation has one of the best working environments, where I
              got to develop myself, both professionally and as a person. People
              here are doing crazy things at young ages, there's a lot to learn
              from every single person. Everyone is valued here, their success
              is celebrated and problems are solved with serenity. Such
              professionalism combined with a positive environment makes me feel
              very comfortable and involved.
            </div>
          </div>
        </div>
        <div
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </div>
        <div
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </div>
      </div>
      <div className="graphsbox">
      {data.map((item)=>(
        <div className="graphs" data-aos="fade-up">
          <img src={item.img}></img>
        </div>
      ))}
      </div>
    </div>
  );
}
