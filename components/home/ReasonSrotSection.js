import { Box, Text } from "@chakra-ui/react";
import CommonWrapper from "../common/CommonWrapper";

const ReasonSrot = () => {
  return (
    <Box
      as="section"
      sx={{
        marginTop: {
          base: "100px",
          md: "30px",
        },
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
          {/* There are more than 10,000 reasons why srot */}
        </Text>

        <Box></Box>
      </CommonWrapper>
    </Box>
  );
};

export default ReasonSrot;
