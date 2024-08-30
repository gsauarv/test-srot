import AccountingImage from "@/public/accounting.svg";
import RestaurantImage from "@/public/landingimage1.svg";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import CommonWrapper from "../common/CommonWrapper";

const AccountingLanding = ({ isRestaurantPage = false }) => {
  const accountingData = {
    buttonText: "Cloud Based: Accounting Platform",
    title: "Accounting Platform",
    subtitle: "Simplify your business through our all-inclusive",
    bottomSubtitle:
      "Take your business to the next level through our cutting-edge, cloud-based platform.",
  };

  const restaurantData = {
    buttonText: "Cloud Based: Accounting Platform",
    title: "Restaurant Handling Platform",
    subtitle: "Manage your restaurant through our all-inclusive",
    bottomSubtitle:
      "Kick start your restaurant business to the digital future ",
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: {
            base: "108dvh",
            sm: "122dvh",
            md: "87dvh",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: isRestaurantPage ? "#F7EFE5" : "#F7F5F2",
            position: "absolute",
            top: 0,
            w: "100%",
            height: {
              base: "108dvh",
              sm: "122dvh",
              md: "87dvh",
            },
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
                  {isRestaurantPage
                    ? restaurantData?.buttonText
                    : accountingData?.buttonText}
                </Button>

                <Text
                  sx={{
                    color: isRestaurantPage ? "#150E07" : "#2019A2",
                    fontSize: {
                      base: "16px",
                      md: "25px",
                    },
                    fontWeight: 500,
                    lineHeight: {
                      base: "25px",
                      md: "37px",
                    },
                    paddingTop: "10px",
                  }}
                >
                  {isRestaurantPage
                    ? restaurantData?.subtitle
                    : accountingData?.subtitle}
                </Text>
                <Text
                  sx={{
                    color: isRestaurantPage ? "#150E07" : "#2019A2",
                    fontSize: {
                      base: "26px",
                      md: "41px",
                    },
                    fontWeight: 800,
                    lineHeight: {
                      base: "35px",
                      md: "49px",
                    },
                    paddingTop: "10px",
                    color: "#4068C0",
                  }}
                >
                  {isRestaurantPage
                    ? restaurantData?.title
                    : accountingData?.title}
                </Text>

                <Text
                  sx={{
                    color: "#6C6B80",
                    fontSize: "15px",
                    fontWeight: 300,
                    paddingTop: {
                      base: "5px",
                      md: "10px",
                    },
                  }}
                >
                  {isRestaurantPage
                    ? restaurantData?.bottomSubtitle
                    : accountingData?.bottomSubtitle}
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
                    {/* <Button
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
                    </Button> */}
                  </Flex>

                  <Text
                    sx={{
                      paddingTop: "30px",
                      color: "#6C6B80",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Free 30 days trial / Exclusive support / Zero Installation
                    Charge
                  </Text>
                </Box>
              </Box>

              <Box
                w={{ base: "100%", md: "850px" }}
                position={"relative"}
                h={{ base: 500, md: 650 }}
                sx={{
                  marginTop: {
                    base: "-80px",
                    md: "0px",
                  },
                }}
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
