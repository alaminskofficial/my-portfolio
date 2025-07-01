import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, IconButton, Paper } from '@mui/material';
import { Email, Phone, LocationOn, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
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
      content: 'Bangalore , India',
      link: 'https://maps.google.com',
    },
  ];

 const socialLinks = [
    { icon: <GitHub />, url: "https://github.com/alaminskofficial" },
    { icon: <LinkedIn />, url: "https://www.linkedin.com/in/alaminsk" },
    { icon: <Twitter />, url: "https://x.com/SkAlamin94944" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here :todo send email from your React app or use a service like EmailJS
    // For now, we'll just log the form data to the console
    alert('Message sent successfully!');
    console.log(formData);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 1,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: { xs: 6, md: 8 },
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Let's discuss your project and bring your ideas to life
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ px: { xs: 1, sm: 0 } }}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
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
                    p: 3,
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    backgroundColor: 'background.paper',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      '& .MuiSvgIcon-root': {
                        color: 'primary.main',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: 'text.primary',
                      transition: 'color 0.3s ease-in-out',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {info.content}
                    </Typography>
                  </Box>
                </Paper>
              ))}
              <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                {socialLinks.map((link, index) => (
                  <IconButton
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.primary',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        borderColor: 'primary.main',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                component="form"
                onSubmit={handleSubmit}
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'background.paper',
                }}
              >
                <Grid container spacing={3}>
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
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ py: 1.5 }}
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