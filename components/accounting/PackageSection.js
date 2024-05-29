import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineCheck } from "react-icons/md";
import SectionTitle from "../common/SectionTitle";

const PackageSection = ({ title = true }) => {
  return (
    <>
      <Flex sx={{ justifyContent: "center", paddingBlock: title && "45px" }}>
        {title && (
          <Box sx={{ width: "471.98px", textAlign: "center" }}>
            <SectionTitle title={"Our Suitable Package For Your Need"} />
            <Text
              sx={{
                fontSize: "15px",
                paddingTop: "16px",
                color: "#6C6B80",
                fontWeight: 300,
              }}
            >
              Choose a plan tailored to your need.
            </Text>
          </Box>
        )}
      </Flex>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        columnGap={"32px"}
        paddingBlock={title ? "40px" : "0px"}
      >
        <PackageCard title={title} />
        <PackageCard isRecommended title={title} />
        <PackageCard title={title} />
      </Flex>
    </>
  );
};

export default PackageSection;

const PackageCard = ({ isRecommended = false, title }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F8FAFC",
          width: "312px",
          minH: "518px",
          height: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          paddingBottom: isRecommended && "37px",
          paddingTop: !isRecommended && "46px",
          boxShadow: !title && "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        {isRecommended && (
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              width: "100%",
              height: "46px",
              backgroundColor: "#38AEBA",
              marginBottom: "30px",
            }}
          >
            <Text
              sx={{
                fontSize: "16px",
                color: "#fff",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Recommended
            </Text>
          </Flex>
        )}
        <Box>
          <Flex
            justifyContent={"center"}
            sx={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsFillSendFill style={{ color: "#38AEBA", fontSize: "28px" }} />

            <Text
              sx={{
                paddingTop: "20px",
                fontSize: "17px",
                fontWeight: 700,
                color: "#383751",
              }}
            >
              Starter
            </Text>

            <Text
              sx={{
                paddingTop: "5px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#6C6B80",
              }}
            >
              For new Freelancers
            </Text>

            <Box sx={{ paddingTop: "13px" }}>
              <Text
                sx={{ fontSize: "26px", fontWeight: 800, color: "#496AD0" }}
              >
                Rs 1200{" "}
                <Text
                  as={"span"}
                  sx={{ fontSize: "14px", fontWeight: 500, color: "#9D9CAF" }}
                >
                  /year
                </Text>
              </Text>
            </Box>

            <Divider
              sx={{
                backgroundColor: "red",
                width: "120px",
                marginBlock: "20px",
              }}
            />
          </Flex>

          <Box sx={{ padding: "0px 46px" }}>
            <Text sx={{ color: "#201F37", fontSize: "14px", fontWeight: 700 }}>
              Included in starter :
            </Text>

            <Flex
              sx={{
                flexDirection: "column",
                rowGap: "12px",
                paddingBlock: "16px 0px",
              }}
            >
              <FeatureText title={"Invoicing & Payment"} />
              <FeatureText title={"Cheque Management"} />
              <FeatureText title={"1000 Transaction"} />
              <FeatureText title={"20Gb Storage"} />
            </Flex>

            <Button
              sx={{
                backgroundColor: "#4E8AF4",
                width: "100%",
                fontSize: "14px",
                fontWeight: 700,
                color: "#fff",
                marginTop: "53px",
                height: "42px",

                _hover: {
                  backgroundColor: "brand.hover",
                },
              }}
            >
              Get Subscription
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const FeatureText = ({ title }) => {
  return (
    <>
      <Flex sx={{ alignItems: "center", columnGap: "8px" }}>
        <MdOutlineCheck style={{ color: "#22AD01" }} />
        <Text sx={{ fontSize: "14px", color: "#383751", fontWeight: 500 }}>
          {title}
        </Text>
      </Flex>
    </>
  );
};
