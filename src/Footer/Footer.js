import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 4 }}>
      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mollis malesuada diam, vitae rutrum ante vehicula eu. In hac
            habitasse platea dictumst. Fusce condimentum purus vel mi faucibus,
            nec bibendum augue commodo. Nam eget velit velit.{" "}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: info@company.com
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: (123) 456-7890
          </Typography>
          <Typography variant="body1" gutterBottom>
            Address: 123 Main St, Anytown USA
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            Links
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a href="/">Home</a>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a href="/about">About Us</a>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a href="/services">Services</a>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a href="/careers">Careers</a>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Typography variant="body1" gutterBottom>
          © 2023 Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
