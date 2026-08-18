import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Paper,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  ArrowOutward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      content: 'alamin695sk@gmail.com',
      link: 'mailto:alamin695sk@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      content: '+91 6294090242',
      link: 'tel:+916294090242',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      content: 'Bangalore, India',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/alaminskofficial' },
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/alaminsk' },
    { icon: <Twitter />, url: 'https://x.com/SkAlamin94944' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   // Construct the mailto link with improved body content
    const mailtoLink = `mailto:alamin695sk@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(`Hello Alamin,
        
            You have received a new message from your portfolio contact form.
            
            Name: ${formData.name}
            Email: ${formData.email}
            
            Message:
            ${formData.message}
            
            Best regards,
            ${formData.name}`
        )}`;
    
      // Open the mailto link
    window.open(mailtoLink, '_blank');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };


  return (
    <Box
      component="section"
      sx={{
        minHeight: '100%',
        py: {
          xs: 6,
          sm: 8,
          md: 11,
        },
        px: {
          xs: 0,
          sm: 1,
        },
        backgroundColor: 'background.default',
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 1.5,
              fontSize: {
                xs: '1.9rem',
                sm: '2.2rem',
                md: '2.5rem',
              },
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            Contact Me
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: {
                xs: 5,
                sm: 6,
                md: 8,
              },
              px: {
                xs: 1,
                sm: 0,
              },
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Let's discuss your project and bring your ideas to life
          </Typography>
        </motion.div>

        {/* Main content */}
        <Grid
          container
          spacing={{
            xs: 4,
            sm: 5,
            md: 6,
          }}
          alignItems="stretch"
          justifyContent="center"
        >
          {/* Contact information */}
          <Grid
            item
            xs={12}
            md={5}
            lg={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: {
                    xs: 560,
                    md: 620,
                    lg: 650,
                  },
                  mx: 'auto',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: {
                      xs: 2.5,
                      sm: 3,
                      md: 4,
                    },
                    fontSize: {
                      xs: '1.35rem',
                      sm: '1.5rem',
                    },
                    fontWeight: 600,
                    textAlign: {
                      xs: 'center',
                      md: 'left',
                    },
                  }}
                >
                  Get in Touch
                </Typography>

                {contactInfo.map((info, index) => (
                  <Paper
                    key={index}
                    component="a"
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    elevation={0}
                    sx={{
                      p: {
                        xs: 2,
                        sm: 2.5,
                        md: 3,
                      },
                      mb: {
                        xs: 1.5,
                        sm: 2,
                        md: 3,
                      },
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: {
                        xs: 1.5,
                        sm: 2,
                      },
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      backgroundColor: 'background.paper',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition:
                        'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                      '&:hover': {
                        transform: {
                          xs: 'none',
                          md: 'translateX(6px)',
                        },
                        borderColor: 'primary.main',
                        boxShadow: 3,
                        '& .MuiSvgIcon-root': {
                          color: 'primary.main',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: {
                          xs: 42,
                          sm: 46,
                        },
                        height: {
                          xs: 42,
                          sm: 46,
                        },
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'action.hover',
                        color: 'text.primary',
                        '& .MuiSvgIcon-root': {
                          fontSize: {
                            xs: 20,
                            sm: 22,
                          },
                          transition: 'color 0.25s ease',
                        },
                      }}
                    >
                      {info.icon}
                    </Box>

                    <Box
                      sx={{
                        minWidth: 0,
                        flex: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          mb: 0.3,
                          fontWeight: 600,
                        }}
                      >
                        {info.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          overflowWrap: 'anywhere',
                          lineHeight: 1.5,
                        }}
                      >
                        {info.content}
                      </Typography>
                    </Box>

                    <ArrowOutward
                      sx={{
                        flexShrink: 0,
                        fontSize: 18,
                        color: 'text.secondary',
                        display: {
                          xs: 'none',
                          sm: 'block',
                        },
                      }}
                    />
                  </Paper>
                ))}

                {/* Social links */}
                <Box
                  sx={{
                    mt: {
                      xs: 3,
                      sm: 3.5,
                      md: 4,
                    },
                    display: 'flex',
                    justifyContent: {
                      xs: 'center',
                      md: 'flex-start',
                    },
                    gap: 1.5,
                  }}
                >
                  {socialLinks.map((link, index) => (
                    <IconButton
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Social link ${index + 1}`}
                      sx={{
                        width: {
                          xs: 44,
                          sm: 46,
                        },
                        height: {
                          xs: 44,
                          sm: 46,
                        },
                        color: 'text.primary',
                        border: '1px solid',
                        borderColor: 'divider',
                        backgroundColor: 'background.paper',
                        transition:
                          'transform 0.25s ease, border-color 0.25s ease, color 0.25s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          transform: 'translateY(-3px)',
                          backgroundColor: 'background.paper',
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact form */}
          <Grid
            item
            xs={12}
            md={7}
            lg={7}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              <Paper
                component="form"
                onSubmit={handleSubmit}
                elevation={0}
                sx={{
                  width: '100%',
                  maxWidth: {
                    xs: 560,
                    md: 620,
                    lg: 650,
                  },
                  mx: 'auto',
                  p: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                  },
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                  boxSizing: 'border-box',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: {
                      xs: 2.5,
                      sm: 3,
                    },
                    fontSize: {
                      xs: '1.35rem',
                      sm: '1.5rem',
                    },
                    fontWeight: 600,
                  }}
                >
                  Send a Message
                </Typography>

                <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiInputBase-root': {
                        alignItems: 'flex-start',
                      },
                    }}
                  />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        py: {
                          xs: 1.35,
                          sm: 1.5,
                        },
                        borderRadius: 2,
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: {
                          xs: '0.95rem',
                          sm: '1rem',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;