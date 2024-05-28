import Bank from "@/public/bank.svg";
import Expenses from "@/public/expenses.svg";
import Gst from "@/public/gst.svg";
import Insights from "@/public/insights.svg";
import Invoicing from "@/public/invoicing.svg";
import Receipts from "@/public/receipts.svg";

import { Box, Flex, Grid, GridItem, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import CommonWrapper from "../common/CommonWrapper";
import SectionTitle from "../common/SectionTitle";
import SeeMoreButton from "../common/SeeMoreButton";

const FeaturesSection = () => {
  const feature_data = [
    {
      title: "Invoicing",
      description: "We bring expertise and ingenuity to every project.",
      icon: Invoicing,
      color: "#F56D0C",
    },

    {
      title: "Bank Feeds",
      description:
        "We adhere to the highest standards of quality in every aspect of our work.",
      icon: Bank,
      color: "#4C7CE5",
    },
    {
      title: "Expenses",
      description:
        "We prioritize clear communication, transparency, and collaboration.",
      icon: Expenses,
      color: "#10B981",
    },
    {
      title: "GST & VAT",
      description:
        "We leverage cutting-edge technologies and sustainable practices.",
      icon: Gst,
      color: "#EF4444",
    },
    {
      title: "Inventory",
      description:
        "We understand the importance of deadlines. With meticulous planning.",
      icon: Bank,
      color: "#8B5CF6",
    },
    {
      title: "Capture & organize receipts",
      description:
        "Our pricing is transparent and competitive. We strive to eliminate hidden costs.",
      icon: Receipts,
      color: "#EC4899",
    },
    {
      title: "Mobile App",
      description:
        "We leverage cutting-edge technologies and sustainable practices.",
      icon: Gst,
      color: "#3B9B2B",
    },
    {
      title: "Insights and reports",
      description:
        "We understand the importance of deadlines. With meticulous planning.",
      icon: Insights,
      color: "#49A68A",
    },
    {
      title: "Security",
      description:
        "Our pricing is transparent and competitive. We strive to eliminate hidden costs.",
      icon: Receipts,
      color: "#FEB527",
    },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FCFCFC",
          padding: "61px 0px",
          margin: "69px 0px",
        }}
      >
        <Flex sx={{ textAlign: "center" }} justifyContent={"center"}>
          <Box sx={{ width: "471px" }}>
            <SectionTitle title={"What Else Can You Get In Srot Accounting"} />
          </Box>
        </Flex>

        <CommonWrapper type={"tight"}>
          <Box sx={{ paddingBlock: "80px 0px" }}>
            <Grid templateColumns="repeat(3, 1fr)" rowGap={"68px"}>
              {feature_data?.map(({ description, title, icon, color }) => (
                <GridItem>
                  <FeatureCards
                    icon={icon}
                    title={title}
                    description={description}
                    color={color}
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>
        </CommonWrapper>

        <Flex sx={{ justifyContent: "center" }}>
          <SeeMoreButton title="See all Features" />
        </Flex>
      </Box>
    </>
  );
};

export default FeaturesSection;

const FeatureCards = ({ title, icon, description, color }) => {
  return (
    <>
      <Flex sx={{ alignItems: "flex-start", columnGap: "24px" }}>
        <IconButton
          icon={<Image src={icon} />}
          sx={{
            width: "49px",
            height: "49px",
            backgroundColor: color,
            borderRadius: "100%",
          }}
        />

        <Box>
          <Text sx={{ fontSize: "20px", fontWeight: 700, color: "#383751" }}>
            {title}
          </Text>

          <Text
            sx={{
              width: "240.08px",
              fontSize: "14px",
              color: "#6C6B80",
              paddingTop: "11px",
            }}
          >
            {description}
          </Text>
        </Box>
      </Flex>
    </>
  );
};
