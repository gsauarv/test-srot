import CommonLayout from "@/components/common/CommonLayout";
import "./globals.css";

export const metadata = {
  title: "SROT",
  description: "The app for srot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
