import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const AutoScrollContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef.current;
    containerElement.scrollLeft = containerElement.scrollWidth;
  }, [children]);

  return (
    <Box
      ref={containerRef}
      sx={{
        overflowX: "scroll",
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": {
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "3px",
          backgroundColor: "grey.300",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default AutoScrollContainer;
