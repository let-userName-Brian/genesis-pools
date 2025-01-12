import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StarIcon from "../icons/star";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/insta";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        borderTopLeftRadius: "2.813rem",
        borderTopRightRadius: "2.813rem",
        backgroundColor: "#191A23",
        padding: isMobile ? "3rem 2rem" : "3rem 3.75rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: isMobile ? "3rem" : "2.5rem",
      }}
    >
      {/* header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row-reverse",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          width: "100%",
          gap: isMobile ? "1.5rem" : "0",
        }}
      >
        {/* Social Media Icons */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: "1.25rem",
            }}
          >
            <FacebookIcon />
            <InstagramIcon />
          </Box>
        )}
        {/* branding */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "0.5rem",
          }}
        >
          <StarIcon height={24} width={24} stroke="#FFFFFF" />
          <Typography
            sx={{
              fontFamily: "inherit",
              color: "#FFFFFF",
              fontSize: "1.5rem",
              fontWeight: "bold",
              lineHeight: "1.5rem",
            }}
          >
            Genius Pools
          </Typography>
        </Box>
      </Box>
      {/* location */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          justifyContent: "center",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <Typography
          sx={{
            fontFamily: "inherit",
            color: "#191A23",
            fontSize: "1rem",
            fontWeight: "bold",
            lineHeight: "1.5rem",
            backgroundColor: "#92D2FE",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.35rem",
            width: "fit-content",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Contact Us:
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            color: "#FFFFFF",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Phone: (800) 555-5555
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            color: "#FFFFFF",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Email: info@geniuspools.com
        </Typography>

        <Typography
          sx={{
            fontFamily: "inherit",
            color: "#FFFFFF",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Address: 12 Main St, Destin, FL 32541
        </Typography>
      </Box>

      {isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            flexDirection: "row",
            gap: "1.25rem",
          }}
        >
          <FacebookIcon />
          <InstagramIcon />
        </Box>
      )}

      {/* divider */}
      <Divider sx={{ width: "100%", borderColor: "#FFFFFF" }} />
      {/* made by us */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          alignItems: isMobile ? "center" : "flex-end",
        }}
      >
        <Typography
          sx={{
            fontFamily: "inherit",
            color: "#92D2FE",
            fontSize: "1rem",
            lineHeight: "1.5rem",
          }}
        >
          Made with ❤️ by LNBV
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
