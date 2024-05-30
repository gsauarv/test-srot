"use client";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../../public/logo.svg";
import CommonWrapper from "./CommonWrapper";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window]);

  return (
    <>
      <Box
        width={"100%"}
        padding={{
          base: "10px 0px",
          md: navBackground ? "15px 0px" : "25px 0px",
        }}
        bg={navBackground ? "#FFFFFF" : "transparent"}
        position={"sticky"}
        top={0}
        zIndex={1}
        boxShadow={navBackground && "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"}
        transition={"0.4s all ease-in-out"}
        // backdropFilter={navBackground && "blur(50px)"}
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
                <NavLink label={"Pricing"} to="/pricing" />
                <NavLink label={"Blogs"} to="/blogs" />
                <NavLink label={"Help"} to="/help" />
                <NavLink label={"Contact us"} to="/contact" />
              </Flex>
            </Flex>

            <Flex display={{ base: "none", md: "flex" }}>
              {/* <Button variant={"text"}>Sign in</Button> */}
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
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <>
      <Link href={to}>
        <Text
          color={pathname === to ? "#4559BD" : "#4C4B63"}
          fontSize={"14px"}
          fontWeight={pathname === to ? 700 : "500"}
          cursor={"pointer"}
        >
          {label}
        </Text>
      </Link>
    </>
  );
};
