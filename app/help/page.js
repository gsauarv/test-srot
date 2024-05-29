import HelpLandingSection from "@/components/help/HelpLandingSection";
import FaqsSection from "@/components/home/FaqsSection";
import { Box } from "@chakra-ui/react";

const HelpPage = () => {
  return (
    <>
      <HelpLandingSection />
      <Box sx={{ paddingBlock: "100px" }}>
        <FaqsSection />
      </Box>
    </>
  );
};

export default HelpPage;
