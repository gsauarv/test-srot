import { Flex, Grid, GridItem, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CommonWrapper from "../common/CommonWrapper";
import BlogCard from "./BlogCard";

const BlogLandingSection = () => {
  const blogs_data = [
    {
      id: 1,
      title: "The Rise of JavaScript Frameworks",
      author: "Jane Doe",
      content:
        "JavaScript frameworks have become an integral part of web development. They provide powerful tools and libraries to create dynamic and responsive web applications...",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      author: "John Smith",
      content:
        "React Hooks were introduced in version 16.8 and have transformed the way we write React components. Hooks allow you to use state and other React features without writing a class...",
      date: "2024-02-10",
    },
    {
      id: 3,
      title: "A Guide to CSS Grid",
      author: "Alice Johnson",
      content:
        "CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create complex layouts more easily compared to older methods like floats and flexbox...",
      date: "2024-03-05",
    },
    {
      id: 4,
      title: "Tips for Optimizing Web Performance",
      author: "Bob Brown",
      content:
        "Web performance optimization is crucial for providing a good user experience. This blog covers various techniques such as lazy loading, code splitting, and using efficient image formats...",
      date: "2024-04-20",
    },
    {
      id: 5,
      title: "An Introduction to TypeScript",
      author: "Catherine Green",
      content:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static types, interfaces, and type inference, making it easier to write large and maintainable codebases...",
      date: "2024-05-18",
    },
  ];

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
          }}
        >
          Take your business to the next level with our cutting-edge.
        </Text>
      </Flex>

      <CommonWrapper type={"tight"}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          rowGap={"42px"}
          columnGap={"26px"}
          paddingBlock={"50px 0px"}
        >
          {blogs_data?.map(({ title, author, content, date, id }) => (
            <Link key={id} href={`blogs/${id}`}>
              <GridItem>
                <BlogCard
                  title={title}
                  author={author}
                  content={content}
                  date={date}
                />
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
