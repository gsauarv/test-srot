"use client";

import { Search2Icon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import CommonWrapper from "../common/CommonWrapper";

const SingleHelp = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F6F6F8",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "30dvh",
        }}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          sx={{ paddingBlock: "100px" }}
        >
          <Text sx={{ fontSize: "32px", color: "#3E399B", fontWeight: 600 }}>
            Resources and Support
          </Text>
          <Flex sx={{ paddingTop: "20px" }}>
            <InputGroup sx={{ height: "52px" }}>
              <InputLeftElement pointerEvents="none" sx={{ height: "100%" }}>
                <Search2Icon color="#9D9CAF" />
              </InputLeftElement>
              <Input
                sx={{
                  width: {
                    base: "380px",
                    md: "536px",
                  },
                  boxShadow: "0px 4px 24px 0px #2348C91A",
                  height: "100%",
                  borderRadius: "4px",
                  border: "none",
                  // marginTop: "32px",

                  _placeholder: {
                    color: "#9D9CAF",
                    fontSize: "15px",
                    fontWeight: 500,
                  },
                }}
                placeholder="Search your keyword here"
              />
            </InputGroup>
          </Flex>
        </Flex>
      </Box>

      <CommonWrapper>
        <Box sx={{ marginTop: "200px" }}>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <HelpSideBar />
            </GridItem>
          </Grid>
        </Box>
      </CommonWrapper>
    </>
  );
};

export default SingleHelp;

const HelpSideBar = () => {
  return (
    <>
      <Box sx={{ padding: "54px 0px" }}>
        <Accordion allowToggle>
          <AccordionItem sx={{ border: "none" }}>
            <h2>
              <AccordionButton
                sx={{
                  display: "flex",
                  alignItems: "start",
                  padding: "0px",
                  _hover: {
                    backgroundColor: "none",
                    color: "#4559BD",
                  },
                }}
              >
                <FaCaretDown size={18} style={{ margin: "2px" }} />
                <Box flex="1" textAlign="left">
                  <Text
                    sx={{
                      fontSize: "16px",

                      fontWeight: "600",
                    }}
                  >
                    Create your item
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex sx={{ flexDirection: "column", rowGap: "10px" }}>
                <AccordionSubItem active />
                <AccordionSubItem />
                <AccordionSubItem />
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

const AccordionSubItem = ({ active }) => {
  return (
    <Flex sx={{ padding: "0px" }} columnGap={"5px"}>
      <Text
        sx={{
          fontSize: "14px",
          color: active ? "#4559BD" : "#6C6B80",
          fontWeight: active ? 700 : 600,
        }}
      >
        1.
      </Text>
      <Text
        sx={{
          fontSize: "14px",
          color: active ? "#4559BD" : "#6C6B80",
          fontWeight: active ? 700 : 600,
        }}
      >
        The More Important the Work, the More Important the Rest
      </Text>
    </Flex>
  );
};
