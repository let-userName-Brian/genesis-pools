import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    // slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // slidesToSlide: 1,
  },
};

const Testimonials: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const testimonials = [
    {
      text: "Excellent service! They keep our pool crystal clear year-round.",
      author: "John D.",
    },
    {
      text: "Very professional and thorough. Highly recommend!",
      author: "Sarah M.",
    },
    {
      text: "Best pool service we've ever had. Worth every penny.",
      author: "Mike R.",
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
          Testimonials
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontFamily: "inherit",
            fontWeight: "regular",
            fontSize: "1.25rem",
            lineHeight: "1.5rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          What our customers say about us
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "30rem",
          borderRadius: "2.813rem",
          backgroundColor: "#191A23",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        {/* <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          customTransition="all 1s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={isMobile ? "mobile" : "desktop"}
          autoPlay={isMobile ? false : true}
          autoPlaySpeed={1000}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                mx: 2,
                transition: "all 0.3s ease",
                position: "relative",
                bgcolor: "transparent",
                borderRadius: "2.913rem",
                p: "2rem",
                height: "12rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "1px solid #92D2FE",
                color: "#FFFFFF",
                gap: "2rem",
                "&:hover": {
                  backgroundColor: "#92D2FE",
                  color: "#191A23 !important",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  lineHeight: "1.5rem",
                  fontFamily: "inherit",
                }}
              >
                {testimonial.text}
              </Typography>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: "1.25rem",
                  lineHeight: "1.5rem",
                  fontFamily: "inherit",
                }}
              >
                -{testimonial.author}
              </Typography>
            </Box>
          ))}
        </Carousel> */}
      </Box>
    </Box>
  );
};

export default Testimonials;
