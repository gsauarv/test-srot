import AccountingImage from "@/public/accounting.svg";
import RestaurantImage from "@/public/landingimage1.svg";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdSlowMotionVideo } from "react-icons/md";
import CommonWrapper from "../common/CommonWrapper";

const AccountingLanding = ({ isRestaurantPage = false }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: {
            base: "100dvh",
            md: "75dvh",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: isRestaurantPage ? "#F7EFE5" : "#F7F5F2",
            position: "absolute",
            top: 0,
            w: "100%",
            // h: "75dvh",
            // height: "100%",
            // height: "75dvh",

            paddingTop: {
              base: "40px",
              md: "50px",
            },
          }}
        >
          <CommonWrapper>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{
                paddingBottom: "40px",
                flexDirection: {
                  base: "column",
                  md: "row",
                },

                rowGap: { base: "0px", md: "0px" },
              }}
            >
              <Box
                sx={{
                  width: {
                    base: "100%",
                    md: "497px",
                  },

                  paddingBlock: {
                    base: "50px",
                  },
                }}
              >
                <Button
                  variant={"outline"}
                  sx={{
                    backgroundColor: "#F5F8FF",
                    color: isRestaurantPage ? "#FF4D00" : "#496AD0",
                    fontSize: "12px",
                    height: "30px",
                    border: `1px solid ${
                      isRestaurantPage ? "#E4D5C4" : "#CCD9F8"
                    } `,
                    // padding: "10px",
                  }}
                >
                  All In One: Accounting & Restaurant
                </Button>

                <Text
                  sx={{
                    color: isRestaurantPage ? "#150E07" : "#2019A2",
                    fontSize: {
                      base: "34px",
                      md: "46px",
                    },
                    fontWeight: 700,
                    lineHeight: {
                      base: "45px",
                      md: "60px",
                    },
                    paddingTop: "10px",
                  }}
                >
                  Manage your Finances and achieve financial freedom
                </Text>

                <Text
                  sx={{
                    color: "#6C6B80",
                    fontSize: "15px",
                    fontWeight: 300,
                    paddingTop: "10px",
                  }}
                >
                  Take your business to the next level with our cutting-edge,
                  cloud-based solutions.
                </Text>

                <Box>
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
                        background: isRestaurantPage
                          ? "linear-gradient(277.8deg, #F31255 -81.61%, #FF9E2A 105.38%)"
                          : "brand.primary",

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
                        backgroundColor: isRestaurantPage && "#FFFFFF",
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

              <Box
                w={{ base: "100%", md: "850px" }}
                position={"relative"}
                h={{ base: 400, md: 650 }}
                // sx={{
                //   marginTop: {
                //     base: "30px",
                //   },
                // }}
              >
                <Image
                  src={isRestaurantPage ? RestaurantImage : AccountingImage}
                  fill
                  // objectFit="cover"
                />
              </Box>
            </Flex>
          </CommonWrapper>
        </Box>
      </Box>
    </>
  );
};

export default AccountingLanding;
