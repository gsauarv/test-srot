import AccountingLanding from "@/components/accounting/AccountingLanding";
import AppBanner from "@/components/accounting/AppBanner";
import ExploreMore from "@/components/accounting/ExploreMore";
import FeaturesSection from "@/components/accounting/FeaturesSection";
import PackageSection from "@/components/accounting/PackageSection";

const AccountingPage = () => {
  return (
    <>
      <AccountingLanding />
      <ExploreMore />
      <FeaturesSection />
      <PackageSection />
      <AppBanner />
    </>
  );
};

export default AccountingPage;
