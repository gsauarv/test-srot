import AccountingLanding from "@/components/accounting/AccountingLanding";
import AppBanner from "@/components/accounting/AppBanner";
import ExploreMore from "@/components/accounting/ExploreMore";
import FeaturesSection from "@/components/accounting/FeaturesSection";
import PackageSection from "@/components/accounting/PackageSection";

const RestaurantPage = () => {
  return (
    <>
      <AccountingLanding isRestaurantPage={true} />
      <ExploreMore isRestaurantPage={true} />
      <FeaturesSection isRestaurantPage={true} />
      <PackageSection isRestaurantPage={true} />
      <AppBanner isRestaurantPage={true} />
    </>
  );
};

export default RestaurantPage;
