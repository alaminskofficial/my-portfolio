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
import passportImage from "../assets/mynewpic.png";

const Home = () => {
  const stats = [
    { number: "5+", text: "Years of experience" },
    { number: "36", text: "Projects completed" },
    { number: "22", text: "Technologies mastered" },
    { number: "966", text: "Code commits" },
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      url: "https://github.com/alaminskofficial",
    },
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/alaminsk",
    },
    {
      icon: <Twitter />,
      url: "https://x.com/SkAlamin94944",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: {
          xs: 8,
          sm: 10,
          md: 8,
        },
        pb: {
          xs: 5,
          sm: 6,
          md: 4,
        },
        backgroundColor: "background.default",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Grid
          container
          spacing={{
            xs: 3,
            sm: 5,
            md: 4,
          }}
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{
            py: {
              xs: 2,
              sm: 4,
              md: 0,
            },
          }}
        >
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "text.secondary",
                  mb: 1,
                  letterSpacing: "0.1em",
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.95rem",
                  },
                }}
              >
                Software Engineer
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  mb: {
                    xs: 1.5,
                    sm: 2,
                  },
                  fontSize: {
                    xs: "clamp(2rem, 9vw, 2.5rem)",
                    sm: "3rem",
                    md: "3.5rem",
                  },
                  lineHeight: 1.1,
                  fontWeight: 700,
                  "& span": {
                    color: "primary.main",
                  },
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
                  mb: {
                    xs: 3,
                    sm: 4,
                  },
                  maxWidth: {
                    xs: "100%",
                    sm: 600,
                  },
                  mx: { xs: "auto", md: 0 },
                  fontSize: {
                    xs: "0.95rem",
                    sm: "1rem",
                  },
                  lineHeight: {
                    xs: 1.7,
                    md: 1.8,
                  },
                }}
              >
                I am passionate about transforming ideas into reality through
                code, leveraging cutting-edge technologies to build innovative
                solutions that enhance user experiences.
              </Typography>

              {/* =========================
                  BUTTONS + SOCIAL
              ========================== */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap",
                  gap: {
                    xs: 1.5,
                    sm: 2,
                  },
                  mb: {
                    xs: 4,
                    sm: 6,
                  },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/resume"
                  sx={{
                    px: {
                      xs: 3,
                      sm: 4,
                    },
                    py: {
                      xs: 1,
                      sm: 1.2,
                    },
                    borderRadius: 2,
                    textTransform: "none",
                  }}
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
                      width: {
                        xs: 40,
                        sm: 44,
                      },
                      height: {
                        xs: 40,
                        sm: 44,
                      },
                      "&:hover": {
                        borderColor: "primary.main",
                        color: "primary.main",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>

              {/* =========================
                  STATS
              ========================== */}
              <Grid
                container
                spacing={{
                  xs: 2,
                  sm: 4,
                }}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                {stats.map((stat, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          mb: {
                            xs: 0.5,
                            sm: 1,
                          },
                          fontSize: {
                            xs: "1.8rem",
                            sm: "2rem",
                            md: "2.5rem",
                          },
                          color: "primary.main",
                          fontWeight: 700,
                        }}
                      >
                        {stat.number}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          letterSpacing: {
                            xs: "0.02em",
                            sm: "0.05em",
                          },
                          lineHeight: 1.2,
                          fontSize: {
                            xs: "0.72rem",
                            sm: "0.8rem",
                            md: "0.875rem",
                          },
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

          {/* =========================
              RIGHT PROFILE SECTION
              Desktop -> Right side
              Mobile -> Responsive center
          ========================== */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                /*
                 * Fluid height:
                 * Small phone -> smaller
                 * Tablet -> medium
                 * Desktop -> larger
                 */
                height: {
                  xs: "clamp(250px, 78vw, 310px)",
                  sm: 340,
                  md: 400,
                },

                mt: {
                  xs: 1,
                  sm: 2,
                  md: 0,
                },
              }}
            >
              {/* =========================
                  OUTER ROTATING CIRCLE
              ========================== */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: "clamp(240px, 82vw, 360px)",
                  height: "clamp(240px, 82vw, 360px)",
                  borderRadius: "50%",
                  border: "2px dashed rgba(0,255,195,0.55)",
                  boxSizing: "border-box",
                }}
              />

              {/* =========================
                  SECOND ROTATING CIRCLE
              ========================== */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: "clamp(210px, 72vw, 310px)",
                  height: "clamp(210px, 72vw, 310px)",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,255,195,0.28)",
                  boxSizing: "border-box",
                }}
              />

              {/* =========================
                  THIRD SUBTLE PULSE RING
              ========================== */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  width: "clamp(180px, 62vw, 270px)",
                  height: "clamp(180px, 62vw, 270px)",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,255,195,0.25)",
                  boxSizing: "border-box",
                }}
              />

              {/* =========================
                  PROFILE IMAGE
              ========================== */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={passportImage}
                  alt="Profile"
                  sx={{
                    width: {
                      xs: "min(50vw, 190px)",
                      sm: 220,
                      md: 270,
                    },
                    height: {
                      xs: "min(50vw, 190px)",
                      sm: 220,
                      md: 270,
                    },
                    borderRadius: "50%",
                    objectFit: "cover",

                    border: {
                      xs: "3px solid #fff",
                      md: "4px solid #fff",
                    },

                    boxShadow: {
                      xs: "0 8px 30px rgba(0,0,0,0.18)",
                      md: "0 10px 40px rgba(0,0,0,0.22)",
                    },

                    transition: "all 0.3s ease",
                  }}
                />
              </motion.div>

              {/* =========================
                  FLOATING DOT - TOP RIGHT
              ========================== */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "12%",
                  right: "12%",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#00ffc3",
                  boxShadow: "0 0 15px rgba(0,255,195,0.7)",
                }}
              />

              {/* =========================
                  FLOATING DOT - BOTTOM LEFT
              ========================== */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{
                  position: "absolute",
                  bottom: "15%",
                  left: "10%",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#00ffc3",
                  boxShadow: "0 0 12px rgba(0,255,195,0.6)",
                }}
              />

              {/* =========================
                  SMALL DECORATIVE DOT
              ========================== */}
              <motion.div
                animate={{
                  x: [0, 6, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                style={{
                  position: "absolute",
                  top: "28%",
                  left: "8%",
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#00ffc3",
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
