import {
  Box,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChemistryIcon from "../icons/chemistry";
import RepairIcon from "../icons/repair";
import SeasonalIcon from "../icons/seasonal";
import RegMaintIcon from "../icons/reg-maint";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";

interface Service {
  title: string;
  image:
    | React.ComponentType<{ height?: string; width?: string; stroke?: string }>
    | React.ComponentType<{ sx?: any }>;
  isSvgComponent?: boolean; // Add this to distinguish between types
  imageStroke?: string;
  addPaddingLeft?: boolean;
  description: string;
  bgColor: string;
  titleBgColor: string;
  learnMoreColor: string;
  learnMoreStroke: string;
  learnMoreFill: string;
  boxShadow: string;
}
const ServiceImage: React.FC<{
  service: Service;
}> = ({ service }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        height: { xs: "13rem", sm: "15rem", md: "20rem" },
        maxHeight: "20rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!service.isSvgComponent ? (
        <service.image
          height="100%"
          width="100%"
          stroke={service.imageStroke}
          sx={{
            paddingLeft: service.addPaddingLeft ? "2.5rem" : "0",
          }}
        />
      ) : (
        <SvgIcon
          component={service.image as React.ComponentType<{ sx?: any }>}
          sx={{
            fontSize: isMobile ? "12rem" : "20rem",
            color: service.imageStroke,
            paddingLeft: service.addPaddingLeft ? "2.5rem" : "0",
          }}
        />
      )}
    </Box>
  );
};

const Services: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const boxShadow = "1px 4px 1px rgba(0, 0, 0, 0.9)";
  /**
   * List of services:
   * Clean Ups (green to clean)
   * Weekly maintenance
   * Service/Repairs
   * Pool School
   * Stain removal
   * Delivery chemicals/supplies
   * Pressure washing Above grounds
   * Salt Systems
   * Spas
   */
  const services: Service[] = [
    {
      title: "Clean Ups",
      image: RegMaintIcon,
      imageStroke: "#000000",
      description:
        "Specialized green-to-clean spa and pool restoration, transforming neglected pools or spas into sparkling oases.",
      bgColor: "#F3F3F3",
      titleBgColor: "#92D2FE",
      learnMoreColor: "#000000",
      learnMoreStroke: "#FFFFFF",
      learnMoreFill: "#000000",
      boxShadow: boxShadow,
    },
    {
      title: "Weekly Maintenance",
      image: EngineeringIcon,
      isSvgComponent: true,
      addPaddingLeft: true,
      imageStroke: "#000000",
      description:
        "Comprehensive weekly pool care including cleaning, chemical balancing, and equipment checks.",
      bgColor: "#92D2FE",
      titleBgColor: "#FFFFFF",
      learnMoreColor: "#000000",
      learnMoreStroke: "#FFFFFF",
      learnMoreFill: "#000000",
      boxShadow: boxShadow,
    },
    {
      title: "Service & Repairs",
      image: RepairIcon,
      imageStroke: "#FFFFFF",
      description:
        "Expert diagnosis and repair of all pool equipment, including pumps, filters, and salt systems.",
      bgColor: "black",
      titleBgColor: "#FFFFFF",
      learnMoreColor: "#FFFFFF",
      learnMoreStroke: "#000000",
      learnMoreFill: "#FFFFFF",
      boxShadow: "none",
    },
    {
      title: "Pool School",
      image: SchoolIcon,
      isSvgComponent: true,
      imageStroke: "#000000",
      description:
        "Personalized training sessions to help pool owners understand maintenance and chemical balance.",
      bgColor: "#F3F3F3",
      titleBgColor: "#92D2FE",
      learnMoreColor: "#000000",
      learnMoreStroke: "#FFFFFF",
      learnMoreFill: "#000000",
      boxShadow: boxShadow,
    },
    {
      title: "Chemical Delivery",
      image: ChemistryIcon,
      imageStroke: "#000000",
      description:
        "Convenient delivery of pool chemicals and supplies directly to your door.",
      bgColor: "#92D2FE",
      titleBgColor: "#FFFFFF",
      learnMoreColor: "#000000",
      learnMoreStroke: "#FFFFFF",
      learnMoreFill: "#000000",
      boxShadow: boxShadow,
    },
    {
      title: "Specialty Services",
      image: SeasonalIcon,
      imageStroke: "#FFFFFF",
      description:
        "Specialized services including salt systems, stain removal, pressure washing above grounds, and spa maintenance.",
      bgColor: "black",
      titleBgColor: "#FFFFFF",
      learnMoreColor: "#FFFFFF",
      learnMoreStroke: "#000000",
      learnMoreFill: "#FFFFFF",
      boxShadow: "none",
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
              {!isMobile && (
                <Typography
                  sx={{
                    color: service.learnMoreColor,
                    fontFamily: "inherit",
                    textAlign: "center",
                    fontSize: "1.25rem",
                    lineHeight: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  {service.description}
                </Typography>
              )}
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
                }}
              >
                <Typography
                  sx={{
                    color: service.learnMoreColor,
                    fontFamily: "inherit",
                    textAlign: "center",
                    fontSize: "1rem",
                    lineHeight: "1.25rem",
                    fontWeight: "medium",
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
