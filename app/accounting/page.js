import AccountingLanding from "@/components/accounting/AccountingLanding";
import AppBanner from "@/components/accounting/AppBanner";
import ExploreMore from "@/components/accounting/ExploreMore";
import FeaturesSection from "@/components/accounting/FeaturesSection";
import PackageSection from "@/components/accounting/PackageSection";
import { Box } from "@chakra-ui/react";

const AccountingPage = () => {
  return (
    <>
      <AccountingLanding />
      <ExploreMore />
      <FeaturesSection />
      <Box sx={{ paddingBottom: "20px" }}>
        <PackageSection />
      </Box>
      <AppBanner />
    </>
  );
};

export default AccountingPage;
