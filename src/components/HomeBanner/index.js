import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true
  };
  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
            <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1725960647/1725960645937_New_Project_6.jpg" alt=" " className="w-100"/>
        </div>
        <div className="item">
            <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1726984302/1726984301617_New_Project_13.jpg" alt=" " className="w-100"/>
        </div>
        <div className="item">
            <img src="https://res.cloudinary.com/da26rdzwp/image/upload/v1725960668/1725960667532_New_Project_8.jpg" alt=" " className="w-100"/>
        </div>
      </Slider>
    </div>
  );
}

export default HomeBanner;
