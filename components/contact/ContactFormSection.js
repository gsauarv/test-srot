import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import CommonWrapper from "../common/CommonWrapper";

const ContactFormSection = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F6F6F8", padding: "86px 0px" }}>
        <CommonWrapper>
          <Flex
            alignItems={"center"}
            columnGap={"42px"}
            justifyContent={"center"}
            sx={{
              flexDirection: {
                base: "column",
                md: "row",
              },
            }}
          >
            <Box
              sx={{
                width: { base: "100%", md: "474px" },
                backgroundColor: "#FFFFFF",
                minHeight: "648px",
                borderRadius: "6px",
                padding: {
                  base: "30px 25px",
                  md: "49px 51px",
                },
                boxShadow: "0px 4px 24px 0px #2348C91A",
              }}
            >
              <Text
                sx={{
                  fontSize: {
                    base: "24px",
                    md: "26px",
                  },
                  fontWeight: 700,
                  color: "#4559BD",
                }}
              >
                Submit a request
              </Text>
              <form>
                <Flex
                  sx={{
                    paddingTop: "48px",
                    rowGap: "30px",
                    flexDir: "column",
                  }}
                >
                  <FormInput
                    label={"Full Name"}
                    placeholder="Name"
                    name={"full_name"}
                  />
                  <FormInput
                    label={"Email address"}
                    placeholder="Email Address"
                    name={"email_address"}
                  />
                  <FormInput
                    label={"Phone Number"}
                    placeholder="Phone Number"
                    name={"phone_number"}
                  />
                  <FormTextArea
                    label={"Leave us a message"}
                    placeholder="Ask us something"
                    name={"message"}
                  />
                </Flex>

                <Button
                  sx={{
                    width: "100%",
                    height: "52px",
                    backgroundColor: "#4C7CE5",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 600,
                    borderRadius: "4px",
                    marginTop: "35px",
                  }}
                  _hover={{
                    backgroundColor: "brand.hover",
                  }}
                >
                  Submit Message
                </Button>
              </form>
            </Box>

            <Box
              sx={{
                width: { base: "100%", md: "502px" },
                minHeight: "649px",
                border: "6px solid #fff",
                borderRadius: "6px",
                marginTop: {
                  base: "40px",
                  md: "0px",
                },
              }}
            >
              <iframe
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                style={{
                  //   height: "100%",
                  minHeight: "649px",
                }}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Scodus%20In[…]ons)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </Box>
          </Flex>
        </CommonWrapper>
      </Box>
    </>
  );
};

export default ContactFormSection;

const FormTextArea = ({ label, placeholder, name }) => {
  return (
    <>
      <Box>
        <FormLabel
          htmlFor={name}
          sx={{ color: "#383751", fontSize: "16px", fontWeight: 700 }}
        >
          {label}
        </FormLabel>

        <Textarea
          placeholder={placeholder}
          rows={5}
          _placeholder={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#6C6B80",
          }}
          id={name}
          sx={{
            width: "100%",
            // height: "52px",
            borderRadius: "4px",
            backgroundColor: "#F3F3F6",
          }}
        />

        {/* <Textarea placeholder="Here is a sample placeholder" /> */}
      </Box>
    </>
  );
};

const FormInput = ({ label, placeholder, name }) => {
  return (
    <Box>
      <FormLabel
        htmlFor={name}
        sx={{ color: "#383751", fontSize: "16px", fontWeight: 700 }}
      >
        {label}
      </FormLabel>

      <Input
        placeholder={placeholder}
        _placeholder={{
          fontSize: "14px",
          fontWeight: 500,
          color: "#6C6B80",
        }}
        id={name}
        sx={{
          width: "100%",
          height: "52px",
          borderRadius: "4px",
          backgroundColor: "#F3F3F6",
        }}
      />
    </Box>
  );
};
