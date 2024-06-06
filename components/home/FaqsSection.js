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
      question: "What is the purpose of this product?",
      answer:
        "This product is designed to help users efficiently manage their tasks and improve productivity through a variety of tools and features.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button on the homepage, fill out the required information, and follow the instructions to verify your email address.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you are not satisfied with the product within the first 30 days, you can request a full refund by contacting our support team.",
    },
    {
      question: "Can I use the product on multiple devices?",
      answer:
        "Yes, our product is accessible on multiple devices including smartphones, tablets, and computers. Simply log in with your account credentials to access your data from any device.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, we offer a mobile app for both iOS and Android devices. You can download the app from the App Store or Google Play Store.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page, enter your registered email address, and follow the instructions sent to your email to reset your password.",
    },
    {
      question: "What kind of customer support do you offer?",
      answer:
        "We offer 24/7 customer support through various channels including email, live chat, and phone. Our support team is always ready to assist you with any queries or issues.",
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
    <Box sx={{ paddingBlock: "35px" }}>
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
