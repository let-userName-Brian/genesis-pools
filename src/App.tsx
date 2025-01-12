import React from "react";
import { Box, Container} from "@mui/material";
import MainAppBar from "./components/app-bar";
import MainHero from "./components/main-hero";
import ProcessAccordions from "./components/process-accordions";
import Services from "./components/services";
import ContactUs from "./components/contact-us";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            mx: "auto",
            width: "100%",
            maxWidth: "1920px",
            pt: 1,
            px: {
              xs: 2, // 16px
              sm: 3, // 24px
              md: 4, // 32px
              lg: 5, // 40px
              xl: 12.5, // 100px => 6.25rem if base font-size is 16px
            },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MainAppBar />
          <Box
            sx={{
              display: "flex",
              marginTop: "1.5rem",
              flexDirection: "column",
              gap: "6.375rem",
              overflowX: "hidden",
            }}
          >
            <MainHero />
            <Services />
            <ProcessAccordions />
            <Testimonials />
            <ContactUs />
            <Footer />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default App;
