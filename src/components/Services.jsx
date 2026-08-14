import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from '@mui/material';
import {
  Code,
  Brush,
  PhoneIphone,
  Speed,
  Close,
  ArrowForward,
  DesignServices,
  Laptop,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: 'Software Development',
      description:
        'Creating responsive and dynamic web applications using modern frameworks and best practices.',
      details: [
        'Responsive Design',
        'SEO Optimization',
        'E-commerce Solutions',
      ],
    },
    {
      //make Ai ml and generative AI service
      icon: <Laptop />,
      title: 'AI & Machine Learning',
      description:
        'Implementing AI and ML solutions to enhance user experiences and automate processes.',
      details: [
        'Natural Language Processing',
        'Computer Vision',
        'Generative AI Models',
        'Predictive Analytics',
        'Recommendation Systems',
      ],
    },
    {
      icon: <DesignServices />,
      title: 'System Design',
      description:
        'Designing scalable and efficient system architectures for complex applications.',
      details: ['Microservices', 'Cloud Architecture', 'Database Design'],
    },
    {
      icon: <PhoneIphone />,
      title: 'Mobile Development',
      description:
        'Building cross-platform mobile applications that deliver seamless user experiences.',
      details: ['iOS & Android', 'React Native', 'Responsive UI/UX'],
    },
    {
      icon: <Speed />,
      title: 'Performance Optimization',
      description:
        'Optimizing applications for maximum speed, efficiency, and scalability.',
      details: ['Code Review', 'Load Testing', 'Caching Strategies'],
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const handleOpenDialog = (service) => {
    setSelectedService(service);
  };

  const handleCloseDialog = () => {
    setSelectedService(null);
  };

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        px: {
          xs: 2,
          sm: 3,
          md: 4
        },
        py: {
          xs: 7,
          sm: 9,
          md: 12,
        },
        backgroundColor: 'background.default',
        overflow: 'hidden',
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
          mx: 'auto',
        }}
      >
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              maxWidth: 750,
              mx: 'auto',
              mb: {
                xs: 6,
                md: 8,
              },
              textAlign: 'center',
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3.2rem',
                },
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                mb: 2,
              }}
            >
              <Box component="span">My </Box>

              <Box
                component="span"
                sx={{
                  color: '#00ff9d',
                }}
              >
                Services
              </Box>
            </Typography>

            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: {
                  xs: '0.95rem',
                  sm: '1rem',
                  md: '1.05rem',
                },
                lineHeight: 1.7,
                maxWidth: 650,
                mx: 'auto',
              }}
            >
              I build modern, scalable and user-friendly digital
              experiences that help turn ideas into real products.
            </Typography>
          </Box>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <Grid
          container
          spacing={{
            xs: 2.5,
            sm: 3,
            md: 4,
          }}
          justifyContent="center"
          alignItems="center"

        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={service.title}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                style={{
                  height: '100%',
                }}
              >
                <Paper
                  elevation={0}
                  onClick={() => handleOpenDialog(service)}
                  sx={{
                    position: 'relative',
                    height: '100%',
                    minHeight: {
                      xs: 300,
                      sm: 320,
                      md: 340,
                    },
                    p: {
                      xs: 3,
                      sm: 3.5,
                      md: 4,
                    },
                    borderRadius: {
                      xs: 3,
                      md: 4,
                    },
                    cursor: 'pointer',
                    overflow: 'hidden',

                    background:
                      'linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025))',

                    border:
                      '1px solid rgba(255,255,255,0.08)',

                    transition:
                      'transform 0.35s ease, border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease',

                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'rgba(0,255,157,0.35)',
                      background:
                        'linear-gradient(145deg, rgba(0,255,157,0.09), rgba(255,255,255,0.035))',
                      boxShadow:
                        '0 20px 50px rgba(0,0,0,0.25)',

                      '& .service-icon-wrapper': {
                        transform: 'translateY(-4px)',
                        backgroundColor:
                          'rgba(0,255,157,0.14)',
                        borderColor:
                          'rgba(0,255,157,0.35)',
                      },

                      '& .service-icon': {
                        color: '#00ff9d',
                        transform: 'scale(1.08)',
                      },

                      '& .service-arrow': {
                        opacity: 1,
                        transform: 'translateX(0)',
                      },
                    },
                  }}
                >
                  {/* Decorative glow */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 180,
                      height: 180,
                      borderRadius: '50%',
                      top: -100,
                      right: -80,
                      background:
                        'rgba(0,255,157,0.06)',
                      filter: 'blur(35px)',
                      pointerEvents: 'none',
                    }}
                  />

                  <Box
                    sx={{
                      position: 'relative',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Icon */}
                    <Box
                      className="service-icon-wrapper"
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        backgroundColor:
                          'rgba(255,255,255,0.06)',
                        border:
                          '1px solid rgba(255,255,255,0.08)',
                        transition:
                          'all 0.35s ease',
                      }}
                    >
                      <Box
                        className="service-icon"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          transition:
                            'all 0.35s ease',
                          '& svg': {
                            fontSize: 30,
                          },
                        }}
                      >
                        {service.icon}
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: {
                          xs: '1.25rem',
                          sm: '1.4rem',
                          md: '1.5rem',
                        },
                        fontWeight: 700,
                        lineHeight: 1.3,
                        mb: 1.5,
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: {
                          xs: '0.9rem',
                          sm: '0.95rem',
                          md: '1rem',
                        },
                        lineHeight: 1.7,
                        maxWidth: 520,
                        flexGrow: 1,
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Bottom action */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: 3,
                        pt: 2.5,
                        borderTop:
                          '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: '#00ff9d',
                        }}
                      >
                        Explore service
                      </Typography>

                      <ArrowForward
                        className="service-arrow"
                        sx={{
                          fontSize: 20,
                          color: '#00ff9d',
                          opacity: {
                            xs: 1,
                            md: 0,
                          },
                          transform: {
                            xs: 'translateX(0)',
                            md: 'translateX(-8px)',
                          },
                          transition:
                            'all 0.3s ease',
                        }}
                      />
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* ================= DIALOG ================= */}
        <AnimatePresence>
          {selectedService && (
            <Dialog
              open={Boolean(selectedService)}
              onClose={handleCloseDialog}
              maxWidth="sm"
              fullWidth
              sx={{
                '& .MuiBackdrop-root': {
                  backgroundColor:
                    'rgba(0, 0, 0, 0.82)',
                },

                '& .MuiDialog-paper': {
                  width: {
                    xs: 'calc(100% - 24px)',
                    sm: '100%',
                  },
                  maxWidth: 600,
                  margin: {
                    xs: 1.5,
                    sm: 2,
                  },
                  borderRadius: {
                    xs: 3,
                    sm: 4,
                  },
                  boxShadow:
                    '0 25px 80px rgba(0,0,0,0.45)',
                  overflow: 'hidden',
                },
              }}
              PaperProps={{
                component: motion.div,
                initial: {
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
                exit: {
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                },
                transition: {
                  duration: 0.3,
                },
                sx: {
                  backgroundColor:
                    'background.paper',
                  backgroundImage: 'none',
                },
              }}
            >
              {/* Dialog Header */}
              <DialogTitle
                sx={{
                  px: {
                    xs: 2.5,
                    sm: 3,
                  },
                  pt: {
                    xs: 2.5,
                    sm: 3,
                  },
                  pb: 2,
                  pr: 7,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00ff9d',
                      backgroundColor:
                        'rgba(0,255,157,0.1)',
                    }}
                  >
                    {selectedService.icon}
                  </Box>

                  <Typography
                    component="h2"
                    sx={{
                      fontSize: {
                        xs: '1.15rem',
                        sm: '1.3rem',
                      },
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {selectedService.title}
                  </Typography>
                </Box>

                <IconButton
                  onClick={handleCloseDialog}
                  aria-label="close"
                  sx={{
                    position: 'absolute',
                    right: 12,
                    top: 12,
                    color: 'text.secondary',

                    '&:hover': {
                      color: '#00ff9d',
                      backgroundColor:
                        'rgba(0,255,157,0.08)',
                    },
                  }}
                >
                  <Close />
                </IconButton>
              </DialogTitle>

              {/* Dialog Content */}
              <DialogContent
                sx={{
                  px: {
                    xs: 2.5,
                    sm: 3,
                  },
                  pb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontSize: {
                      xs: '0.9rem',
                      sm: '0.95rem',
                    },
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {selectedService.description}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  What's included
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 0,
                    listStyle: 'none',
                  }}
                >
                  {selectedService.details.map(
                    (detail, index) => (
                      <motion.li
                        key={detail}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.08,
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            py: 1.2,
                            borderBottom:
                              index !==
                              selectedService.details
                                .length -
                                1
                                ? '1px solid rgba(255,255,255,0.06)'
                                : 'none',
                          }}
                        >
                          <Box
                            sx={{
                              width: 7,
                              height: 7,
                              flexShrink: 0,
                              borderRadius: '50%',
                              backgroundColor:
                                '#00ff9d',
                              boxShadow:
                                '0 0 10px rgba(0,255,157,0.5)',
                            }}
                          />

                          <Typography
                            sx={{
                              color: 'text.primary',
                              fontSize: {
                                xs: '0.9rem',
                                sm: '0.95rem',
                              },
                              lineHeight: 1.5,
                            }}
                          >
                            {detail}
                          </Typography>
                        </Box>
                      </motion.li>
                    )
                  )}
                </Box>
              </DialogContent>

              {/* Dialog Actions */}
              <DialogActions
                sx={{
                  px: {
                    xs: 2.5,
                    sm: 3,
                  },
                  py: {
                    xs: 2,
                    sm: 2.5,
                  },
                }}
              >
                <Button
                  onClick={handleCloseDialog}
                  sx={{
                    minWidth: 90,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Services;