import { Flex, Grid, GridItem, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CommonWrapper from "../common/CommonWrapper";
import BlogCard from "./BlogCard";

const BlogLandingSection = ({ blogs }) => {
  return (
    <>
      <Flex
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "12px",
          paddingTop: "46px",
        }}
      >
        <Text sx={{ fontSize: "46px", fontWeight: 700, color: "#3E399B" }}>
          Our Blogs
        </Text>
        <Text
          sx={{
            color: "#6C6B80",
            fontSize: "16px",
            fontWeight: 400,
            textAlign: "center",
            width: {
              base: "300px",
              md: "100%",
            },
          }}
        >
          Take your business to the next level with our cutting-edge.
        </Text>
      </Flex>

      <CommonWrapper type={"tight"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          rowGap={"42px"}
          columnGap={"26px"}
          paddingBlock={"50px 0px"}
          placeItems={"center"}
        >
          {blogs?.map((item) => (
            <Link key={item?.id} href={`blogs/${item?.slug?.current}`}>
              <GridItem>
                <BlogCard item={item} />
              </GridItem>
            </Link>
          ))}
        </Grid>

        <Flex
          sx={{
            justifyContent: "center",
            paddingBlock: "76px",
            columnGap: "10px",
          }}
        >
          <IconButton
            icon={
              <FaChevronLeft style={{ fontSize: "10px", color: "#C4CDD5" }} />
            }
            sx={{
              maxWidth: "32px",
              minH: "32px",
              minW: "32px",
              maxH: "32px",
              backgroundColor: "#919EAB",
              padding: "0px",
              margin: "0px",
            }}
          ></IconButton>

          <Flex alignItems={"center"} columnGap={"5px"}>
            {[...Array(5)]?.map((item, index) => (
              <IconButton
                sx={{
                  maxWidth: "32px",
                  minH: "32px",
                  minW: "32px",
                  maxH: "32px",
                  // backgroundColor: "#919EAB",
                  padding: "0px",
                  margin: "0px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DFE3E8",
                }}
              >
                <Text sx={{ color: "#000", fontSize: "14px", fontWeight: 700 }}>
                  {index + 1}
                </Text>
              </IconButton>
            ))}
          </Flex>

          <IconButton
            icon={
              <FaChevronRight
                style={{ fontSize: "10px", color: "#48484890" }}
              />
            }
            sx={{
              maxWidth: "32px",
              minH: "32px",
              minW: "32px",
              maxH: "32px",
              backgroundColor: "#FFFFFF",

              padding: "0px",
              margin: "0px",
              border: "1px solid #DFE3E8",
            }}
          ></IconButton>
        </Flex>
      </CommonWrapper>
    </>
  );
};

export default BlogLandingSection;
