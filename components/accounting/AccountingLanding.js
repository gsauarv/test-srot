import AccountingImage from "@/public/accounting.svg";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdSlowMotionVideo } from "react-icons/md";
import CommonWrapper from "../common/CommonWrapper";

const AccountingLanding = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "75dvh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F7F5F2",
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
              sx={{ paddingBottom: "40px" }}
            >
              <Box sx={{ width: "497px" }}>
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
                    color: "#2019A2",
                    fontSize: "46px",
                    fontWeight: 700,
                    lineHeight: "60px",

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

              <Box w={"850px"} position={"relative"} h={650}>
                <Image src={AccountingImage} fill />
              </Box>
            </Flex>
          </CommonWrapper>
        </Box>
      </Box>
    </>
  );
};

export default AccountingLanding;
