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
  const card_data = [
    {
      title: "Accounting",
      description: "Effortlessly record all your accounting transaction.",
      image: ExploreAcc,
    },

    {
      title: "Inventory",
      description:
        "Track all your inventory location,  transfer between warehouse and manage your services / products.",
      image: Inventory,
    },

    {
      title: "Documents",
      description: "Effortlessly record all your accounting transaction.",
      image: Document,
    },
    {
      title: "Reports",
      description: "Effortlessly record all your accounting transaction.",
      image: Document,
    },
    {
      title: "Productivity",
      description: "Effortlessly record all your accounting transaction.",
      image: Document,
    },
    {
      title: "Speedy Transaction",
      description: "Effortlessly record all your accounting transaction.",
      image: Document,
    },
  ];
  return (
    <>
      <Flex justifyContent={"center"}>
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
                ? "Some feature about Srot Restaurant"
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
            {card_data?.slice(0, 3)?.map(({ title, description, image }) => (
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
            {card_data?.slice(3)?.map(({ title, description, image }) => (
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
