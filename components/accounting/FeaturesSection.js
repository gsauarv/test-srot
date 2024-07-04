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

const FeaturesSection = ({ isRestaurantPage }) => {
  const accounting_feature_data = [
    {
      title: "Invoicing",
      description: "Create and manage invoices quickly and accurately.",
      icon: Invoicing,
      color: "#F56D0C",
    },

    {
      title: "Purchase Bills",
      description:
        "Easily record and track all purchase bills.",
      icon: Bank,
      color: "#4C7CE5",
    },
    {
      title: "Expenses",
      description:
        "Track and manage all business expenses efficiently.",
      icon: Expenses,
      color: "#10B981",
    },
    {
      title: "VAT & TDS",
      description:
        "Automate VAT and TDS calculations for hassle-free compliance.",
      icon: Gst,
      color: "#EF4444",
    },
    {
      title: "Inventory Traching",
      description:
        "Keep tabs on your stock in real-time and also add multiple warehouses",
      icon: Bank,
      color: "#8B5CF6",
    },
    {
      title: "Excise and Custom Duty",
      description:
        "Manage excise and customs duties with ease.",
      icon: Receipts,
      color: "#EC4899",
    },
    {
      title: "Cheque Management",
      description:
        "Simplify cheque tracking and management.",
      icon: Gst,
      color: "#3B9B2B",
    },
    {
      title: "Documents Numbering",
      description:
        "Automatically number your documents for easy organization.",
      icon: Insights,
      color: "#49A68A",
    },
    {
      title: "Custom Fields",
      description:
        " Add custom fields to add specific data for your invoice and bills",
      icon: Receipts,
      color: "#FEB527",
    },
  ];

  const res_feature_data = [
    {
      title: "Ordering & Billing",
      description: "We bring expertise and ingenuity to every project.",
      icon: Invoicing,
      color: "#F56D0C",
    },

    {
      title: "KOT/BOT Management",
      description:
        "We adhere to the highest standards of quality in every aspect of our work.",
      icon: Bank,
      color: "#4C7CE5",
    },
    {
      title: "Multiple Users & Roles",
      description:
        "We prioritize clear communication, transparency, and collaboration.",
      icon: Expenses,
      color: "#10B981",
    },
    {
      title: "Menu Management",
      description:
        "We leverage cutting-edge technologies and sustainable practices.",
      icon: Gst,
      color: "#EF4444",
    },
    {
      title: "Inventory Tracking",
      description:
        "We understand the importance of deadlines. With meticulous planning.",
      icon: Bank,
      color: "#8B5CF6",
    },
    {
      title: "Day Book Entry",
      description:
        "Our pricing is transparent and competitive. We strive to eliminate hidden costs.",
      icon: Receipts,
      color: "#EC4899",
    },
    {
      title: "Track Cashier Session",
      description:
        "We leverage cutting-edge technologies and sustainable practices.",
      icon: Gst,
      color: "#3B9B2B",
    },
    {
      title: "Easy Account Integration",
      description:
        "We understand the importance of deadlines. With meticulous planning.",
      icon: Insights,
      color: "#49A68A",
    },
    {
      title: "Manage Delivery Partners",
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
          <Box
            sx={{
              width: {
                base: "100%",
                md: "471px",
              },
            }}
          >
            <SectionTitle
              title={
                isRestaurantPage
                  ? "What else can you get in srot Resaturant"
                  : "What Else Can You Get In Srot Accounting"
              }
            />
          </Box>
        </Flex>

        <CommonWrapper type={"tight"}>
          <Box sx={{ paddingBlock: "80px 0px" }}>
            <Flex justifyContent={"center"}>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                rowGap={"68px"}
                sx={{ placeItems: "center" }}
              >
                {isRestaurantPage
                  ? res_feature_data?.map(
                      ({ description, title, icon, color }) => (
                        <GridItem>
                          <FeatureCards
                            icon={icon}
                            title={title}
                            description={description}
                            color={color}
                          />
                        </GridItem>
                      )
                    )
                  : accounting_feature_data?.map(
                      ({ description, title, icon, color }) => (
                        <GridItem>
                          <FeatureCards
                            icon={icon}
                            title={title}
                            description={description}
                            color={color}
                          />
                        </GridItem>
                      )
                    )}
              </Grid>
            </Flex>
          </Box>
        </CommonWrapper>

        {/* <Flex sx={{ justifyContent: "center" }}>
          <SeeMoreButton title="See all Features" />
        </Flex> */}
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
