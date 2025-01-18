import React, { useRef } from "react";
import { Box, Container } from "@mui/material";
import MainAppBar from "./components/app-bar";
import MainHero from "./components/main-hero";
import ProcessAccordions from "./components/process-accordions";
import Services from "./components/services";
import ContactUs from "./components/contact-us";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import AdditionalInfo from "./components/additional-info";

const App: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
          <MainAppBar
            onServicesClick={() => scrollToSection(servicesRef)}
            onProcessClick={() => scrollToSection(processRef)}
            onTestimonialsClick={() => scrollToSection(testimonialsRef)}
            onContactClick={() => scrollToSection(contactRef)}
          />
          <Box
            sx={{
              display: "flex",
              marginTop: "1.5rem",
              flexDirection: "column",
              gap: "6.375rem",
              overflowX: "hidden",
            }}
          >
            <MainHero onContactClick={() => scrollToSection(contactRef)}/>
            <AdditionalInfo />
            <Box ref={servicesRef}>
              <Services />
            </Box>
            <Box ref={processRef}>
              <ProcessAccordions />
            </Box>
            <Box ref={testimonialsRef}>
              <Testimonials />
            </Box>
            <Box ref={contactRef}>
              <ContactUs />
            </Box>
            <Footer />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default App;
