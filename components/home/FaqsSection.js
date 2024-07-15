import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import CommonWrapper from "../common/CommonWrapper";
import SectionTitle from "../common/SectionTitle";

const FaqsSection = () => {
  const datas = [
    {
      question: "What is a cloud based accounting/restaurant software?",
      answer:
        "Online Accounting Systems, sometimes called cloud-based solutions, allows you to create, store, and send Bills and Invoices from any device. With SROT, you can get into your browser or mobile application, sign in and use it. All data are stored in the cloud and can be accessible from any place with the help of an internet connection. Your data are saved securely in the cloud and can be accessed anytime.",
    },
    {
      question: "How long will the installation take for SROT?",
      answer:
        "The good thing about a cloud-based system is that there is no installation. Just get into your device's web browser and register from our website. We will activate your account within 10 minutes and start using SROT. It is applicable for both accounting and restaurant.      ",
    },
    {
      question: "I am not from accounting background, Can I use SROT?",
      answer:
        "Obviously! SROT started to solve the same issue. Even if you don't have a basic understanding of accounting or do not have accountants in your office, the software was programmed keeping in mind that anyone can get a hold of it.      ",
    },
    {
      question: "Can I use my software in multiple devices?",
      answer:
        "Yes, SROT is accessible on mobiles, tablets, and computers. Sign in with your account credentials to access your data from any device.",
    },
    {
      question: "Is there a mobile app of SROT available?",
      answer:
        "Yes, we offer a mobile app for both iOS and Android devices. You can download the app from the App Store or Google Play Store.",
    },
    {
      question: "Is there a trial period and how can I signup for it?",
      answer:
        "Yes! We do offer a trial period. Currently, we provide 1 Month (30 Days) of Free Trial Period.",
    },
    {
      question: "How long will it take to switch to SROT from other softwares?",
      answer:
        "We will be able to switch within a day. Our representative will be there to help you for the whole day to help you shift from other software to SROT.",
    },
    // {
    //   question: "Are there any tutorials or user guides available?",
    //   answer:
    //     "Yes, we provide a comprehensive set of tutorials and user guides available on our website under the 'Help' section. These resources cover a wide range of topics to help you get the most out of our product.",
    // },
    // {
    //   question: "Is my data secure?",
    //   answer:
    //     "We prioritize data security and implement industry-standard encryption protocols to ensure your data is safe and secure. Regular security audits and updates are performed to maintain the highest level of protection.",
    // },
    // {
    //   question: "Can I customize the features of the product?",
    //   answer:
    //     "Yes, our product offers a high level of customization. You can tailor the features and settings to suit your personal preferences and workflow requirements.",
    // },
  ];

  return (
    <Box sx={{ paddingBlock: "35px", paddingBottom: "55px" }}>
      <Flex sx={{ justifyContent: "center", textAlign: "center" }}>
        <SectionTitle title={"Frequently asked question"} />
      </Flex>
      <CommonWrapper type={"tight"}>
        <Box sx={{ paddingTop: "56px" }}>
          <Accordion
            allowToggle
            sx={{
              _focus: {
                backgroundColor: "#fff",
              },
            }}
          >
            {datas?.map(({ question, answer }, index) => (
              <AccordionItemRow
                question={question}
                answer={answer}
                key={index}
              />
            ))}
          </Accordion>
        </Box>
      </CommonWrapper>
    </Box>
  );
};

export default FaqsSection;

const AccordionItemRow = ({ question, answer }) => {
  return (
    <>
      <AccordionItem
        allowToggle
        sx={{
          borderTop: "none",
          borderBottom: "1px solid #1211271F",

          _focus: {
            backgroundColor: "#fff",
          },
        }}
      >
        <AccordionButton
          sx={{
            padding: "25px 5px",
            _hover: {
              backgroundColor: "#F3F3F380",
            },
            _focus: {
              backgroundColor: "#fff",
            },
          }}
        >
          <Box as="span" flex="1" textAlign="left">
            <Text
              sx={{
                color: "#121127",
                fontsize: "16px",
                fontWeight: 700,
              }}
            >
              {question}
            </Text>
          </Box>
          <AccordionIcon style={{ fontSize: "26px" }} />
        </AccordionButton>

        <AccordionPanel sx={{ padding: "10px 0px" }}>
          <Text sx={{ color: "#1211278F", fontSize: "15px", fontWeight: 400 }}>
            {answer}
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};
