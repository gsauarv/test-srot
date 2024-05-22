"use client";
import CommonWrapper from "@/components/common/CommonWrapper";
import BackImage from "@/public/background.svg";
import LandingImage from "@/public/landingimage.svg";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdSlowMotionVideo } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Box
        position={"absolute"}
        width={"100%"}
        top={0}
        // height={"75dvh"}
        overflow={"visible"}
        sx={{
          height: {
            base: "105dvh",
            md: "80dvh",
            lg: "80dvh",
            xl: "75dvh",
          },
        }}
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
      </Box>

      <Flex
        sx={{
          // width: "100%",
          paddingTop: {
            base: "40px",
            md: "96px",
            lg: "50px",
          },
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDir: {
            base: "column",
            md: "row",
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
                  All In One: Accounting & Restaurant
                </Button>

                <Text
                  sx={{
                    fontSize: {
                      base: "35px",
                      md: "52px",
                    },
                    lineHeight: {
                      base: "45px",
                      md: "56px",
                    },
                    fontWeight: 700,
                    color: "#122E93",

                    paddingTop: "16px",
                  }}
                >
                  One Platform to Streamline Entire Business
                </Text>

                <Text
                  sx={{
                    paddingTop: "16px",
                    color: "#6C6B80",
                    fontSize: "16px",
                    fontWeight: 300,
                  }}
                >
                  Take your business to the next level with our cutting-edge,
                  cloud-based solutions.
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
                  Free 30 days trial / Exclusive support / No fees
                </Text>
              </Box>
            </Box>
          </CommonWrapper>
        </Box>

        <Box
          sx={{
            width: "fit-content",
            padding: "0px 20px 0px 0px",
            paddingTop: {
              base: "40px",
              md: "0px",
            },
          }}
        >
          <Image src={LandingImage} />
        </Box>
      </Flex>
    </>
  );
}
