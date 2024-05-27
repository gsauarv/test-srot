import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import CommonWrapper from "../common/CommonWrapper";
import SectionTitle from "../common/SectionTitle";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <>
      <Box sx={{ padding: "69px 0px" }}>
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
          </Flex>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default BlogSection;
