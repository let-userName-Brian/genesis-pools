import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StarIcon from "../icons/star";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MainAppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        width: "100%",
        margin: 0,
        backgroundColor: "transparent",
        color: "black",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Name of company */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "0.5rem",
          }}
        >
          <StarIcon height={24} width={24} />
          <Typography
            sx={{
              fontFamily: "inherit",
              color: "black",
              fontSize: "1.5rem",
              fontWeight: "bold",
              lineHeight: "1.5rem",
            }}
          >
            Genius Pools
          </Typography>
        </Box>

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "2.5rem",
          }}
        >
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  fontFamily: "inherit",
                }}
              >
                <MenuItem onClick={handleClose}>Services</MenuItem>
                <MenuItem onClick={handleClose}>Process</MenuItem>
                <MenuItem onClick={handleClose}>Testimonials</MenuItem>
                <MenuItem onClick={handleClose}>Contact Us</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <StyledUnderlinedButton color="inherit">
                Services
              </StyledUnderlinedButton>
              <StyledUnderlinedButton color="inherit">
                Process
              </StyledUnderlinedButton>
              <StyledUnderlinedButton color="inherit">
                Testimonials
              </StyledUnderlinedButton>
              <StyledContactUsButton color="inherit">
                Contact Us
              </StyledContactUsButton>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;

const StyledContactUsButton = styled(Button)({
  fontFamily: "inherit",
  padding: "0.5rem 2rem",
  borderRadius: "0.875rem",
  border: "1px solid #000",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

const StyledUnderlinedButton = styled(Button)({
  fontFamily: "inherit",
  "&:hover": {
    textDecoration: "underline",
    backgroundColor: "transparent",
    textUnderlineOffset: "0.5rem",
  },
});
