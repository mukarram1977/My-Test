import React from "react";


const Carousel = () => {
  return (
    <div className="container-flude mt-1 m-2">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" ></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="/image/banner-1.jpg"
              className="d-block w-100"
              alt="First Slide"
            />
            <div className="carousel-caption text-dark d-md-block">
              <h5>First Slide Title</h5>
              <p>Some description for the first slide.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="/image/banner-2.jpeg"
              className="d-block w-100"
              alt="Second Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second Slide Title</h5>
              <p>Some description for the second slide.</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="/image/banner-3.jpeg"
              className="d-block w-100"
              alt="Third Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide Title</h5>
              <p>Some description for the third slide.</p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
