import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import passportImage from "../assets/mypicture.jpg";

const Home = () => {
  const stats = [
    { number: "4", text: "Years of experience" },
    { number: "19", text: "Projects completed" },
    { number: "11", text: "Technologies mastered" },
    { number: "566", text: "Code commits" },
  ];

  const socialLinks = [
    { icon: <GitHub />, url: "https://github.com/alaminskofficial" },
    { icon: <LinkedIn />, url: "https://www.linkedin.com/in/alaminsk" },
    { icon: <Twitter />, url: "https://x.com/SkAlamin94944" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 12, md: 8 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid
          container
          spacing={{ xs: 6, md: 4 }}
          alignItems="center"
          sx={{ py: { xs: 4, md: 0 } }}
        >
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: "text.secondary", mb: 1, letterSpacing: "0.1em" }}
              >
                Software Developer
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  "& span": { color: "primary.main" },
                }}
              >
                Hello I'm
                <br />
                <span>Sk Alamin</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 4,
                  maxWidth: 600,
                  lineHeight: 1.8,
                }}
              >
                I am passionate about transforming ideas into reality through
                code, leveraging cutting-edge technologies to build innovative
                solutions that enhance user experiences.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mb: 6 }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/contact"
                  sx={{ px: 4 }}
                >
                  Download CV
                </Button>
                {socialLinks.map((link, index) => (
                  <IconButton
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "text.primary",
                      border: "1px solid",
                      borderColor: "divider",
                      "&:hover": {
                        borderColor: "primary.main",
                        color: "primary.main",
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>

              <Grid container spacing={4}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          mb: 1,
                          fontSize: { xs: "2rem", md: "2.5rem" },
                          color: "primary.main",
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          letterSpacing: "0.05em",
                          lineHeight: 1.2,
                        }}
                      >
                        {stat.text}
                      </Typography>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: { xs: 250, sm: 300, md: 350 },
                mx: "auto",
              }}
            >
              {/* Animated dashed circle */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 220, sm: 260, md: 300 },
                  height: { xs: 220, sm: 260, md: 300 },
                  borderRadius: "50%",
                  border: "2px dashed #00ffc3",
                  animation: "spin 10s linear infinite",
                  boxShadow: "0 0 15px rgba(0, 255, 200, 0.4)",
                }}
              />

              {/* Profile Image */}
              <Box
                component="img"
                src={passportImage}
                alt="Profile"
                sx={{
                  width: { xs: 180, sm: 220, md: 260 },
                  height: { xs: 180, sm: 220, md: 260 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  zIndex: 1,
                  border: "3px solid #fff",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
