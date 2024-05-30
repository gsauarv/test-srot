import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const BlogCard = ({ title, author, content, date }) => {
  return (
    <>
      <Box
        sx={{
          width: "344px",
          minH: "503px",
          boxShadow: "0px 20px 50px 0px #12112714",
          borderRadius: "12px",
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
      >
        <Box sx={{ width: "100%", height: "201px", position: "relative" }}>
          <Image src={"https://picsum.photos/600/600"} fill />
        </Box>

        <Box sx={{ padding: "32px 24px 16px 24px" }}>
          <Text
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#121127",
              lineHeight: "25.2px",
              height: "50px",
            }}
          >
            {title}
          </Text>

          <Text
            sx={{
              color: "#1211278F",
              fontWeight: 400,
              fontSize: "14px",
              paddingTop: "24px",
              height: "110px",
            }}
          >
            {content}
          </Text>

          <Flex
            sx={{ paddingTop: "41px", columnGap: "12px", alignItems: "center" }}
          >
            <Avatar
              src="https://picsum.photos/600/600"
              sx={{ width: "48px", height: "48px" }}
            />
            <Box>
              <Text
                sx={{ fontSize: "14px", fontWeight: 700, color: "#121127" }}
              >
                {author}
              </Text>
              <Text
                sx={{ fontSize: "12px", fontWeight: 400, color: "#1211278F" }}
              >
                {date} · 6 min read
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default BlogCard;