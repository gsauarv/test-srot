"use client";
import Fint from "@/public/fint.jpeg";
import Kimchi from "@/public/kimchi.jpeg";
import Setobagh from "@/public/setobagh.jpg";
import Wings from "@/public/wings.jpeg";

import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import CommonWrapper from "../common/CommonWrapper";

const BrandCarasoul = () => {
  const image_array = [
    Kimchi,
    Setobagh,
    Wings,
    Fint,
    Kimchi,
    Setobagh,
    Wings,
    Fint,
  ];
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
                      height: "80px",
                      position: "relative",
                    }}
                  >
                    <Image src={item} key={index} fill objectFit="contain" />
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
