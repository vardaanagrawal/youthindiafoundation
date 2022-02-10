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
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <video src={gallery1} controls class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <video src={gallery2} controls class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <video src={gallery3} controls class="d-block w-100" alt="..." />
          </div>
        </div>
        <div
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </div>
        <div
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </div>
      </div>
    </div>
  );
}
