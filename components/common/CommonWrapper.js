import { Box } from "@chakra-ui/react";

const CommonWrapper = ({ children }) => {
  return (
    <>
      <Box
        padding={{
          base: "0px 20px",
          md: "0px 50px",
          lg: "0px 117px",
          // xl: "0px 200px",
        }}
        margin={"0 auto"}
      >
        {children}
      </Box>
    </>
  );
};

export default CommonWrapper;
