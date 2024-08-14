import Document from "@/public/document.svg";
import ExploreAcc from "@/public/exploreacc.svg";
import Inventory from "@/public/inventory.svg";

import MoreAccountingImage from "@/public/moreaccounting.svg";
import MoreRestaurantImage from "@/public/morerestaurant.svg";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import CommonWrapper from "../common/CommonWrapper";
import SectionTitle from "../common/SectionTitle";

const ExploreMore = ({ isRestaurantPage = false }) => {
  const accounting_card_data = [
    {
      title: "Accounting",
      description:
        "Simplify cash flow, revenue, balance sheet, and profit/loss",
      image: ExploreAcc,
    },

    {
      title: "Inventory Tracking",
      description:
        "Keep track of inventory within your business (FIFO/Weighted)",
      image: Inventory,
    },

    {
      title: "Documents",
      description:
        "Keep all the documents related to the bills and reports with our adequate storage",
      image: Document,
    },
    {
      title: "Insightful Reports",
      description:
        "Get 100+ Reports like Balance Sheet, Income Statement, Cashflow and so on.",
      image: Document,
    },
    {
      title: "Assets Management",
      description:
        "Manage your assets and calculate customizable depreciation ",
      image: Document,
    },
    {
      title: "Payroll Management",
      description:
        "Manage your Employees data and calculate payroll with Deduction and Taxes",
      image: Document,
    },
  ];

  const res_card_data = [
    {
      title: "Table Management",
      description: "Manage tables and floors properly for your restaurant.",
      image: ExploreAcc,
    },

    {
      title: "100% Leakage Control",
      description:
        "Track all your inventories and manage cash sales efficiently.",
      image: Inventory,
    },

    {
      title: "Real Time Analytics",
      description:
        "Analyze sales, orders, and credit in real time for quick decision-making.",
      image: Document,
    },
    {
      title: "50+ Insightful Reports",
      description:
        "Access over 50 comprehensive reports on sales, inventory, and credits.",
      image: Document,
    },
    {
      title: "Multiple Outlet Billing",
      description: "Manage multiple outlets seamlessly on a single platform.",
      image: Document,
    },
    {
      title: "Record Customer Credit",
      description: "Effortlessly record all customer transactions and credits.",
      image: Document,
    },
  ];
  return (
    <>
      <Flex
        justifyContent={"center"}
        sx={{
          mt: {
            base: "40px",
            md: "0px",
          },
        }}
      >
        <Box
          sx={{
            width: {
              base: "100%",
              md: "471.98px",
            },
            textAlign: "center",
          }}
        >
          <SectionTitle
            title={
              isRestaurantPage
                ? "Some feature about SROT Restaurant"
                : "Explore More About Accounting"
            }
          />
        </Box>
      </Flex>

      <CommonWrapper>
        <Flex
          justifyContent={"center"}
          columnGap={"24px"}
          paddingBlock={"46px"}
          sx={{
            flexDirection: {
              base: "column",
              md: "row",
            },

            alignItems: {
              base: "center",
              md: "flex-end",
            },
          }}
        >
          <Flex
            flexDirection={"column"}
            rowGap={"24px"}
            sx={{ paddingTop: "36px" }}
          >
            {isRestaurantPage
              ? res_card_data
                  ?.slice(0, 3)
                  ?.map(({ title, description, image }) => (
                    <ExploreMoreCard
                      title={title}
                      description={description}
                      image={image}
                    />
                  ))
              : accounting_card_data
                  ?.slice(0, 3)
                  ?.map(({ title, description, image }) => (
                    <ExploreMoreCard
                      title={title}
                      description={description}
                      image={image}
                    />
                  ))}
          </Flex>

          <Box
            sx={{
              width: "300px",
              height: "550px",
              position: "relative",
              marginTop: {
                base: "40px",
                md: "0px",
              },
            }}
          >
            <Image
              src={isRestaurantPage ? MoreRestaurantImage : MoreAccountingImage}
              fill
            />
          </Box>

          <Flex
            flexDirection={"column"}
            rowGap={"24px"}
            sx={{
              paddingTop: "36px",
            }}
          >
            {isRestaurantPage
              ? res_card_data
                  ?.slice(3)
                  ?.map(({ title, description, image }) => (
                    <ExploreMoreCard
                      title={title}
                      description={description}
                      image={image}
                    />
                  ))
              : accounting_card_data
                  ?.slice(3)
                  ?.map(({ title, description, image }) => (
                    <ExploreMoreCard
                      title={title}
                      description={description}
                      image={image}
                    />
                  ))}
          </Flex>
        </Flex>
      </CommonWrapper>
    </>
  );
};

export default ExploreMore;

const ExploreMoreCard = ({ title, description, image }) => {
  return (
    <>
      <Box
        sx={{
          width: {
            base: "100%",
            md: "424px",
          },
          minHeight: "137px",
          backgroundColor: "#F8FAFC",
          borderRadius: "14px",
          padding: "31px 21px",
        }}
      >
        <Flex alignItems={"center"} columnGap={"20px"}>
          <Image src={image} width={43} height={43} />

          <Box sx={{ width: "313px" }}>
            <Text sx={{ fontSize: "18px", fontWeight: 700, color: "#2019A2" }}>
              {title}
            </Text>

            <Text
              sx={{
                color: "#6C6B80",
                fontSize: "14px",
                fontWeight: 500,
                paddingTop: "10px",
                height: "66px",
              }}
            >
              {description}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
