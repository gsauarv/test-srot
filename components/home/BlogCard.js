import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const BlogCard = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            base: "100%",
            md: "344px",
          },
          height: "503px",

          borderRadius: "12px",
          overflow: "hidden",
          transition: "0.3s all ease-in-out",
        }}
        _hover={{
          boxShadow: "0px 20px 50px 0px #12112714",
          cursor: "pointer",
        }}
      >
        <Box sx={{ width: "100%", height: "201px", position: "relative" }}>
          <Image src={"https://picsum.photos/600/600"} fill objectFit="cover" />
        </Box>

        <Box sx={{ padding: "32px 24px 16px 24px" }}>
          <Text
            sx={{
              color: "#121127",
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: 700,
            }}
          >
            Guide for designing better mobile apps typography
          </Text>

          <Text
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#1211278F",
              paddingTop: "24px",
            }}
          >
            In this article, I won&apos;t talk about the general concepts of
            typography, which can be used both in print...
          </Text>

          <Flex
            sx={{ paddingTop: "41px", alignItems: "center", columnGap: "12px" }}
          >
            <Avatar
              src="https://picsum.photos/600/600"
              sx={{ width: "48px", height: "48px" }}
            />

            <Box>
              <Text
                sx={{ color: "#121127", fontSize: "14px", fontWeight: 700 }}
              >
                Courtney Henry
              </Text>

              <Text
                sx={{ fontSize: "12px", fontWeight: 400, color: "#1211278F" }}
              >
                Jun 27, 2020 · 6 min read
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default BlogCard;
