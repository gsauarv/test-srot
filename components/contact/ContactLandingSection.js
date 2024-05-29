"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoMdCall, IoMdMail } from "react-icons/io";
import CommonWrapper from "../common/CommonWrapper";

const ContactLandingSection = () => {
  const contact_data = [
    { title: "Sales Details" },
    { title: "Support Details" },
    { title: "Address" },
  ];
  return (
    <>
      <Flex sx={{ justifyContent: "center", paddingTop: "60px" }}>
        <Text
          sx={{
            color: "#3E399B",
            fontSize: "46px",
            fontWeight: 700,
            width: "683px",
            textAlign: "center",
            lineHeight: "60px",
          }}
        >
          Let&apos;s build something awesome for your startup
        </Text>
      </Flex>

      <Box sx={{ paddingBlock: "51px" }}>
        <CommonWrapper type={"tight"}>
          <Flex justifyContent={"center"} columnGap={"24px"}>
            {contact_data?.map(({ title }, index) => (
              <ContactCard title={title} key={index} />
            ))}
          </Flex>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default ContactLandingSection;

const ContactCard = ({ title }) => {
  return (
    <>
      <Box
        sx={{
          width: "327px",
          backgroundColor: "#F6F6F8",
          padding: "29px 28px",
          borderRadius: "16px",
        }}
      >
        <Text sx={{ fontSize: "16px", fontWeight: 700, color: "#4559BD" }}>
          {title}
        </Text>

        <Flex sx={{ paddingTop: "21px", flexDir: "column", rowGap: "15px" }}>
          <ContactItem icon={<IoMdMail />} text={"bill.sanders@example.com"} />
          <ContactItem icon={<IoMdCall />} text={"(+977) 98526374185"} />
        </Flex>
      </Box>
    </>
  );
};

const ContactItem = ({ icon, text }) => {
  return (
    <>
      <Flex
        sx={{
          alignItems: "center",
          columnGap: "10px",
          "& svg": {
            color: "#4559BD",
            fontSize: "20px",
          },
        }}
      >
        {icon}
        <Text sx={{ color: "#383751", fontSize: "16px", fontWeight: 500 }}>
          {text}
        </Text>
      </Flex>
    </>
  );
};
