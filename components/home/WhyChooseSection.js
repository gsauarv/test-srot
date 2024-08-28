"use client";
import why1 from "@/public/Why1.png";
import why2 from "@/public/Why2.png";
import why3 from "@/public/Why3.png";
import why4 from "@/public/Why4.png";
import why5 from "@/public/Why5.png";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const WhyChooseSection = () => {
  return (
    <Box paddingTop={"75px"}>
      <Flex justifyContent={"center"} align={"center"} flexDir={"column"}>
        <Button
          sx={{
            // width: "107px",
            height: "24px",
            color: "#E9126C",
            backgroundColor: "#FFF0F6",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          Why choose us
        </Button>

        <Text
          sx={{
            width: {
              base: "95%",
              md: "642.63px",
            },
            lineHeight: {
              base: "30px",
              md: "46px",
            },
            fontSize: {
              base: "22px",
              md: "38px",
            },
            fontWeight: 700,
            paddingTop: "16px",
            textAlign: "center",
            color: "#181380",
          }}
        >
          Manage your business seamlessly from anywhere using a cloud-based
          solution.
        </Text>
        <Text
          sx={{
            textAlign: "center",
            color: "#6C6B80",
            fontSize: "16px",
            paddingTop: "16px",
            fontWeight: 400,
            width: {
              base: "95%",
              md: "100%",
            },
          }}
        >
          Take your business to the next level with our cutting-edge.
        </Text>
      </Flex>

      <Flex
        justifyContent={"center"}
        sx={{
          padding: {
            base: "0px 30px",
            md: "0px",
          },
        }}
      >
        <Box sx={{ paddingBlock: "54px" }}>
          <Flex
            sx={{
              alignItems: "center",
              columnGap: "26px",
              justifyContent: "center",
              flexDirection: {
                base: "column",
                md: "row",
              },
              rowGap: {
                base: "40px",
              },
            }}
          >
            <WhyChooseUsCard
              image={why1}
              title={"Availability on any Device"}
              description={
                "You can access your system from any device: Mobile, Desktop, or Tablet from any corner of the country with the help of just an internet connection."
              }
            />

            <WhyChooseUsCard
              image={why2}
              title={"Data Backup and Security"}
              description={
                "We backup your data every day on our secure cloud server and help you with its recovery even if you damage your device."
              }
              type="md"
            />
          </Flex>

          <Flex
            sx={{
              columnGap: "26px",
              justifyContent: "center",
              paddingTop: "30px",
              flexDirection: {
                base: "column",
                md: "row",
              },

              rowGap: {
                base: "40px",
              },
            }}
          >
            <WhyChooseUsCard
              image={why3}
              title={"Free Updates, Maintainaince, & Support"}
              description={
                "Any issues or updates in our system will be resolved or updated for free for our existing users."
              }
              type="sm"
            />

            <WhyChooseUsCard
              image={why4}
              title={"Multiple User Access and Control"}
              description={
                "Give access to multiple users (Accountants, Auditors) as you can control what access to give them."
              }
              type="sm"
            />

            <WhyChooseUsCard
              image={why5}
              title={"Easy for Navigation and Entry"}
              description={
                "Our automated system will make it easy for business owners with no accounting background to navigate and add entries to the system."
              }
              type="sm"
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyChooseSection;

const CardHeader = ({ title, description }) => {
  return (
    <>
      <Box
        sx={{
          paddingTop: "42px",
        }}
      >
        <Text sx={{ fontSize: "20px", color: "#201F37", fontWeight: 700 }}>
          {title}
        </Text>
        <Text
          sx={{
            color: "#6C6B80",
            fontSize: "14px",
            fontWeight: 500,
            textWrap: "wrap",
            // width: "400px",
            paddingTop: "5px",
          }}
        >
          {description}
        </Text>
      </Box>
    </>
  );
};

const WhyChooseUsCard = ({ image, title, description, type = "large" }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F8FAFC",
          //   height: "429px",
          padding: "0px 31px",
          borderRadius: "6px",
          // width: "fit-content",
          // overflow: "hidden",
          width: {
            base: "100%",
            md: type === "large" ? "640px" : type !== "sm" ? "419px" : "343px",
          },
        }}
      >
        <CardHeader title={title} description={description} />

        <Flex
          justifyContent={"flex-start"}
          sx={{
            // mt: "10px",
            paddingTop: "36px",
            width: { base: "100%", md: "100%" },
            position: {
              base: "relative",
              md: "relative",
            },
            height: {
              // base: "400px",
              md: "300px",
            },
          }}
        >
          <Image
            src={image}
            layout="responsive"
            // height={"286px"}
            // fill
            width={"100%"}
            objectFit="contain"
            objectPosition="center"
          />
        </Flex>
      </Box>
    </>
  );
};
