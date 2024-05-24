import accountImg from "@/public/account.svg";
import restaurantImg from "@/public/restaurant.svg";

import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaCreditCard } from "react-icons/fa6";
import { FiArrowRight, FiBox } from "react-icons/fi";
import { TbPercentage } from "react-icons/tb";

const PlatformSection = () => {
  return (
    <>
      <PlatformDetailCard
        title="We make it extremely easy for all your Invoicing & Accounting work"
        type="Account"
      />
      <PlatformDetailCard
        title="We make it extremely easy for all your Restaurant ordering & Billing work"
        type="Restaurant"
      />
    </>
  );
};

export default PlatformSection;

const PlatformDetailCard = ({ title, type = "" }) => {
  return (
    <>
      <Flex
        sx={{
          paddingTop: "107px",
          columnGap: type?.toLowerCase() === "restaurant" ? "150px" : "150px",

          justifyContent: "center",
          flexDirection:
            type?.toLowerCase() === "restaurant" ? "row-reverse" : "row",
        }}
      >
        <Box sx={{ width: "fit-content" }}>
          <Box>
            <Button
              sx={{
                width: "91px",
                height: "24px",
                backgroundColor:
                  type?.toLowerCase() === "restaurant" ? "#FFEFE0" : "#E0FFF4",
                color:
                  type?.toLowerCase() === "restaurant" ? "#F29048" : "#2E9B74",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {type}
            </Button>

            <Box sx={{ paddingTop: "8px" }}>
              <Text
                sx={{
                  fontSize: "36px",
                  color: "#181380",
                  fontWeight: 700,
                  lineHeight: "46px",
                  width:
                    type?.toLowerCase() !== "restaurant" ? "541.43px" : "600px",
                }}
              >
                {title}
              </Text>

              <Text
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#6C6B80",
                  paddingTop: "8px",
                }}
              >
                Take your business to the next level with our cutting-edge,
                cloud-based solutions.
              </Text>
            </Box>

            <Flex
              sx={{
                paddingTop: "32px",
                borderTop: "1px solid #F3F3F6",
                marginTop: "30px",
                width: "fit-content",
              }}
              alignItems={"center"}
              columnGap={"40px"}
            >
              <PlatformCard
                color="#71AAFF"
                icon={<TbPercentage />}
                title="Accounting"
              />
              <PlatformCard
                color="#F9A362"
                icon={<FiBox />}
                title="Inventory Management"
              />
              <PlatformCard
                color="#F1A3DB"
                icon={<FaCreditCard />}
                title="Cheque Management"
              />
            </Flex>

            <Button
              rightIcon={<FiArrowRight />}
              sx={{
                color: "#496AD0",
                fontSize: "15px",
                fontWeight: 500,
                marginTop: "44px",
                width: "150px",
                height: "40px",
                borderRadius: "4px",
                border: "1.2px solid #E5E5EB",
              }}
              variant={"outline"}
            >
              See more
            </Button>
          </Box>
        </Box>

        <Box>
          <Image
            src={
              type?.toLowerCase() !== "restaurant" ? accountImg : restaurantImg
            }
          />
        </Box>
      </Flex>
    </>
  );
};

const PlatformCard = ({ color, icon, title }) => {
  return (
    <Box>
      <IconButton
        icon={icon}
        sx={{
          backgroundColor: color,
          width: "43px",
          height: "43px",

          "& svg": {
            fontSize: "24px",
            color: "#fff",
          },
        }}
      />
      <Box sx={{ paddingTop: "16px" }}>
        <Text
          sx={{
            color: "#383751",
            fontSize: "16px",
            fontWeight: 700,
            textWrap: "no-wrap",
          }}
        >
          {title}
        </Text>

        <Text
          sx={{
            color: "#6C6B80",
            fontSize: "13px",
            fontWeight: 400,
            paddingTop: "6px",
            width: "163px",
          }}
        >
          It simplifies budgeting and forecasting
        </Text>
      </Box>
    </Box>
  );
};
