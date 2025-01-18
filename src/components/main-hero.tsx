import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import main_logo from "../assets/main-logo.svg";
interface MainHeroProps {
  onContactClick: () => void;
}

interface BookButtonProps {
  width?: string;
  padding?: string;
  onClick: () => void;
}

const Title: React.FC = () => {
  return (
    <Typography
      sx={{
        fontFamily: "inherit",
        fontWeight: "medium",
        fontSize: "3rem",
        lineHeight: "3.5rem",
      }}
    >
      Reliable & Affordable Pool & Spa Care in Panama City, FL
    </Typography>
  );
};

const Description: React.FC = () => {
  return (
    <Typography
      sx={{
        fontFamily: "inherit",
        fontWeight: "regular",
        fontSize: "1.5rem",
        lineHeight: "2rem",
      }}
    >
      Our team is dedicated to delivering exceptional value through consistent
      work and a commitment to customer satisfaction. We offer clean ups, weekly
      maintenance, services, and repairs to keep your pool in perfect condition
      to the Bay and Gulf counties.
    </Typography>
  );
};

const BookButton: React.FC<BookButtonProps> = ({
  width = "fit-content",
  padding = "0.5rem 2rem",
  onClick,
}: {
  width?: string;
  padding?: string;
  onClick: () => void;
}) => {
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
      onClick={onClick}
    >
      Book a consultation
    </Button>
  );
};

const DesktopLayout: React.FC<MainHeroProps> = ({ onContactClick }) => {
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
          <BookButton
            width="100%"
            padding="1.5rem 2rem"
            onClick={onContactClick}
          />
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
};

// 3) Mobile layout
const MobileLayout: React.FC<MainHeroProps> = ({ onContactClick }) => {
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
        <BookButton
          width="100%"
          padding="1.5rem 2rem"
          onClick={onContactClick}
        />
      </Box>
    </Box>
  );
};

const MainHero: React.FC<MainHeroProps> = ({ onContactClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      {isMobile ? (
        <MobileLayout onContactClick={onContactClick} />
      ) : (
        <DesktopLayout onContactClick={onContactClick} />
      )}
    </Box>
  );
};
export default MainHero;
