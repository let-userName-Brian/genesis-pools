import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import main_logo from "../assets/main-logo.svg";

function Title() {
  return (
    <Typography
      sx={{
        fontFamily: "inherit",
        fontWeight: "medium",
        fontSize: "3rem",
        lineHeight: "3.5rem",
      }}
    >
      Elevating your pool care to crystal perfection
    </Typography>
  );
}

function Description() {
  return (
    <Typography
      sx={{
        fontFamily: "inherit",
        fontWeight: "regular",
        fontSize: "1.5rem",
        lineHeight: "2rem",
      }}
    >
      We are a team of experienced pool maintenance professionals who are
      dedicated to keeping your pool in top condition. Our services include
      water chemistry, equipment repair, cleaning services, and seasonal
      maintenance.
    </Typography>
  );
}

function BookButton({
  width = "fit-content",
  padding = "0.5rem 2rem",
}: {
  width?: string;
  padding?: string;
}) {
  return (
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
        width: width,
        padding: padding,
        borderRadius: "0.875rem",
        "&:hover": {
          backgroundColor: "#92D2FE",
          color: "black",
        },
      }}
    >
      Book a consultation
    </Button>
  );
}

function DesktopLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: "12.875rem",
        height: "515px",
      }}
    >
      {/* Left column */}
      <Box
        sx={{
          width: {
            md: "60%",
            lg: "40%",
          },
          display: "flex",
          flexDirection: "column",
          gap: "2.188rem",
          height: "100%",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Box sx={{ width: "90%" }}>
          <Title />
        </Box>
        <Box
          sx={{
            width: "85%",
          }}
        >
          <Description />
        </Box>
        <Box
          sx={{
            width: "40%",
            justifySelf: "flex-end",
          }}
        >
          <BookButton width="100%" padding="1.5rem 2rem" />
        </Box>
      </Box>
      {/* Right column */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          maxWidth: {
            md: "50rem", // 640px on laptop
            lg: "50rem", // 800px on desktop
          },
          height: "100%",
        }}
      >
        <img
          src={main_logo}
          alt="Main Logo"
          style={{
            width: "100%",
            height: "auto",
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  );
}

// 3) Mobile layout
function MobileLayout() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box sx={{ textAlign: "left" }}>
        <Title />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={main_logo}
          alt="Main Logo"
          style={{ width: "30rem", height: "100%" }}
        />
      </Box>
      <Box sx={{ textAlign: "left" }}>
        <Description />
      </Box>
      <Box sx={{ textAlign: "left", marginTop: "2rem" }}>
        <BookButton width="100%" padding="1.5rem 2rem" />
      </Box>
    </Box>
  );
}
const MainHero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return <Box>{isMobile ? <MobileLayout /> : <DesktopLayout />}</Box>;
};
export default MainHero;
