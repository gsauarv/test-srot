"use client";
import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";

import CommonWrapper from "../common/CommonWrapper";
import SectionTitle from "../common/SectionTitle";

const CustomerReview = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false,

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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#F6F6F8", padding: "71px 0px" }}>
        <CommonWrapper>
          <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ width: "408px" }}>
              <SectionTitle title={"Words from our customer"} />
            </Box>

            <Flex sx={{ alignItems: "center", columnGap: "18px" }}>
              <IconButton
                sx={{
                  width: "54px",
                  height: "54px",
                  backgroundColor: "#fff",
                  borderRadius: "100%",
                }}
                onClick={previous}
              >
                <MdKeyboardArrowLeft
                  style={{ fontSize: "28px", color: "#D1D1DB" }}
                />
              </IconButton>
              <IconButton
                onClick={next}
                sx={{
                  width: "54px",
                  height: "54px",
                  backgroundColor: "#fff",
                  borderRadius: "100%",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <MdKeyboardArrowRight
                  style={{ fontSize: "28px", color: "#201F37" }}
                />
              </IconButton>
            </Flex>
          </Flex>

          <Box sx={{ paddingTop: "40px" }}>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </Slider>
          </Box>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default CustomerReview;

const ReviewCard = () => {
  return (
    <>
      <Box sx={{ margin: "10px" }}>
        <Box
          sx={{
            backgroundColor: "#FFF",
            boxShadow: "0px 5px 18px 0px #5890FF1A,0px 0px 1.5px 0px #3B6CEB1A",
            maxWidth: "100%",
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            padding: "44px",
          }}
        >
          <Flex columnGap={"16px"} alignItems={"center"}>
            <Avatar
              src="https://picsum.photos/200/300"
              sx={{ width: "48px", height: "48px" }}
            />

            <Box>
              <Text
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#121127",
                  //   letterSpacing: "0.5px",
                }}
              >
                Cameron Williamson
              </Text>

              <Text
                sx={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#4C4B63",
                  // paddingTop: "4px",
                }}
              >
                Senior marketing manager
              </Text>
            </Box>
          </Flex>

          <Box sx={{ paddingTop: "36px" }}>
            <Text
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#201F37",
                lineHeight: "33px",
              }}
            >
              {" "}
              The modern outlook and easy to use nature of Tigg had
              exceptionally pleased us. We were quite impressed with the
              numerous reports that it produced and how easy it was for new
              user. It has saved us a lot of time and the fact that is
              accessible from anywhere; being a cloud-based platform is an extra
              add-on.
            </Text>
          </Box>

          <Box sx={{ paddingTop: "13px" }}>
            <Flex columnGap={"8px"}>
              {[...Array(5)]?.map((item) => (
                <StarIcon style={{ color: "#E9B677" }} />
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};
