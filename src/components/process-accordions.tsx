import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ProcessAccordions: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const accordionData = [
    {
      id: "panel1",
      title: "Consult",
      content: `Schedule a visit with our pool experts to evaluate your pool's current condition and discuss your maintenance needs.`,
    },
    {
      id: "panel2",
      title: "Plan",
      content:
        "Receive a tailored maintenance plan that outlines the recommended services and schedule to keep your pool in top shape.",
    },
    {
      id: "panel3",
      title: "Schedule",
      content:
        "Our team performs routine cleaning, chemical balancing, and equipment checks according to your customized plan.",
    },
    {
      id: "panel4",
      title: "Support",
      content: `Get year-round support and seasonal services to maintain your pool's pristine condition throughout every season.`,
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
          Process
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
          Or process to get your pool ready for any season:
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        {accordionData.map((accordion, index) => (
          <Accordion
            key={accordion.id}
            expanded={expanded === accordion.id}
            onChange={handleChange(accordion.id)}
            sx={{
              fontFamily: "inherit",
              mb: "1.875rem",
              "&:before": {
                display: "none",
              },
              borderRadius: "2.813rem",
              minHeight: expanded === accordion.id ? "auto" : "9.938rem",
              border: "1px solid black",
              boxShadow: "1px 4px 1px rgba(0, 0, 0, 0.9)",
              "&.MuiPaper-root": {
                borderRadius: "2.813rem",
                overflow: "hidden",
                transition: "all 0.2s ease-in-out",
              },
              "&:first-of-type": {
                borderTopLeftRadius: "2.813rem",
                borderTopRightRadius: "2.813rem",
              },
              "&:last-of-type": {
                borderBottomLeftRadius: "2.813rem",
                borderBottomRightRadius: "2.813rem",
              },
            }}
          >
            <AccordionSummary
                expandIcon={
                  <AddCircleOutlineIcon 
                    sx={{ 
                      fontSize: "3rem",
                      color: "#000000",
                      transform: expanded === accordion.id ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out',
                      strokeWidth: 1, 
                    }} 
                  />
                }
              sx={{
                backgroundColor:
                  expanded === accordion.id ? "#92D2FE" : "#F5F5F5",
                padding: "2rem",
                minHeight: "9.938rem",
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
                "& .MuiAccordionSummary-expandIconWrapper": {
                  marginRight: 0,
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: isMobile ? "1rem" : "1.563rem",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: isMobile ? "2.5rem" : "3.75rem",
                    fontFamily: '"Space Grotesk", serif',
                  }}
                >
                  0{index + 1}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: isMobile ? "1.5rem" : "1.875rem",
                    fontFamily: '"Space Grotesk", serif',
                  }}
                >
                  {accordion.title}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "2.563rem 3.75rem",
                paddingTop: "1.875rem",
                backgroundColor: "#92D2FE",
                borderBottomLeftRadius: "2.813rem",
                borderBottomRightRadius: "2.813rem",
              }}
            >
              <Divider
                sx={{
                  marginBottom: "1.875rem",
                  marginTop: "-1.875rem",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "regular",
                  fontSize: "1.125rem",
                  fontFamily: '"Space Grotesk", serif',
                }}
              >
                {accordion.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default ProcessAccordions;
