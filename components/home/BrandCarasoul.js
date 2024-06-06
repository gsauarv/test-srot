"use client";
import Docker from "@/public/docker.svg";
import Google from "@/public/google.svg";
import Medium from "@/public/medium.svg";
import Netflix from "@/public/netflix.svg";
import Vercel from "@/public/vercel.svg";
import Youtube from "@/public/youtube.svg";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import CommonWrapper from "../common/CommonWrapper";

const BrandCarasoul = () => {
  const image_array = [Netflix, Medium, Google, Youtube, Vercel, Docker];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 1800,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Box sx={{ paddingBlock: "65px" }}>
        <CommonWrapper type={"tight"}>
          <Divider />
          <Flex justifyContent={"center"} paddingTop={"68px"}>
            <Text
              sx={{
                color: "#121127",
                fontSize: "20px",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Trusted by over 39,000 forward-thinking companies
            </Text>
          </Flex>

          <Box sx={{ paddingBlock: "65px" }}>
            <div className="slider-container">
              <Slider {...settings}>
                {image_array?.map((item, index) => (
                  <Box
                    sx={{
                      width: "101px",
                      height: "27px",
                      position: "relative",
                    }}
                  >
                    <Image src={item} key={index} fill />
                  </Box>
                ))}
              </Slider>
            </div>
          </Box>

          <Divider />
        </CommonWrapper>
      </Box>
    </>
  );
};

export default BrandCarasoul;
