import Logo from "@/public/logo.svg";
import { Box, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import CommonWrapper from "./CommonWrapper";

const Footer = () => {
  const footer_section = [
    {
      title: "Products",
      links: [
        // {
        //   label: "Invoicing",
        //   to: "/",
        // },
        {
          label: "Accounting",
          to: "/",
        },
        {
          label: "Restaurant",
          to: "/",
        },
        // {
        //   label: "Contracts",
        //   to: "/",
        // },
        // {
        //   label: "Scheduling",
        //   to: "/",
        // },
      ],
    },

    {
      title: "Resources",
      links: [
        {
          label: "Blog",
          to: "/",
        },
        {
          label: "Account Resource",
          to: "/",
        },
        // {
        //   label: "How to Bill a client",
        //   to: "/",
        // },
        // {
        //   label: "How to switch  company",
        //   to: "/",
        // },
      ],
    },

    {
      title: "Company",
      links: [
        {
          label: "Help Center",
          to: "/",
        },
        {
          label: "Contact us",
          to: "/",
        },
        {
          label: "Privacy",
          to: "/",
        },
        {
          label: "Terms and conditions",
          to: "/",
        },
      ],
    },
  ];
  return (
    <>
      <Box sx={{ padding: "50px 0px" }}>
        <CommonWrapper>
          <Flex
            sx={{
              alignItems: "flex-start",
              columnGap: "200px",
              paddingBottom: "42px",
              flexDirection: {
                base: "column",
                md: "row",
              },
            }}
          >
            <Box sx={{ width: "200px" }}>
              <Box>
                <Image src={Logo} />
              </Box>

              <Flex
                alignItems={"center"}
                columnGap={"8px"}
                sx={{ paddingTop: "30px" }}
              >
                <HiLocationMarker
                  style={{ fontSize: "20px", color: "#6C6B80" }}
                />
                <Text
                  sx={{
                    fontSize: "14px",
                    color: "#4C4B63",
                    fontWeight: 500,
                    textWrap: "no-wrap",
                    width: "100%",
                  }}
                >
                  Kalikasthan, Kathmandu
                </Text>
              </Flex>

              <Box sx={{ paddingTop: "14px" }}>
                <Text
                  sx={{ color: "#4C4B63", fontSize: "12px", fontWeight: 700 }}
                >
                  Sales
                </Text>
              </Box>

              <Flex alignItems={"center"} columnGap={"8px"} paddingTop={"8px"}>
                <FaPhoneAlt style={{ color: "#4559BD", fontSize: "18px" }} />
                <Text
                  sx={{ color: "#4C4B63", fontSize: "14px", fontWeight: 500 }}
                >
                  +977 9802304368
                </Text>
              </Flex>

              <Flex alignItems={"center"} columnGap={"8px"} paddingTop={"8px"}>
                <MdEmail style={{ color: "#4559BD", fontSize: "18px" }} />
                <Text
                  sx={{ color: "#4C4B63", fontSize: "14px", fontWeight: 500 }}
                >
                  sales@srotcloud.com
                </Text>
              </Flex>

              <Box sx={{ paddingTop: "14px" }}>
                <Text
                  sx={{ color: "#4C4B63", fontSize: "12px", fontWeight: 700 }}
                >
                  Support
                </Text>
              </Box>

              <Flex alignItems={"center"} columnGap={"8px"} paddingTop={"8px"}>
                <FaPhoneAlt style={{ color: "#339AA2", fontSize: "18px" }} />
                <Text
                  sx={{ color: "#4C4B63", fontSize: "14px", fontWeight: 500 }}
                >
                  +977 9841587582
                </Text>
              </Flex>

              <Flex alignItems={"center"} columnGap={"8px"} paddingTop={"8px"}>
                <MdEmail style={{ color: "#339AA2", fontSize: "18px" }} />
                <Text
                  sx={{ color: "#4C4B63", fontSize: "14px", fontWeight: 500 }}
                >
                  support@srotcloud.com
                </Text>
              </Flex>
            </Box>

            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap={{
                base: "40px",
                md: "120px",
              }}
              sx={{
                marginTop: {
                  base: "40px",
                  md: "0px",
                },
              }}
              //   sx={{ width: "100%" }}
            >
              {footer_section?.map(({ title, links }) => (
                <GridItem sx={{ width: "fit-content" }}>
                  <Text
                    sx={{ fontSize: "16px", fontWeight: 700, color: "#121127" }}
                  >
                    {title}
                  </Text>

                  <Flex
                    sx={{
                      paddingTop: "22px",
                      flexDir: "column",
                      rowGap: "16px",
                    }}
                  >
                    {links?.map(({ label, to }) => (
                      <Link href={to}>
                        <Text
                          sx={{
                            fontSize: "14px",
                            color: "#6C6B80",
                            fontWeight: 500,
                            textWrap: "no-wrap",
                          }}
                        >
                          {label}
                        </Text>
                      </Link>
                    ))}
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </Flex>

          <Divider />

          <Text
            sx={{
              color: "#4C4B63",
              fontWeight: 400,
              fontSize: "16px",
              textAlign: "center",
              paddingTop: "24px",
            }}
          >
            &copy; 2024 SROT. All rights reserved
          </Text>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default Footer;
