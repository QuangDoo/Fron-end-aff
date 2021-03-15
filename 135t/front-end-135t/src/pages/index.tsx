import Head from "next/head";
import React from "react";
import Carousel from "src/components/Layout/Carousel";
import Footer from "src/components/Layout/Footer";
import Header from "src/components/Layout/Header";
import Nav from "src/components/Layout/Nav";
import SlickSlider from "react-slick";
import Image from "next/image";
import Review from "src/components/Layout/Review";
import MainLayout from "src/components/Layout/MainLayout";
export default function Home() {
  const bannerImages = [
    // 'https://firebasestorage.googleapis.com/v0/b/medofa-image.appspot.com/o/banner%2FBanner-Freeship.jpg?alt=media',
    // 'https://firebasestorage.googleapis.com/v0/b/medofa-image.appspot.com/o/banner%2FBanner-Medofa.jpg?alt=media'
    "/assets/images/banner_1.png",
    "/assets/images/banner_2.png",
  ];
  return (
    <>
      <MainLayout>
        <Head>
          <title>VaQua</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <Header />

        <Nav /> */}

        <SlickSlider
          arrows={false}
          autoplay
          dots
          dotsClass="slick__dots bullet slick-dots"
          className="align-items-center mb-0 slick-dotted d-none d-sm-block"
        >
          {bannerImages.map((img) => (
            <div className="banner__slide" key={img}>
              <div className="banner__img">
                <Image src={img} layout="fill" objectFit="cover" />
              </div>
            </div>
          ))}
        </SlickSlider>

        <Review />

        {/* <Footer /> */}
      </MainLayout>
    </>
  );
}
