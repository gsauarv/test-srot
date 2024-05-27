import why1 from "@/public/why1.svg";
import why2 from "@/public/why2.svg";
import why3 from "@/public/why3.svg";
import why4 from "@/public/why4.svg";
import why5 from "@/public/why5.svg";

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
            width: "642.63px",
            lineHeight: "46px",
            fontSize: "38px",
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
          }}
        >
          Take your business to the next level with our cutting-edge.
        </Text>
      </Flex>

      <Flex justifyContent={"center"}>
        <Box sx={{ paddingBlock: "54px" }}>
          <Flex
            sx={{
              alignItems: "center",
              columnGap: "26px",
              justifyContent: "center",
            }}
          >
            <WhyChooseUsCard
              image={why1}
              title={"Accessibility and Convenience"}
              description={
                "Allows clients to access their accounting data from anywhere with an internet connection"
              }
            />

            <WhyChooseUsCard
              image={why2}
              title={"Real-time Collaboration"}
              description={
                "Facilitate seamless collaboration for distributed teams and external accountants"
              }
              type="md"
            />
          </Flex>

          <Flex
            sx={{
              columnGap: "26px",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <WhyChooseUsCard
              image={why3}
              title={"Automatic Updates and Maintenance"}
              description={
                "Enjoy automated updates & maintenance-free software."
              }
              type="sm"
            />

            <WhyChooseUsCard
              image={why4}
              title={"Data Security and Backup"}
              description={
                "Cloud-based accounting offers strong security features, such as data encryption, controlled access, & consistent backups."
              }
              type="sm"
            />

            <WhyChooseUsCard
              image={why5}
              title={"Reduced IT Overhead"}
              description={
                "Reduces the need for onsite servers & IT upkeep as cloud providers manage updates & maintenance."
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
          width: "fit-content",
          // overflow: "hidden",
          width: type === "large" ? "640px" : type !== "sm" ? "419px" : "343px",
        }}
      >
        <CardHeader title={title} description={description} />

        <Flex
          justifyContent={"flex-start"}
          sx={{ paddingTop: "36px", width: "fit-content" }}
        >
          <Image
            src={image}
            // layout="responsive"
            // height={"286px"}
            width={"100%"}
            objectFit="cover"
            objectPosition="center"
          />
        </Flex>
      </Box>
    </>
  );
};
