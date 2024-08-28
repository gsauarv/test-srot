import { Text } from "@chakra-ui/react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <Text
        sx={{
          fontSize: {
            base: "24px",
            md: "38px",
          },
          color: "#181380",
          lineHeight: {
            base: "34px",
            md: "45px",
          },
          fontWeight: 700,
        }}
      >
        {title}
      </Text>

      {subtitle && (
        <Text sx={{ fontSize: "16px", fontWeight: 400, color: "#6C6B80" }}>
          {subtitle}
        </Text>
      )}
    </>
  );
};

export default SectionTitle;
