"use client";
import { Box, Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
import PackageSection from "../accounting/PackageSection";
import CommonWrapper from "../common/CommonWrapper";

const PricingLandingSection = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabs = (index) => {
    setSelectedTab(index);
  };
  return (
    <>
      <Box
        sx={{
          paddingTop: "67px",
        }}
        className="bg"
      >
        <Text
          sx={{
            color: "#3E399B",
            fontSize: {
              base: "40px",
              md: "46px",
            },
            fontWeight: 700,
            textAlign: "center",
            lineHeight: {
              base: "45px",
              md: "normal",
            },
          }}
        >
          Flexible Pricing Options
        </Text>

        <Flex
          sx={{
            justifyContent: "center",
            paddingTop: {
              base: "15px",
              md: "8px",
            },
          }}
        >
          <Text
            sx={{
              textAlign: "center",
              width: {
                base: "350px",
                md: "554px",
              },
              fontWeight: 300,
              fontSize: "15px",
              color: "#6C6B80",
            }}
          >
            Pricing Plans Designed to Fit Your Business, from Startup to
            Enterprise
          </Text>
        </Flex>

        <Flex
          sx={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "100px",
          }}
        >
          <Tabs variant="unstyled" onChange={handleTabs}>
            <TabList
              sx={{
                backgroundColor: "#F6F6F8",
                padding: "7px 8px",
                borderRadius: "4px",
                columnGap: "16px",
              }}
            >
              <Tab
                sx={{
                  color: "#6C6B80",
                  width: "fit-content",
                  height: "37px",
                  borderRadius: "4px",

                  fontSize: "15px",
                  fontWeight: 600,
                }}
                _selected={{
                  backgroundColor: "#4C7CE5",
                  color: "#fff",
                }}
              >
                Accounting
              </Tab>
              <Tab
                sx={{
                  color: "#6C6B80",
                  width: "fit-content",
                  height: "37px",
                  borderRadius: "4px",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
                _selected={{
                  backgroundColor: "#4C7CE5",
                  color: "#fff",
                }}
              >
                Restaurant
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Box>
      <CommonWrapper>
        <Box>
          <Text
            sx={{
              fontWeight: 700,
              color: "#2019A2",
              fontSize: "26px",
              fontWeight: 700,
              textAlign: "center",
              paddingTop: "40px",
            }}
          >
            {selectedTab === 0
              ? " Accounting Pricing"
              : selectedTab === 1
              ? "Restaurant Pricing"
              : "Retail Pricing"}
          </Text>

          <Flex
            sx={{
              justifyContent: "center",
              paddingTop: "10px",
              flexDir: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "4px",
                textAlign: "center",
                backgroundColor: "#2019A2",
                borderRadius: "4px",
              }}
            />
            <Box sx={{ paddingTop: "40px", paddingBottom: "88px" }}>
              <PackageSection
                title={false}
                isRestaurantPage={selectedTab === 1}
              />
            </Box>
          </Flex>
        </Box>
      </CommonWrapper>
    </>
  );
};

export default PricingLandingSection;
