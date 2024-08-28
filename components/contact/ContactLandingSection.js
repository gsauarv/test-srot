"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoIosMap, IoMdCall, IoMdMail } from "react-icons/io";
import CommonWrapper from "../common/CommonWrapper";

const ContactLandingSection = () => {
  const contact_data = [
    {
      title: "Sales Details",
      details: [
        { value: "sales@srotcloud.com", icon: <IoMdMail /> },
        { value: "(+977) 9802304368", icon: <IoMdCall /> },
      ],
    },
    {
      title: "Support Details",
      details: [
        { value: "support@srotcloud.com", icon: <IoMdMail /> },
        { value: "(+977) 9841587582", icon: <IoMdCall /> },
      ],
    },
    {
      title: "Address",
      details: [{ value: "Kalikasthan , Kathmandu", icon: <IoIosMap /> }],
    },
  ];
  return (
    <>
      <Flex sx={{ justifyContent: "center", paddingTop: "60px" }}>
        <Text
          sx={{
            color: "#3E399B",
            fontSize: {
              base: "24px",
              lg: "46px",
            },
            fontWeight: 700,
            width: {
              base: "400px",
              lg: "683px",
            },
            textAlign: "center",
            lineHeight: { base: "normal", lg: "60px" },
          }}
        >
          Let&apos;s build something awesome for your startup
        </Text>
      </Flex>

      <Box sx={{ paddingBlock: "51px" }}>
        <CommonWrapper type={"tight"}>
          <Flex
            sx={{
              flexDirection: {
                base: "column",
                md: "row",
              },

              alignItems: {
                base: "center",
              },
            }}
            justifyContent={"center"}
            columnGap={"24px"}
            rowGap={{
              base: "10px",
              md: "0px",
            }}
          >
            {contact_data?.map(({ title, details }, index) => (
              <ContactCard title={title} key={index} details={details} />
            ))}
          </Flex>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default ContactLandingSection;

const ContactCard = ({ title, details = [] }) => {
  return (
    <>
      <Box
        sx={{
          width: "327px",
          height: "170px",
          backgroundColor: "#F6F6F8",
          padding: "29px 28px",
          borderRadius: "16px",
        }}
      >
        <Text sx={{ fontSize: "16px", fontWeight: 700, color: "#4559BD" }}>
          {title}
        </Text>

        <Flex sx={{ paddingTop: "21px", flexDir: "column", rowGap: "15px" }}>
          {details?.map(({ value, icon }, index) => (
            <ContactItem icon={icon} text={value} key={index} />
          ))}
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
