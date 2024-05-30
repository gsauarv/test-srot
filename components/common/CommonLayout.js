"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { lazy } from "react";
import Footer from "./Footer";
// import NavBar from "./NavBar";

const NavBar = lazy(() => import("./NavBar"));

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#4C7CE5",
      hover: "#4D8CE5",
    },
  },

  breakpoints: {
    base: "0px",
    sm: "425px",
    md: "768px",
    lg: "1024px",
    xl: "1600px",
    "2xl": "1800px",
  },
});

const CommonLayout = ({ children }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <NavBar />
        {children}
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default CommonLayout;
