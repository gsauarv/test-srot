"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "./NavBar";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#4C7CE5",
      hover: "#4D8CE5",
    },
  },
});

const CommonLayout = ({ children }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <NavBar />
        {children}
      </ChakraProvider>
    </>
  );
};

export default CommonLayout;
