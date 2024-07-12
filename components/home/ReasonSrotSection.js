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
          base: "40px",
          md: "50px",
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
            More reasons to use Srot:
          </Text>

          <Flex
            align={"center"}
            justifyContent={"center"}
            sx={{ width: "100%" }}
          >
            <Grid
              autoColumns
              autoFlow={"row"}
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(5, 1fr)",
              }}
              placeItems={"center"}
              sx={{
                marginTop: "40px",
                width: {
                  base: "100%",
                  md: "1005px",
                },
                rowGap: "25px",
                justifyContent: "center",
                alignItems: "center",
                // placeContent: "center",
                // placeItems: "center",
              }}
            >
              <GridItem>
                <ReasonCard
                  color={"#71AAFF"}
                  icon={<FaRegFile />}
                  text="Quick Create Bills & Invoices"
                />
              </GridItem>

              <GridItem>
                <ReasonCard
                  color={"#FF9371"}
                  icon={<FiPieChart />}
                  text="Get 100+ Reports & Analytics"
                />
              </GridItem>

              <GridItem>
                <ReasonCard
                  color={"#F9A362"}
                  icon={<HiOutlineTrendingUp />}
                  text="Easy To Navigate Dashboard"
                />
              </GridItem>

              <GridItem>
                <ReasonCard
                  color={"#4EDEA2"}
                  icon={<FiGitPullRequest />}
                  text="Easy to Access From Any Device"
                />
              </GridItem>

              <GridItem
                colSpan={{
                  base: 2,
                  md: "auto",
                }}
              >
                <ReasonCard
                  color={"#F1A3DB"}
                  icon={<HiOutlineDocumentReport />}
                  text="Data Protection & Cloud Backup"
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
    <Box>
      <Flex
        align={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        sx={{
          width: {
            base: "150px",
            md: "161.83px",
          },
        }}
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
            width: {
              base: "100%",
              md: "161.83px",
            },
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
    </Box>
  );
};
