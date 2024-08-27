"use client";
import CommonWrapper from "@/components/common/CommonWrapper";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
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
          style={{ margin: "25px 0px" }}
        />
      );
    },
  },
};
const BlogDetails = ({ blogDetails }) => {
  const router = useRouter();

  if (!blogDetails || blogDetails.length === 0) {
    return <div>No blog details found.</div>;
  }

  const { title, featured_image, content } = blogDetails[0];

  return (
    <article>
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
              style={{ objectFit: "cover" }}
              alt={title}
            />
          </Box>

          {/* <Flex
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
          </Flex> */}

          <Box
            sx={{
              padding: "26px 0px",
              "& h1": {
                fontSize: "18px !important",
                fontWeight: "800 !important",
                mb: "25px",
              },

              "& a": {
                fontSize: "14px !important",
                fontWeight: "800 !important",
                mb: "25px",
                color: "#4C7CE5",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
              "& h2": {
                fontSize: "16px !important",
                fontWeight: "700 !important",
                mb: "25px",
              },
              "& h3": {
                fontSize: "16px !important",
                fontWeight: "600 !important",
                mb: "25px",
              },
              "& h4": {
                fontSize: "16px !important",
                fontWeight: "500 !important",
                mb: "25px",
              },
              "& h5": {
                fontSize: "16px !important",
                fontWeight: "500 !important",
                mb: "25px",
              },
              "& h6": {
                fontSize: "15px !important",
                fontWeight: "500 !important",
                mb: "25px",
              },
              "& blockquote": {
                borderLeft: "3px solid #48484860",
                padding: "5px 10px",
                fontSize: "15px !important",
                fontStyle: "italic",
                mb: "25px",
              },
              "& p": {
                fontSize: "15px !important",
                fontWeight: "500 !important",
                mb: "25px",
                whiteSpace: "pre-wrap", // This will preserve line breaks and white space.
              },
            }}
          >
            <PortableText value={content} components={ptComponents} />
          </Box>
        </Box>
      </Flex>
    </article>
  );
};

export default BlogDetails;
