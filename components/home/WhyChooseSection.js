import why1 from "@/public/why1.svg";
import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
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
        <Box sx={{ width: "1085px" }}>
          <Grid
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={"20px"}
            sx={{ paddingTop: "54px" }}
          >
            <GridItem colSpan={2}>
              <WhyChooseUsCard />
            </GridItem>
            <GridItem colSpan={2}>
              <WhyChooseUsCard />
            </GridItem>
            <GridItem colSpan={1}>
              <WhyChooseUsCard />
            </GridItem>{" "}
            <GridItem>
              <WhyChooseUsCard />
            </GridItem>{" "}
            <GridItem>
              <WhyChooseUsCard />
            </GridItem>{" "}
            <GridItem>
              <WhyChooseUsCard />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyChooseSection;

const WhyChooseUsCard = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F8FAFC",
          //   height: "429px",
          padding: "0px 31px",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            paddingTop: "42px",
          }}
        >
          <Text sx={{ fontSize: "20px", color: "#201F37", fontWeight: 700 }}>
            Accessibility and Convenience
          </Text>
          <Text sx={{ color: "#6C6B80", fontSize: "14px", fontWeight: 500 }}>
            Allows clients to access their accounting data from anywhere with an
            internet connection.
          </Text>
        </Box>

        <Flex justifyContent={"flex-start"} sx={{ paddingTop: "36px" }}>
          <Image
            src={why1}
            layout="responsive"
            height={"286px"}
            // width={"100%"}
            objectFit="cover"
            objectPosition="center"
          />
        </Flex>
      </Box>
    </>
  );
};
