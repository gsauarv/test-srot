"use client";
import CommonWrapper from "@/components/common/CommonWrapper";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    try {
      const fileUrl = "/SrotHospitality.msi";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "SrotHospitality.msi"; // Optional: specify the file name for the download
      link.click();
    } finally {
      router.back();
    }
  }, []);

  return <CommonWrapper>Downloading file...</CommonWrapper>;
};

export default page;
