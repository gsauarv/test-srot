import { Box, Flex } from "@chakra-ui/react";
import SectionTitle from "../common/SectionTitle";

const FeaturesSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FCFCFC",
          padding: "61px 0px",
          margin: "69px 0px",
        }}
      >
        <Flex sx={{ textAlign: "center" }} justifyContent={"center"}>
          <Box sx={{ width: "471px" }}>
            <SectionTitle title={"What Else Can You Get In Srot Accounting"} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FeaturesSection;
