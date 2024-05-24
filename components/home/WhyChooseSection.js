import { Box, Button, Flex, Text } from "@chakra-ui/react";

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
    </Box>
  );
};

export default WhyChooseSection;
