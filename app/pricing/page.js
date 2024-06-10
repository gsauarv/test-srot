import AppBanner from "@/components/accounting/AppBanner";
import PricingLandingSection from "@/components/pricing/PricingLandingSection";
import { Box } from "@chakra-ui/react";

const PricingPage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#f6f6f8" }}>
        <PricingLandingSection />
        <AppBanner />
      </Box>
    </>
  );
};

export default PricingPage;
