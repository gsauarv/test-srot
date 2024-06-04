"use client";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "../../public/logo.svg";
import ResLogo from "../../public/reslogo.svg";

import CommonWrapper from "./CommonWrapper";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const pathname = usePathname();

  console.log({ pathname });

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

  const NAV_CONTS = [
    {
      label: "Accounting",
      href: "/accounting",
    },

    {
      label: "Restaurant",
      href: "/restaurant",
    },

    {
      label: "Pricing",
      href: "/pricing",
    },

    {
      label: "Help",
      href: "/help",
    },

    {
      label: "Contact us",
      href: "/contact",
    },
  ];

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
                  <Image
                    src={pathname === "/restaurant" ? ResLogo : Logo}
                    width={80}
                    height={80}
                  />
                </Link>
              </Box>

              <Flex
                display={{ base: "none", md: "flex" }}
                align={"center"}
                columnGap={"36px"}
              >
                {NAV_CONTS?.map(({ label, href }, index) => (
                  <NavLink label={label} to={href} key={index} />
                ))}
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
              <HamburgerIcon
                color={"#436BC6"}
                fontSize={"30px"}
                onClick={onOpen}
                ref={btnRef}
                sx={{ cursor: "pointer" }}
              />
            </Box>
          </Flex>
        </CommonWrapper>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
        sx={{ height: "100dvh" }}
      >
        <DrawerOverlay />
        <DrawerContent sx={{ width: "100dvw", height: "100dvh" }}>
          <DrawerCloseButton sx={{ fontSize: "16px" }} />
          <DrawerHeader>
            <Flex>
              <Link href={"/"}>
                <Image src={Logo} />
              </Link>
            </Flex>
          </DrawerHeader>

          <DrawerBody sx={{ width: "100dvw", paddingTop: "40px" }}>
            <Flex sx={{ flexDirection: "column", rowGap: "24px" }}>
              {NAV_CONTS?.map(({ label, href }, index) => (
                <NavLink
                  type={"mobile"}
                  label={label}
                  to={href}
                  key={index}
                  onClose={onClose}
                />
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              sx={{
                width: "100%",
                backgroundColor: "brand.primary",
                height: "50px",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Get Started
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;

const NavLink = ({ label, to = "", type, onClose = () => {} }) => {
  const pathname = usePathname();
  return (
    <>
      <Link href={to} onClick={onClose}>
        <Text
          color={pathname === to ? "#4559BD" : "#4C4B63"}
          fontSize={type === "mobile" ? "18px" : "14px"}
          fontWeight={pathname === to ? 700 : "500"}
          cursor={"pointer"}
        >
          {label}
        </Text>
      </Link>
    </>
  );
};
