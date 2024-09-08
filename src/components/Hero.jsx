import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR Build Tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity with VirtualR, the ultimate build tool for
        developers. Get Started for Free and turn your ideas into reality. into
        immersive experiences.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-red-800 text-white px-4 py-3 mx-3 rounded-md"
        >
          Get Started
        </a>
        <a href="#" className="text-white px-4 py-3 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center w-full lg:w-auto">
        <div className="hidden lg:flex w-full justify-center">
          <video
            autoPlay
            loop
            muted
            className="w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:hidden w-full">
          <Slider {...settings}>
            <div>
              <video
                autoPlay
                loop
                muted
                className="w-full border border-orange-700 shadow-orange-400 mx-2 my-4"
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video
                autoPlay
                loop
                muted
                className="w-full border border-orange-700 shadow-orange-400 mx-2 my-4"
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
