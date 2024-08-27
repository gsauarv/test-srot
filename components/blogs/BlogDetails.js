"use client";
import CommonWrapper from "@/components/common/CommonWrapper";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { urlFor } from "./BlogCard";

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).fit("max").auto("format")}
        />
      );
    },
  },
};
const BlogDetails = ({ blogDetails }) => {
  const router = useRouter();
  const { title, featured_image, content } = blogDetails?.[0];

  return (
    <div>
      <>
        <Box
          sx={{
            backgroundColor: "#F6F6F8",
            height: "441px",
            position: "absolute",
            width: "100%",
            top: 0,
            zIndex: -1,
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: {
              base: 20,
              md: 160,
            },
          }}
        >
          <CommonWrapper>
            <IconButton
              onClick={() => {
                router.back();
              }}
              sx={{
                minW: "23px",
                maxW: "23px",

                minH: "23px",
                maxH: "23px",
                borderRadius: "100%",
                border: "1px solid #6C6B80",
                backgroundColor: "transparent",
                // marginTop: "71px",
                // display: {
                //   base: "none",
                //   md: "block",
                // },
              }}
              icon={<ArrowBackIcon sx={{ fontSize: "14px" }} />}
            ></IconButton>
          </CommonWrapper>
        </Box>
        <Flex
          sx={{
            justifyContent: "center",
            marginBlock: "60px",
            flexDirection: "column",
            alignItems: "center",
            padding: {
              base: "0px 25px",
              md: "0px",
            },
          }}
        >
          <Box
            sx={{
              width: {
                base: "100%",
                md: "802px",
              },
            }}
          >
            <Text
              sx={{
                color: "#3E399B",
                fontSize: "30px",
                fontWeight: 700,
                // textAlign: "center",
              }}
            >
              {title}
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
                src={urlFor(featured_image)?.url()}
                fill
                objectFit="cover"
              />
            </Box>

            <Flex
              sx={{
                paddingTop: "23px",
                columnGap: "12px",
                alignItems: "center",
              }}
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

            <PortableText value={content} components={ptComponents} />
            {/* 
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
                content-creation skills a designer can possess. If you think
                about it, design exists to support and deliver content—not the
                other way around. As a designer, content should be the driving
                force behind many of your decisions, whether you re creating the
                content or someone else is. So if you can understand how to
                write effective copy (and understand the purpose that it
                serves), youll be able to better serve your clients and
                ultimately create better designs. In this article, we ll cover
                some helpful copywriting tips for designers to help you build
                better experiences.
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
                content-creation skills a designer can possess. If you think
                about it, design exists to support and deliver content—not the
                other way around. As a designer, content should be the driving
                force behind many of your decisions, whether you re creating the
                content or someone else is. So if you can understand how to
                write effective copy (and understand the purpose that it
                serves), youll be able to better serve your clients and
                ultimately create better designs. In this article, we ll cover
                some helpful copywriting tips for designers to help you build
                better experiences.
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
                content-creation skills a designer can possess. If you think
                about it, design exists to support and deliver content—not the
                other way around. As a designer, content should be the driving
                force behind many of your decisions, whether you re creating the
                content or someone else is. So if you can understand how to
                write effective copy (and understand the purpose that it
                serves), youll be able to better serve your clients and
                ultimately create better designs. In this article, we ll cover
                some helpful copywriting tips for designers to help you build
                better experiences.
              </Text>
            </Box> */}
          </Box>
        </Flex>
      </>
    </div>
  );
};

export default BlogDetails;
