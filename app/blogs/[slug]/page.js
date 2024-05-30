import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const BlogDetailPage = () => {
  return (
    <>
      <Flex
        sx={{
          justifyContent: "center",
          marginBlock: "60px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "802px" }}>
          <Text
            sx={{
              color: "#3E399B",
              fontSize: "30px",
              fontWeight: 700,
              // textAlign: "center",
            }}
          >
            Noom sees an 8% increase in authorization rates with Dlex
          </Text>

          <Box
            sx={{
              width: "100%",
              height: "430px",
              position: "relative",
              marginTop: "18px",
            }}
          >
            <Image
              src={"https://picsum.photos/1200/1200"}
              fill
              objectFit="cover"
            />
          </Box>

          <Flex
            sx={{ paddingTop: "23px", columnGap: "12px", alignItems: "center" }}
          >
            <Avatar
              src="https://picsum.photos/600/600"
              sx={{ width: "46px", height: "46px" }}
            />
            <Box>
              <Text
                sx={{ fontSize: "14px", fontWeight: 700, color: "#121127" }}
              >
                Srot admin
              </Text>
              <Text
                sx={{ fontSize: "12px", fontWeight: 400, color: "#1211278F" }}
              >
                2024-04-23 · 6 min read
              </Text>
            </Box>
          </Flex>

          <Box sx={{ paddingTop: "26px" }}>
            <Text
              sx={{
                color: "#383751",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "34.02px",
              }}
            >
              Believe it or not, copywriting is one of the most important
              content-creation skills a designer can possess. If you think about
              it, design exists to support and deliver content—not the other way
              around. As a designer, content should be the driving force behind
              many of your decisions, whether you re creating the content or
              someone else is. So if you can understand how to write effective
              copy (and understand the purpose that it serves), youll be able to
              better serve your clients and ultimately create better designs. In
              this article, we ll cover some helpful copywriting tips for
              designers to help you build better experiences.
            </Text>
          </Box>

          <Box sx={{ paddingTop: "26px" }}>
            <Text
              sx={{
                color: "#383751",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "34.02px",
              }}
            >
              Believe it or not, copywriting is one of the most important
              content-creation skills a designer can possess. If you think about
              it, design exists to support and deliver content—not the other way
              around. As a designer, content should be the driving force behind
              many of your decisions, whether you re creating the content or
              someone else is. So if you can understand how to write effective
              copy (and understand the purpose that it serves), youll be able to
              better serve your clients and ultimately create better designs. In
              this article, we ll cover some helpful copywriting tips for
              designers to help you build better experiences.
            </Text>
          </Box>

          <Box sx={{ paddingTop: "26px" }}>
            <Text
              sx={{
                color: "#383751",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "34.02px",
              }}
            >
              Believe it or not, copywriting is one of the most important
              content-creation skills a designer can possess. If you think about
              it, design exists to support and deliver content—not the other way
              around. As a designer, content should be the driving force behind
              many of your decisions, whether you re creating the content or
              someone else is. So if you can understand how to write effective
              copy (and understand the purpose that it serves), youll be able to
              better serve your clients and ultimately create better designs. In
              this article, we ll cover some helpful copywriting tips for
              designers to help you build better experiences.
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default BlogDetailPage;