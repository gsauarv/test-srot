import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import CommonWrapper from "../common/CommonWrapper";
import SectionTitle from "../common/SectionTitle";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <>
      <Flex sx={{ padding: "69px 0px" }} justifyContent={"center"}>
        <CommonWrapper type={"tight"}>
          <Flex
            flexDir={"column"}
            rowGap={"16px"}
            align={"center"}
            justifyContent={"center"}
          >
            <SectionTitle
              title={"Our blog"}
              subtitle={
                "Take your business to the next level with our cutting-edge."
              }
            />
          </Flex>

          <Box sx={{ paddingTop: "43px" }}>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {[...Array(3)]?.map((item) => (
                <GridItem>
                  <BlogCard />
                </GridItem>
              ))}
            </Grid>
          </Box>

          <Flex align={"center"} justifyContent={"center"}>
            <Link href={"/blogs"}>
              <Button
                rightIcon={<FiArrowRight />}
                sx={{
                  color: "#496AD0",
                  fontSize: "15px",
                  fontWeight: 500,
                  marginTop: "50px",
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
          </Flex>
        </CommonWrapper>
      </Flex>
    </>
  );
};

export default BlogSection;
