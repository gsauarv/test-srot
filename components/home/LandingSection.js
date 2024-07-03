"use client";
import CommonWrapper from "@/components/common/CommonWrapper";
import BackImage from "@/public/background.svg";
import LandingImage from "@/public/landingimage.svg";
import LandingImage2 from "@/public/landingres.svg";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { MdSlowMotionVideo } from "react-icons/md";

const images_array = [LandingImage, LandingImage2];

const LandingSection = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const image = images_array?.[selectedImage];
  return (
    <>
      <Box
        sx={{
          h: {
            base: "90dvh",
            md: "80dvh",
            lg: "85dvh",
            xl: "75dvh",
          },

          overflow: "hidden",
        }}
      >
        <Box
          width={"100%"}
          // height={"80dvh"}
          sx={{
            h: {
              base: "90dvh",
              md: "80dvh",
              lg: "85dvh",
              xl: "75dvh",
            },
          }}
          top={0}
          position={"absolute"}
          className="landing_page"
        >
          <Box
            width={"100%"}
            height={"100%"}
            style={{ position: "relative" }}
            zIndex={-1}
          >
            <Image
              src={BackImage}
              fill
              objectFit="cover"
              objectPosition="bottom"
            />
          </Box>

          <Box>
            <Box
              sx={{
                // padding: "0px 20px 0px 0px",
                // paddingTop: {
                //   base: "40px",
                //   md: "0px",
                // },

                position: {
                  base: "absolute",
                  md: "absolute",
                },

                right: 0,
                bottom: {
                  base: "0",
                  md: "-20",
                },
              }}
            >
              <Flex
                justify={"center"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                {/* <Box
                  sx={{
                    width: {
                      lg: "800px",
                      xl: "100%",
                    },
                    height: {
                      lg: "600px",
                      xl: "100%",
                    },
                    position: "relative",
                  }}
                > */}
                <Image
                  src={image}
                  // layout="responsive"
                  // objectFit="cover"
                  // fill
                  width={950}
                  height={500}
                />
                {/* </Box> */}

                <Flex
                  align={"center"}
                  justify={"center"}
                  columnGap={"10px"}
                  marginLeft={"120px"}
                  marginTop={"-90px"}
                  zIndex={100}
                >
                  <Box
                    sx={{
                      width: selectedImage === 0 ? "22px" : "9.5px",
                      height: "6.5px",
                      backgroundColor:
                        selectedImage === 0 ? "#121127" : "#12112760",
                      borderRadius: "4px",
                      cursor: "pointer",
                      transition: "0.2s all ease-in-out",
                    }}
                    onClick={() => setSelectedImage(0)}
                  ></Box>

                  <Box
                    sx={{
                      width: selectedImage === 1 ? "22px" : "9.5px",
                      height: "6.5px",
                      backgroundColor:
                        selectedImage === 1 ? "#121127" : "#12112760",
                      borderRadius: "4px",
                      cursor: "pointer",
                      transition: "0.2s all ease-in-out",
                    }}
                    onClick={() => setSelectedImage(1)}
                  ></Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>

        <Box>
          <Flex
            sx={{
              // width: "100%",
              paddingBlock: {
                base: "30px",
                md: "85px",
                // lg: "50px",
              },

              alignItems: "flex-start",
              justifyContent: "space-between",
              flexDir: {
                base: "column",
                md: "column",
                lg: "row",
                xl: "row",
              },
            }}
          >
            <Box>
              <CommonWrapper>
                <Box
                  zIndex={10}
                  sx={{
                    width: {
                      base: "100%",
                      md: "455px",
                    },
                  }}
                >
                  <Box>
                    <Button
                      variant={"outline"}
                      sx={{
                        backgroundColor: "#F5F8FF",
                        color: "#496AD0",
                        fontSize: "12px",
                        height: "30px",
                        border: "1px solid #CCD9F8",
                        // padding: "10px",
                      }}
                    >
                     Cloud Based: Accounting & Restaurant Software
                    </Button>

                    <Text
                      sx={{
                        fontSize: {
                          base: "25px",
                          md: "25px",
                        },
                        lineHeight: {
                          base: "37px",
                          md: "37px",
                        },
                        fontWeight: 500,
                        color: "#122E93",

                        paddingTop: "16px",
                      }}
                    >
                       Manage your business with our advanced cloud based 
                    </Text>
                    <Text
                  sx={{
                    fontSize: {
                      base: "34px",
                      md: "34px",
                    },
                    fontWeight: 800,
                    lineHeight: {
                      base: "45px",
                      md: "45px",
                    },
                    paddingTop: "10px",
                    color: "#4068C0"
                  }}
                >
                    Accounting & Restaurant Handling Software
                </Text>

                    <Text
                      sx={{
                        paddingTop: "16px",
                        color: "#6C6B80",
                        fontSize: "16px",
                        fontWeight: 300,
                      }}
                    >
                      Take your business to the next level through our cutting-edge, cloud-based platform.
                    </Text>

                    <Flex
                      sx={{
                        paddingTop: "40px",
                        alignItems: "center",
                        columnGap: "16px",
                      }}
                    >
                      <Button
                        _hover={{
                          backgroundColor: "brand.hover",
                        }}
                        sx={{
                          backgroundColor: "brand.primary",
                          color: "white",
                          fontSize: "16px",
                          fontWeight: 500,
                          width: "152px",
                          height: "48px",
                          borderRadius: "4px",
                        }}
                      >
                        Get Started
                      </Button>
                      <Button
                        leftIcon={<MdSlowMotionVideo />}
                        sx={{
                          // backgroundColor: "brand.primary",
                          color: "#6C6B80",
                          fontSize: "16px",
                          fontWeight: 500,
                          width: "152px",
                          height: "48px",
                          borderRadius: "4px",
                        }}
                      >
                        Watch Video
                      </Button>
                    </Flex>

                    <Text
                      sx={{
                        paddingTop: "30px",
                        color: "#6C6B80",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Free 30 days trial / Exclusive support / Zero Installation Fee
                    </Text>
                  </Box>
                </Box>
              </CommonWrapper>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default LandingSection;
