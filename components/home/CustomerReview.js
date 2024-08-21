"use client";
import { StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import CommonWrapper from "../common/CommonWrapper";
import SectionTitle from "../common/SectionTitle";

const REVIEW_DATA = [
  {
    review:
      "SROT Accounting made my business finances so easy to manage. Their tools helped me track expenses and profits effortlessly. I can now focus more on growing my business without worrying about accounting.",
    author: "Rabin Pokharel - Fintrust",
    // image:
  },

  {
    review:
      "Using SROT Accounting has been a game-changer for my company. It simplified our bookkeeping, saving us both time and money. Highly recommend it to anyone looking for reliable accounting support",
    author: "Ashim Sitaula - Seto Bagh",
  },

  {
    review:
      "SROT's restaurant management system has truly transformed how we run our business. It streamlines orders, inventory, and staff scheduling, making everything so much easier to manage. Our operations are now smoother, and customer satisfaction has improved significantly.",
    author: "Wings Factory - Rupesh Niraula",
  },
];
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
              {REVIEW_DATA?.map((item, index) => (
                <ReviewCard key={index} item={item} />
              ))}
            </Slider>
          </Box>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default CustomerReview;

const ReviewCard = ({ item }) => {
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
            minH: "400px",
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
                {item?.author}
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
              {item?.review}
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
