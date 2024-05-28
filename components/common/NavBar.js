import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import CommonWrapper from "./CommonWrapper";

const NavBar = () => {
  return (
    <>
      <Box
        width={"100%"}
        padding={{ base: "10px 0px", md: "25px 0px" }}
        bg={"transparent"}
        position={"sticky"}
        top={0}
        zIndex={1}
      >
        <CommonWrapper>
          <Flex align={"center"} justifyContent={"space-between"}>
            <Flex align={"center"} columnGap={"54px"}>
              <Box>
                <Link href={"/"}>
                  <Image src={Logo} />
                </Link>
              </Box>

              <Flex
                display={{ base: "none", md: "flex" }}
                align={"center"}
                columnGap={"36px"}
              >
                <NavLink label={"Accounting"} to="/accounting" />
                <NavLink label={"Restaurant"} />
                <NavLink label={"Pricing"} />
                <NavLink label={"Help"} />
                <NavLink label={"Contact us"} />
              </Flex>
            </Flex>

            <Flex display={{ base: "none", md: "flex" }}>
              <Button variant={"text"}>Sign in</Button>
              <Button
                backgroundColor={"brand.primary"}
                _hover={{
                  backgroundColor: "brand.hover",
                }}
                color={"white"}
                fontSize={"15px"}
                fontWeight={600}
              >
                Get Started
              </Button>
            </Flex>

            <Box display={{ base: "block", md: "none" }}>
              <IconButton
                backgroundColor={"white"}
                border={"1px solid"}
                borderColor={"brand.primary"}
                width={"35px"}
                height={"35px"}
              >
                <HamburgerIcon color={"brand.primary"} fontSize={"18px"} />
              </IconButton>
            </Box>
          </Flex>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default NavBar;

const NavLink = ({ label, to = "" }) => {
  return (
    <>
      <Link href={to}>
        <Text
          color={"#4C4B63"}
          fontSize={"14px"}
          fontWeight={"500"}
          cursor={"pointer"}
        >
          {label}
        </Text>
      </Link>
    </>
  );
};
