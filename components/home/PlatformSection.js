import accountImg from "@/public/account.svg";
import restaurantImg from "@/public/restaurant.svg";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCreditCard } from "react-icons/fa6";
import { FiArrowRight, FiBox } from "react-icons/fi";
import { TbPercentage } from "react-icons/tb";

const PlatformSection = () => {
  return (
    <>
      <PlatformDetailCard
        title="Clear Financial Picture: Effortless Accounting at Your Fingertips "
        type="Accounting"
      />
      <PlatformDetailCard
        title="Simplify Restaurant Management: Make Ordering, Billing, Reporting easy"
        type="Restaurant"
      />
    </>
  );
};

export default PlatformSection;

const PlatformDetailCard = ({ title, type = "" }) => {
  const accountingData = [
    {
      title: "Accounting",
      icon: <TbPercentage />,
      description: "Simplify cash flow, revenue, and balance sheet",
      color: "#71AAFF",
    },

    {
      title: "Inventory Management",
      icon: <FiBox />,
      description: "Keep track of inventory within your business",
      color: "#F9A362",
    },

    {
      title: "Assets Management",
      icon: <FaCreditCard />,
      description: "Manage your assets and calculate depreciation",
      color: "#F1A3DB",
    },
  ];

  const resData = [
    {
      title: "Accounting",
      icon: <TbPercentage />,
      description: "Simplify cash flow, revenue, and balance sheet",
      color: "#71AAFF",
    },

    {
      title: "Inventory Management",
      icon: <FiBox />,
      description: "Keep track of inventory within your business",
      color: "#F9A362",
    },

    {
      title: "Assets Management",
      icon: <FaCreditCard />,
      description: "Manage your assets and calculate depreciation",
      color: "#F1A3DB",
    },
  ];
  return (
    <>
      <Flex
        sx={{
          paddingTop: "107px",
          columnGap: type?.toLowerCase() === "restaurant" ? "150px" : "150px",

          justifyContent: "center",

          rowGap: {
            base: "20px",
            md: "0px",
          },
          flexDirection: {
            md: type?.toLowerCase() === "restaurant" ? "row-reverse" : "row",
            base: "column",
          },
          padding: {
            base: "100px 30px 0px 30px",
            md: "107px 0px 0px 0px",
          },
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
                  width: {
                    base: "100%",
                    md:
                      type?.toLowerCase() !== "restaurant"
                        ? "541.43px"
                        : "600px",
                  },
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
                Billing, Invoicing, Inventory, Reporting made easy.
              </Text>
            </Box>

            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              rowGap={"68px"}
              sx={{
                placeItems: "center",
                rowGap: {
                  base: "25px",
                  md: "0px",
                },

                columnGap: {
                  base: "20px",
                },

                paddingTop: "32px",
                borderTop: "1px solid #F3F3F6",
                marginTop: "30px",
              }}
            >
              {type?.toLowerCase() === "restaurant"
                ? resData?.map((item) => (
                    <GridItem>
                      <PlatformCard
                        color={item?.color}
                        icon={item?.icon}
                        title={item?.title}
                        text={item?.description}
                      />
                    </GridItem>
                  ))
                : accountingData?.map((item) => (
                    <GridItem>
                      <PlatformCard
                        color={item?.color}
                        icon={item?.icon}
                        title={item?.title}
                        text={item?.description}
                      />
                    </GridItem>
                  ))}
            </Grid>

            {/* <Flex
              sx={{
                width: "fit-content",

                rowGap: {
                  base: "20px",
                  md: "0px",
                },

                flexDirection: {
                  base: "row",
                  md: "row",
                },
                flexWrap: {
                  base: "wrap",
                  md: "nowrap",
                },
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
            </Flex> */}

            <Link href={type === "Accounting" ? "/accounting" : "/restaurant"}>
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
            </Link>
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

const PlatformCard = ({ color, icon, title, text }) => {
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
            // textWrap: "no-wrap",
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
          {text}
        </Text>
      </Box>
    </Box>
  );
};
