import CommonLayout from "@/components/common/CommonLayout";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "SROT",
  description: "The app for srot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags can be added here */}
        <meta name="keywords" content="SROT, app, business" />
        <meta name="author" content="Himalayan Code Labs" />
      </head>
      <body>
        <CommonLayout>{children}</CommonLayout>

        <Script
          id="tawk-to"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/66c6d1bbea492f34bc08cde8/1i5sa6ht8';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NKRGCMSG');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKRGCMSG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
