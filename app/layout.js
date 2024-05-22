import "./globals.css";

export const metadata = {
  title: "SROT",
  description: "The app for srot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="../public/Frame.png" sizes="any" />
      </head> */}

      <body>{children}</body>
    </html>
  );
}
