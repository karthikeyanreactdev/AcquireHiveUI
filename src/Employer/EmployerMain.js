import React from "react";
import { Outlet } from "react-router-dom";
import PostLoginHeader from "../Header/PostLoginHeader";
import { Box, Container } from "@mui/material";

const EmployerMain = () => {
  return (
    <>
      <Box>
        <PostLoginHeader />
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default EmployerMain;
