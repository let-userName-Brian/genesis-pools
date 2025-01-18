import { Box, Typography } from "@mui/material";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CPO from "../icons/cpo";
import BBB from "../icons/bbb";

const AdditionalInfo: React.FC = () => {
  const infoItems = [
    {
      icon: <CPO />,
      title: "CPO Certified",
      description: "Certified Pool Operator with professional expertise",
    },
    {
      icon: <LocalPoliceIcon sx={{ fontSize: "8rem", paddingTop: "1rem" }} />,
      title: "Service Discounts",
      description:
        "10% off for military, law enforcement, healthcare, and education professionals",
    },
    {
      icon: <Diversity1Icon sx={{ fontSize: "8rem", paddingTop: "1rem" }} />,
      title: "Family Owned",
      description: "Local, family-owned business serving our community",
    },
    {
      icon: <BBB />,
      title: "BBB Accredited",
      description: "Accredited by the Better Business Bureau",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        padding: "4rem 0",
        backgroundColor: "#F3F3F3",
        borderRadius: "2.813rem",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {infoItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
              padding: "2rem",
              backgroundColor: "white",
              borderRadius: "2.813rem",
              boxShadow: "1px 4px 1px rgba(0, 0, 0, 0.9)",
              gap: "1rem",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Box sx={{ borderRadius: "2rem", overflow: "hidden" }}>
              {item.icon}
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  fontFamily: "inherit",
                  color: "#000000",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  color: "#666666",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AdditionalInfo;
