"use client";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import CommonWrapper from "../common/CommonWrapper";

import ProductsImg from "@/public/products.svg";
import RocketImg from "@/public/rocket.svg";
import SubscriptionsImg from "@/public/subscriptions.svg";
import TransactionImg from "@/public/transactions.svg";

import Image from "next/image";

const HelpLandingSection = () => {
  const help_data = [
    {
      title: "Getting Started",
      icon: RocketImg,
      links: [
        {
          label: "Downloading app",
        },

        {
          label: "Help Guide",
        },

        {
          label: "Verifying Identity",
        },
      ],
    },

    {
      title: "Transactions",
      icon: TransactionImg,
      links: [
        {
          label: "Transactions",
        },

        {
          label: "Suppliers detail",
        },

        {
          label: "Banking details",
        },
      ],
    },

    {
      title: "Subscriptions",
      icon: SubscriptionsImg,
      links: [
        {
          label: "How to buy subscription",
        },

        {
          label: "Card Details",
        },

        {
          label: "Upgrade subscription",
        },
      ],
    },
    {
      title: "Products",
      icon: ProductsImg,
      links: [
        {
          label: "Accounting Details",
        },

        {
          label: "Restaurant Details",
        },

        {
          label: "Pricing",
        },
      ],
    },
  ];
  return (
    <>
      <Box
        sx={
          {
            //   backgroundColor: "red",
            //   position: "absolute",
            //   top: 0,
            //   height: "50dv",
          }
        }
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          paddingBlock={"66px 0px"}
        >
          <Text
            sx={{
              fontSize: {
                base: "32px",
                md: "46px",
              },
              fontWeight: 700,
              color: "#3E399B",
              textAlign: "center",
            }}
          >
            How can we help you?
          </Text>

          <Flex
            sx={{
              paddingTop: {
                base: "25px",
                md: "32px",
              },
            }}
          >
            <InputGroup sx={{ height: "52px" }}>
              <InputLeftElement pointerEvents="none" sx={{ height: "100%" }}>
                <Search2Icon color="#9D9CAF" />
              </InputLeftElement>
              <Input
                sx={{
                  width: {
                    base: "380px",
                    md: "536px",
                  },
                  boxShadow: "0px 4px 24px 0px #2348C91A",
                  height: "100%",
                  borderRadius: "4px",
                  border: "none",
                  // marginTop: "32px",

                  _placeholder: {
                    color: "#9D9CAF",
                    fontSize: "15px",
                    fontWeight: 500,
                  },
                }}
                placeholder="Search your keyword here"
              />
            </InputGroup>
          </Flex>
        </Flex>

        <CommonWrapper>
          <Flex
            columnGap={"32px"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingTop={"60px"}
            sx={{
              flexDirection: {
                base: "column",
                md: "row",
              },

              rowGap: {
                base: "20px",
              },
            }}
          >
            {help_data?.map(({ links, title, icon }) => (
              <HelpCard icon={icon} title={title} links={links} />
            ))}
          </Flex>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default HelpLandingSection;

const HelpCard = ({ icon, title, links = [] }) => {
  return (
    <>
      <Box
        sx={{
          width: {
            base: "100%",
            md: "270px",
          },
          backgroundColor: "#fff",
          boxShadow: "0px 4px 24px 0px #2348C91A",
          height: "316px",
          borderRadius: "4px",
          padding: "45px 35px",

          svg: {
            fontSize: "36px",
            color: "#3E399B",
          },
        }}
      >
        <Image src={icon} />
        <Text
          sx={{
            color: "#3E399B",
            fontSize: "20px",
            fontWeight: 700,
            paddingTop: "10px",
          }}
        >
          {title}
        </Text>

        <Box sx={{ paddingTop: "24px" }}>
          <Flex sx={{ flexDir: "column", rowGap: "8px" }}>
            {links?.map((item) => (
              <Text
                sx={{ fontSize: "15px", fontWeight: 500, color: "#383751" }}
              >
                {item?.label}
              </Text>
            ))}
          </Flex>
        </Box>

        <Text
          sx={{
            paddingTop: "24px",
            fontSize: "13px",
            fontWeight: 500,
            color: "#4559BD",
          }}
        >
          View all
        </Text>
      </Box>
    </>
  );
};
