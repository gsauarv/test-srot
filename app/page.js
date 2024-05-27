import BlogSection from "@/components/home/BlogSection";
import CustomerReview from "@/components/home/CustomerReview";
import LandingSection from "@/components/home/LandingSection";
import PlatformSection from "@/components/home/PlatformSection";
import ReasonSrot from "@/components/home/ReasonSrotSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ReasonSrot />
      <PlatformSection />
      <WhyChooseSection />
      <CustomerReview />
      <BlogSection />
    </>
  );
}
