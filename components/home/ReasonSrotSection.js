import { Box, Flex, Grid, GridItem, IconButton, Text } from "@chakra-ui/react";
import { FaRegFile } from "react-icons/fa6";
import { FiGitPullRequest, FiPieChart } from "react-icons/fi";
import { HiOutlineDocumentReport, HiOutlineTrendingUp } from "react-icons/hi";
import CommonWrapper from "../common/CommonWrapper";

const ReasonSrot = () => {
  return (
    <>
      <Box
        as="section"
        paddingTop={{
          base: "20px",
          md: "180px",
        }}
      >
        <CommonWrapper>
          <Text
            sx={{
              fontSize: {
                base: "20px",
              },
              fontWeight: "600",
              color: "#121127",
              textAlign: "center",
            }}
          >
            There are more than 10,000 reasons why srot
          </Text>

          <Flex align={"center"} justifyContent={"center"}>
            <Grid
              templateColumns="repeat(5, 1fr)"
              placeItems={"center"}
              sx={{
                marginTop: "40px",
                width: "1005px",
              }}
            >
              <GridItem>
                <ReasonCard
                  color={"#71AAFF"}
                  icon={<FaRegFile />}
                  text="Easy Create & Invoicing"
                />
              </GridItem>

              <GridItem>
                <ReasonCard
                  color={"#FF9371"}
                  icon={<FiPieChart />}
                  text="Get Powerful Analytics"
                />
              </GridItem>

              <GridItem>
                <ReasonCard
                  color={"#F9A362"}
                  icon={<HiOutlineTrendingUp />}
                  text="Easy To Analyze Your Data"
                />
              </GridItem>

              <GridItem>
                <ReasonCard
                  color={"#4EDEA2"}
                  icon={<FiGitPullRequest />}
                  text="Easy Converse With Your Data"
                />
              </GridItem>

              <GridItem>
                <ReasonCard
                  color={"#F1A3DB"}
                  icon={<HiOutlineDocumentReport />}
                  text="Edit and View Your Reports"
                />
              </GridItem>
            </Grid>
          </Flex>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default ReasonSrot;

const ReasonCard = ({ color, icon, text }) => {
  return (
    <>
      <Flex
        align={"center"}
        flexDirection={"column"}
        sx={{ width: "161.83px" }}
      >
        <IconButton
          icon={icon}
          sx={{
            width: "46px",
            height: "46px",
            backgroundColor: color,

            "& svg": {
              color: "#fff",
              fontSize: "20px",
              fontWeight: 800,
            },
          }}
        ></IconButton>
        <Text
          sx={{
            width: "161.83px",
            fontSize: "15px",
            fontWeight: 600,
            color: "#383751",
            textAlign: "center",
            paddingTop: "16px",
          }}
        >
          {text}
        </Text>
      </Flex>
    </>
  );
};
