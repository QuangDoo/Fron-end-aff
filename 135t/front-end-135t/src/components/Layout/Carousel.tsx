import React from "react";
import SlickSlider from 'react-slick';
import Image from 'next/image';

export default function Carousel() {
    const bannerImages = [
        // 'https://firebasestorage.googleapis.com/v0/b/medofa-image.appspot.com/o/banner%2FBanner-Freeship.jpg?alt=media',
        // 'https://firebasestorage.googleapis.com/v0/b/medofa-image.appspot.com/o/banner%2FBanner-Medofa.jpg?alt=media'
        '/assets/images/banner_1.png'
      ];

  return (
    <SlickSlider
        arrows={false}
        autoplay
        dots
        dotsClass="slick__dots bullet slick-dots"
        className="align-items-center mb-0 slick-dotted d-none d-sm-block">
        {bannerImages.map((img) => (
          <div className="banner__slide" key={img}>
            <div className="banner__img">
              <Image src={img} layout="fill" objectFit="cover" className="img-fluid"/>
            </div>
          </div>
        ))}
      </SlickSlider>
  );
}
