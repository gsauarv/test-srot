import AccountingImage1 from "@/public/accounting1.svg";
import AccountingImage2 from "@/public/accounting2.svg";

import Res1 from "@/public/res1.svg";
import Res2 from "@/public/res2.svg";

import AppStoreImage from "@/public/appstore.svg";
import PlaystoreImage from "@/public/googleplay.png";

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import CommonWrapper from "../common/CommonWrapper";

const AppBanner = ({ isRestaurantPage = false }) => {
  return (
    <>
      <Box
        style={{
          background: isRestaurantPage ? "#F7EFE5" : "#edf3ff",

          height: "320px",
          width: "100%",
          // marginBlock: "20px",

          //   backgroundColor: "red",
        }}
      >
        <CommonWrapper>
          <Flex
            align={"center"}
            justifyContent={"center"}
            sx={{
              overflow: "hidden",
              h: "320px",
              position: "relative",
              w: "100%",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                bottom: 0,
                display: {
                  base: "none",
                  md: "block",
                },
              }}
            >
              <Image
                src={isRestaurantPage ? Res2 : AccountingImage1}
                // height={320}
                // layout="responsive"
                quality={100}
                width={isRestaurantPage ? 200 : 400}
                // height={400}
              />
            </Box>

            <Box sx={{ width: "641.88px" }}>
              <Text
                sx={{
                  textAlign: "center",
                  fontSize: {
                    base: "30px",
                    md: "38px",
                  },
                  color: "#181380",
                  fontWeight: 700,
                }}
              >
                Get started with srot today
              </Text>

              <Text
                style={{
                  textAlign: "center",
                  padding: "16px 0px",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "27px",
                  color: "#6C6B80",
                }}
              >
                Cloud-based accounting offers strong security features, such as
                data encryption, controlled access, & consistent backups.
              </Text>

              <Flex align={"center"} justifyContent={"center"}>
                <Image src={PlaystoreImage} height={44} width={180} />
                <Image src={AppStoreImage} height={"44px"} width={160} />
              </Flex>
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: 0,
                bottom: 0,
                display: {
                  base: "none",
                  md: "block",
                },
              }}
            >
              <Image
                src={isRestaurantPage ? Res1 : AccountingImage2}
                width={isRestaurantPage ? 250 : 310}
                quality={100}
              />
            </Box>
          </Flex>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default AppBanner;
