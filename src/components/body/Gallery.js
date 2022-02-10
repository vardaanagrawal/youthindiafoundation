import React from "react";
import "./gallery.css";
import gallery1 from "../images/gallery1.mp4";
import gallery2 from "../images/gallery2.mp4";
import gallery3 from "../images/gallery3.mp4";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryrow1">Our Gallery</div>
      <div className="galleryrow2">Watch Our Gallery</div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video src={gallery1} controls className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <video src={gallery2} controls className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <video src={gallery3} controls className="d-block w-100" alt="..." />
          </div>
        </div>
        <div
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </div>
        <div
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </div>
      </div>
    </div>
  );
}
