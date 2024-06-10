import AppBanner from "@/components/accounting/AppBanner";
import BlogSection from "@/components/home/BlogSection";
import BrandCarasoul from "@/components/home/BrandCarasoul";
import CustomerReview from "@/components/home/CustomerReview";
import FaqsSection from "@/components/home/FaqsSection";
import LandingSection from "@/components/home/LandingSection";
import PlatformSection from "@/components/home/PlatformSection";
import ReasonSrot from "@/components/home/ReasonSrotSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ReasonSrot />
      <PlatformSection />
      <WhyChooseSection />
      <CustomerReview />
      <BlogSection />
      <BrandCarasoul />
      <FaqsSection />
      <AppBanner />
    </>
  );
}
