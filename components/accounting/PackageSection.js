import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BsFillSendFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { FaBuilding, FaIdCardClip } from "react-icons/fa6";
import { MdClear, MdOutlineCheck } from "react-icons/md";
import SectionTitle from "../common/SectionTitle";

const PackageSection = ({ title = true, isRestaurantPage }) => {
  const accountingData = [
    {
      name: "Standard",
      subtitle: "For new startups & service based",
      price: "15,000",
      items: [
        { title: "Unlimited User", included: true },
        { title: "5GB Storage", included: true },
        { title: "Double-entry book keeping", included: true },
        { title: "Track Sales, Purchase, Returns, Voids", included: true },
        { title: "Documents & Files Manager", included: true },
        { title: "Add Unlimited Services", included: true },
        { title: "Assets and Depriciation Management", included: true },
        { title: "Transactions limit 10,000/year", included: true },
        { title: "Free Remote Training & Support", included: true },
        { title: "Inventory Management & Tracking", included: false },
        { title: "Warehouse Management", included: false },
        { title: "Payroll Management", included: false },
        {
          title: "Landing Cost Calculation (Excise Duty, Customs, etc.)",
          included: false,
        },
      ],
      icon: <BsFillSendFill />,
    },

    {
      name: "Premium",
      subtitle: "For enterprise and trading based",
      price: "30,000",
      isRecommended: true,
      items: [
        { title: "Unlimited User", included: true },
        { title: "15GB Storage", included: true },
        { title: "Double-entry book keeping", included: true },
        { title: "Track Sales, Purchase, Returns, Voids", included: true },
        { title: "Documents & Files Manager", included: true },
        { title: "Add Unlimited Services", included: true },
        { title: "Assets and Depriciation Management", included: true },
        { title: "Transactions limit 30,000/year", included: true },
        {
          title: "Free Remote/Office Training & Remote Support",
          included: true,
        },
        { title: "Inventory Management & Tracking", included: true },
        { title: "Warehouse Management", included: true },
        { title: "Payroll Management", included: true },
        {
          title: "Landing Cost Calculation (Excise Duty, Customs, etc.)",
          included: true,
        },
      ],
      icon: <FaIdCardClip />,
    },

    {
      name: "Enterprise",
      subtitle: "For enterprise with premium addons",
      price: "",
      // items: [
      //   { title: "Invoicing & Payment", included: false },
      //   { title: "Invoicing & Payment", included: true },
      // ],

      enterprise_description: [
        "Enterprise grade security",
        "Scalability and priority support",
        "Contact us if any further enquiries",
      ],
      icon: <FaBuilding />,
    },
  ];

  const resData = [
    {
      name: "Standard",
      subtitle: "For small restaurants and cafe",
      price: "15,000",
      items: [
        { title: "Unlimited Storage", included: true },
        { title: "Upto 5 Users", included: true },
        { title: "Table Management", included: true },
        { title: "Real Time Analytics", included: true },
        { title: "50+ Insightful Reports", included: true },
        { title: "Multiple Outlet Billings", included: true },
        { title: "Record Customer Credit", included: true },
        { title: "Manage Delivery Partners", included: true },
        { title: "Leakage Control & Inventory Tracking", included: false },
      ],

      otc: "30,000",
      icon: <BsFillSendFill />,
    },

    {
      name: "Premium",
      subtitle: "For large restaurants and cafe",
      price: "20,000",
      isRecommended: true,
      items: [
        { title: "Unlimited Storage", included: true },
        { title: "Unlimited User", included: true },
        { title: "Table Management", included: true },
        { title: "Real Time Analytics", included: true },
        { title: "50+ Insightful Reports", included: true },
        { title: "Multiple Outlet Billings", included: true },
        { title: "Record Customer Credit", included: true },
        { title: "Manage Delivery Partners", included: true },
        { title: "Leakage Control & Inventory Tracking", included: true },
      ],
      otc: "40,000",
      icon: <FaIdCardClip />,
    },

    {
      name: "Premium Plus",
      subtitle: "For large restaurants",
      price: "30,000",
      deducted_price: "35,000",

      items: [
        {
          title: "Includes all features of premium accounting.",
          included: true,
        },
        {
          title: "Includes all features of premium restaurant.",
          included: true,
        },
        {
          title:
            "Seamless integration with restaurant management and accounting systems.",
          included: true,
        },
      ],
      otc: "50,000",
      icon: <FaCrown />,
    },
  ];
  return (
    <>
      <Flex
        sx={{
          justifyContent: "center",
          paddingBlock: {
            base: title && "0px",
            md: title && "45px",
          },

          // paddingBottom: "100px",
        }}
      >
        {title && (
          <Box
            sx={{
              width: {
                base: "400px",
                md: "471.98px",
              },
              textAlign: "center",
            }}
          >
            <SectionTitle title={"Our Suitable Package For Your Need"} />
            <Text
              sx={{
                fontSize: "15px",
                paddingTop: "16px",
                color: "#6C6B80",
                fontWeight: 300,
              }}
            >
              Choose a plan tailored to your need.
            </Text>
          </Box>
        )}
      </Flex>

      <Flex
        justifyContent={"center"}
        alignItems={{ base: "center", md: "start" }}
        columnGap={"32px"}
        paddingBlock={{
          base: title ? "10px" : "0px",
          md: title ? "40px" : "0px",
        }}
        sx={{
          flexDirection: {
            base: "column",
            md: "row",
          },
          rowGap: {
            base: "32px",
            md: "0px",
          },
        }}
      >
        {isRestaurantPage
          ? resData?.map((item) => (
              <PackageCard
                title={title}
                label={item?.name}
                description={item?.subtitle}
                icon={item?.icon}
                isRestaurantPage={isRestaurantPage}
                price={item?.price}
                included={item?.items}
                enterprise_description={item?.enterprise_description}
                isRecommended={item?.isRecommended}
                deducted_price={item?.deducted_price}
                otc={item?.otc}
              />
            ))
          : accountingData?.map((item) => (
              <PackageCard
                title={title}
                label={item?.name}
                description={item?.subtitle}
                icon={item?.icon}
                isRestaurantPage={isRestaurantPage}
                price={item?.price}
                isRecommended={item?.isRecommended}
                included={item?.items}
                enterprise_description={item?.enterprise_description}
                deducted_price={item?.deducted_price}
                otc={item?.otc}
              />
            ))}
      </Flex>
    </>
  );
};

export default PackageSection;

const PackageCard = ({
  isRecommended = false,
  title,
  isRestaurantPage,
  label,
  description,
  icon,
  price,
  included = [],
  enterprise_description,
  deducted_price,
  otc,
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: isRestaurantPage ? "#F8FAFC" : "#F8FAFC",
          width: "312px",
          minH: "518px",
          height: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          paddingBottom: isRecommended && "37px",
          paddingTop: !isRecommended && "46px",
          boxShadow: !title && "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          marginTop: !isRecommended && "46px",
        }}
      >
        {isRecommended && (
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              width: "100%",
              height: "46px",
              backgroundColor: isRestaurantPage ? "#FD8432" : "#38AEBA",
              marginBottom: "30px",
            }}
          >
            <Text
              sx={{
                fontSize: "16px",
                color: "#fff",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Recommended
            </Text>
          </Flex>
        )}
        <Box>
          <Flex
            justifyContent={"center"}
            sx={{
              flexDirection: "column",
              alignItems: "center",

              "& svg": {
                color: isRestaurantPage ? "#FD8432" : "#38AEBA",
                fontSize: "42px",
              },
            }}
          >
            {icon}

            <Text
              sx={{
                paddingTop: "20px",
                fontSize: "17px",
                fontWeight: 700,
                color: "#383751",
              }}
            >
              {label}
            </Text>

            <Text
              sx={{
                paddingTop: "5px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#6C6B80",
              }}
            >
              {description}
            </Text>

            {!enterprise_description && (
              <Box sx={{ paddingTop: "13px" }}>
                <Text
                  // as={"span"}
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#9D9CAF",
                    textAlign: "center",
                  }}
                >
                  Yearly Renewal@
                </Text>
                <Text
                  sx={{
                    fontSize: "26px",
                    fontWeight: 800,
                    color: isRestaurantPage ? "#FD8432" : "#496AD0",
                  }}
                >
                  Rs {price}{" "}
                </Text>

                {deducted_price && (
                  <Flex justify={"center"}>
                    <Text
                      sx={{
                        textAlign: "center",
                        textDecoration: "line-through",
                        fontSize: "16px",
                      }}
                    >
                      Rs {deducted_price}
                    </Text>

                    {/* <Text
                      as={"span"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#9D9CAF",
                      }}
                    >
                      /year
                    </Text> */}
                  </Flex>
                )}
              </Box>
            )}

            <Divider
              sx={{
                backgroundColor: "red",
                width: "120px",
                marginBlock: "20px",
              }}
            />
          </Flex>

          <Box sx={{ padding: "0px 46px" }}>
            {!enterprise_description && (
              <Text
                sx={{ color: "#201F37", fontSize: "14px", fontWeight: 700 }}
              >
                Included in package :
              </Text>
            )}

            {!enterprise_description ? (
              <Flex
                sx={{
                  flexDirection: "column",
                  rowGap: "12px",
                  paddingBlock: "16px 0px",
                }}
              >
                {included?.map((item) => (
                  <FeatureText
                    title={item?.title}
                    isIncluded={item?.included}
                  />
                ))}
              </Flex>
            ) : (
              enterprise_description?.map((item) => (
                <Text
                  sx={{
                    fontSize: "14px",
                    color: "#383751",
                    fontWeight: 500,
                    paddingBlock: "3px",
                    textAlign: "center",
                  }}
                >
                  {item}
                </Text>
              ))
            )}
            <Box>
              <Text
                sx={{
                  fontSize: "14px",
                  color: "#383751",
                  fontWeight: 500,
                  // paddingBlock: "3px",
                  marginTop: "20px",
                  fontWeight: "700",
                  // textAlign: "center",
                }}
              >
                {otc && `One Time Cost: Rs ${otc} (Includes first year cost) `}
              </Text>
            </Box>

            {enterprise_description ? (
              <>
                <Link href={"/contact"}>
                  <Button
                    sx={{
                      border: `2px solid ${
                        isRestaurantPage
                          ? "linear-gradient(280.48deg, #F31255 -238.37%, #FF9E2A 106.98%)"
                          : "#4E8AF4"
                      }`,
                      width: "100%",

                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#4E8AF4",
                      marginTop: "53px",
                      backgroundColor: "#FFF",

                      height: "42px",
                      marginBottom: "10px",

                      _hover: {
                        // backgroundColor: "brand.hover",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>

                <Link href={"/contact"}>
                  <Button
                    sx={{
                      background: isRestaurantPage
                        ? "linear-gradient(280.48deg, #F31255 -238.37%, #FF9E2A 106.98%)"
                        : "#4E8AF4",
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#fff",
                      // marginTop: "53px",
                      height: "42px",
                      marginBottom: "30px",

                      _hover: {
                        backgroundColor: "brand.hover",
                      },
                    }}
                  >
                    Get A Quote
                  </Button>
                </Link>
              </>
            ) : (
              <Link href={"/contact"}>
                <Button
                  sx={{
                    background: isRestaurantPage
                      ? "linear-gradient(280.48deg, #F31255 -238.37%, #FF9E2A 106.98%)"
                      : "#4E8AF4",
                    width: "100%",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#fff",
                    marginTop: "53px",
                    height: "42px",
                    marginBottom: "30px",

                    _hover: {
                      backgroundColor: "brand.hover",
                    },

                    _focus: {
                      background: isRestaurantPage
                        ? "linear-gradient(280.48deg, #F31255 -238.37%, #FF9E2A 106.98%)"
                        : "#4E8AF4",
                    },
                  }}
                >
                  Get Subscription
                </Button>
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

const FeatureText = ({ title, isIncluded = true }) => {
  return (
    <>
      <Flex
        sx={{
          alignItems: "start",
          columnGap: "8px",
        }}
      >
        <div className="min-w-[20px]">
          {isIncluded ? (
            <MdOutlineCheck style={{ color: "#22AD01", fontSize: "18px" }} />
          ) : (
            <MdClear style={{ color: "#FF0000", fontSize: "18px" }} />
          )}
        </div>
        <Text sx={{ fontSize: "14px", color: "#383751", fontWeight: 500 }}>
          {title}
        </Text>
      </Flex>
    </>
  );
};
