import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContactUsBg from "../icons/contact-us-bg";
import { useState } from "react";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "0.875rem",
    backgroundColor: "#FFFFFF",
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
  "& label.Mui-focused": {
    color: "black",
  },
};

const ContactUs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isSubmitted, setIsSubmitted] = useState(false);
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
          Contact Us
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
          Get in touch with us to schedule your pool services:
        </Typography>
      </Box>
      {/* contact form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "1rem",
          backgroundColor: "#F3F3F3",
          borderRadius: "2.813rem",
          padding: { xs: "2rem", md: "3.75rem 6.25rem" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Form Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            height: "38rem",
          }}
        >
          {!isSubmitted ? (
            <>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontWeight: "bold",
                  fontSize: "1.125rem",
                  lineHeight: "1.5rem",
                  backgroundColor: "#92D2FE",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.35rem",
                  width: "fit-content",
                }}
              >
                Lets keep in touch
              </Typography>
              <TextField label="Name" sx={inputStyle} />
              <TextField label="Email" sx={inputStyle} />
              <TextField label="Phone" sx={inputStyle} />
              <TextField label="Message" multiline rows={6} sx={inputStyle} />
              <Button
                variant="contained"
                sx={{
                  fontFamily: "inherit",
                  fontWeight: "medium",
                  fontSize: "1rem",
                  textTransform: "none",
                  backgroundColor: "black",
                  color: "white",
                  lineHeight: "1.5rem",
                  width: "100%",
                  padding: "1.5rem 2rem",
                  borderRadius: "0.875rem",
                  "&:hover": {
                    backgroundColor: "#92D2FE",
                    color: "black",
                  },
                }}
              >
                Submit
              </Button>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontWeight: "bold",
                  fontSize: isMobile ? "2rem" : "4rem",
                  lineHeight: isMobile ? 1.125 : 1.125,
                }}
              >
                Thank you for contacting us!
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontWeight: "regular",
                  fontSize: isMobile ? "1rem" : "1.25rem",
                  lineHeight: isMobile ? 1.2 : 1.25,
                }}
              >
                We will get back to you as soon as possible.
              </Typography>
            </Box>
          )}
        </Box>

        {/* Image Section - Only show on desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "60%",
            position: "relative",
            overflow: "visible",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateX(65%) translateY(-50%)",
              overflow: "visible",
            }}
          >
            <ContactUsBg />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
