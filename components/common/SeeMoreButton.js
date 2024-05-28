import { Button } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const SeeMoreButton = ({ title = "See more" }) => {
  return (
    <>
      <Button
        rightIcon={<FiArrowRight />}
        sx={{
          color: "#496AD0",
          fontSize: "15px",
          fontWeight: 500,
          marginTop: "44px",
          width: "150px",
          height: "40px",
          borderRadius: "4px",
          border: "1.2px solid #E5E5EB",
        }}
        variant={"outline"}
      >
        {title}
      </Button>
    </>
  );
};

export default SeeMoreButton;
