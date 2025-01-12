import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LearnMoreIcon from "../icons/learn-more-button";
import ChemistryIcon from "../icons/chemistry";
import RepairIcon from "../icons/repair";
import SeasonalIcon from "../icons/seasonal";
import RegMaintIcon from "../icons/reg-maint";
import { useState } from "react";

type Service = {
  title: string;
  image: React.FC<{
    stroke?: string;
    height?: string;
    width?: string;
  }>;
  imageStroke: string;
  description: string;
  bgColor: string;
  titleBgColor: string;
  learnMoreColor: string;
  learnMoreStroke: string;
  learnMoreFill: string;
  boxShadow: string;
};

const LearnMoreButton: React.FC<{
  service: Service;
}> = ({ service }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <IconButton sx={{ padding: 0 }}>
        <LearnMoreIcon
          stroke={service.learnMoreStroke}
          fill={service.learnMoreFill}
        />
      </IconButton>
      <Typography sx={{ color: service.learnMoreColor }}>Learn more</Typography>
    </Box>
  );
};

const ServiceImage: React.FC<{
  service: Service;
}> = ({ service }) => {
  return (
    <Box
      sx={{
        height: { xs: "13rem", sm: "15rem", md: "20rem" },
        maxHeight: "20rem",
        width: "100%",
      }}
    >
      <service.image
        stroke={service.imageStroke}
        height={"100%"}
        width={"100%"}
      />
    </Box>
  );
};

const Services: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [modalOpen, setModalOpen] = useState(false);
  const boxShadow = "1px 4px 1px rgba(0, 0, 0, 0.9)";
  const services: Service[] = [
    {
      title: "Regular Maintenance",
      image: RegMaintIcon,
      imageStroke: "#000000",
      description:
        "Weekly or bi-weekly pool cleaning, skimming, vacuuming, and filter maintenance to keep your pool pristine.",
      bgColor: "#F3F3F3",
      titleBgColor: "#92D2FE",
      learnMoreColor: "#000000",
      learnMoreStroke: "#FFFFFF",
      learnMoreFill: "#000000",
      boxShadow: boxShadow,
    },
    {
      title: "Water Chemistry",
      image: ChemistryIcon,
      imageStroke: "#000000",
      description:
        "Professional water testing and chemical balancing to ensure safe, crystal-clear water for swimming.",
      bgColor: "#92D2FE",
      titleBgColor: "#FFFFFF",
      learnMoreColor: "#000000",
      learnMoreStroke: "#FFFFFF",
      learnMoreFill: "#000000",
      boxShadow: boxShadow,
    },
    {
      title: "Equipment Repair",
      image: RepairIcon,
      imageStroke: "#FFFFFF",
      description:
        "Expert diagnosis and repair of pumps, filters, heaters, and other pool equipment to maintain optimal performance.",
      bgColor: "black",
      titleBgColor: "#FFFFFF",
      learnMoreColor: "#FFFFFF",
      learnMoreStroke: "#000000",
      learnMoreFill: "#FFFFFF",
      boxShadow: "none",
    },
    {
      title: "Seasonal Services",
      image: SeasonalIcon,
      imageStroke: "#000000",
      description:
        "Pool opening, closing, and winterization services to protect your investment throughout the changing seasons.",
      bgColor: "#F3F3F3",
      titleBgColor: "#92D2FE",
      learnMoreColor: "#000000",
      learnMoreStroke: "#FFFFFF",
      learnMoreFill: "#000000",
      boxShadow: boxShadow,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4.313rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "1.5rem", md: "2.5rem" },
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "inherit",
            fontWeight: "bold",
            fontSize: "2.5rem",
            lineHeight: "3rem",
            backgroundColor: "#92D2FE",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.35rem",
            width: "fit-content",
          }}
        >
          Services
        </Typography>
        <Typography
          sx={{
            width: { xs: "100%", md: "40%" },
            fontFamily: "inherit",
            fontWeight: "regular",
            fontSize: "1.25rem",
            lineHeight: "1.5rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          We offer a comprehensive range of services to keep your pool pristine
          and enjoyable year-round. These services include
        </Typography>
      </Box>
      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2.5rem",
          width: "100%",
        }}
      >
        {services.map((service) => (
          <Box
            key={service.title}
            sx={{
              backgroundColor: service.bgColor,
              borderRadius: "2.813rem",
              padding: "3.125rem",
              height: { md: "19.375rem" },
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: "space-between",
              gap: { xs: "2rem", sm: "2rem", md: "4.813rem" },
              width: {
                xs: "100%",
                sm: "100%",
                md: "calc(50% - 10rem)",
              },
              flexGrow: 1,
              border: "1px solid black",
              boxShadow: service.boxShadow,
            }}
          >
            {/* Left side */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: isMobile ? "100%" : "13.813rem",
                alignItems: isMobile ? "center" : "flex-start",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: service.titleBgColor,
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.35rem",
                  width: "fit-content",
                  fontFamily: "inherit",
                  fontWeight: "medium",
                  fontSize: "1.5rem",
                  lineHeight: "2rem",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {service.title}
              </Typography>
              {!isMobile && <LearnMoreButton service={service} />}
            </Box>
            {/* Right side */}
            <Box sx={{ flex: 1 }}>
              <ServiceImage service={service} />
            </Box>
            {isMobile && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "-2rem",
                }}
              >
                <LearnMoreButton service={service} />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
