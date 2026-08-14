import {
    Box,
    Container,
    Typography,
    IconButton,
    Stack,
  } from "@mui/material";
  import {
    GitHub,
    LinkedIn,
    Email,
  } from "@mui/icons-material";
  
  const Footer = () => {
    return (
      <Box
        component="footer"
        sx={{
          mt: 10,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.02))",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              py: { xs: 5, md: 7 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 1,
              }}
            >
              Sk Alamin
            </Typography>
  
            <Typography
              sx={{
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                mb: 3,
              }}
            >
              Full Stack Developer | AI-ML | SpringBoot | React | Next | Express | Java | JavaScript | Python
            </Typography>
  
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              sx={{ mb: 3 }}
            >
              <IconButton
                href="https://github.com/alaminskofficial"
                target="_blank"
              >
                <GitHub />
              </IconButton>
  
              <IconButton
                href="https://www.linkedin.com/in/alaminsk"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
  
              <IconButton
                href="mailto:alamin695sk@gmail.com"
              >
                <Email />
              </IconButton>
            </Stack>
  
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              © {new Date().getFullYear()} Sk Alamin.
              All Rights Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default Footer;