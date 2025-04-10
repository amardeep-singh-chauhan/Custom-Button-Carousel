import React, { useRef } from "react";
import { IconButton, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ScrollableCarousel = ({ children, scrollAmount = 250 }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
      {/* Left Arrow */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{ position: "absolute", left: "1rem", zIndex: 1 }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Scrollable Content */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Chrome
          width: "100%",
        }}
      >
        {children}
      </Box>

      {/* Right Arrow */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{ position: "absolute", right: "1rem", zIndex: 1 }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ScrollableCarousel;
