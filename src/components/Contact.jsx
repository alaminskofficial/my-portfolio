import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
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

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      minHeight: 54,
      borderRadius: 1.5,
      backgroundColor: 'rgba(255,255,255,0.025)',
      transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
      '& fieldset': { borderColor: 'rgba(204,214,246,0.16)' },
      '&:hover fieldset': { borderColor: 'rgba(100,255,218,0.48)' },
      '&.Mui-focused': {
        backgroundColor: 'rgba(100,255,218,0.035)',
        boxShadow: '0 0 0 3px rgba(100,255,218,0.08)',
      },
      '&.Mui-focused fieldset': { borderWidth: '1px', borderColor: '#64ffda' },
    },
    '& .MuiInputLabel-root': { fontSize: 13 },
    '& .MuiInputBase-input': { fontSize: 13 },
    '& .MuiInputBase-inputMultiline': { lineHeight: 1.7 },
  };


  return (
    <Box
      component="section"
      sx={{
        minHeight: '100%',
        py: {
          xs: 8,
          sm: 9,
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
            align="left"
            sx={{
              mb: 1,
              fontSize: {
                xs: 'clamp(2rem, 8vw, 2.5rem)',
                sm: '2.7rem',
                md: '3.2rem',
              },
              lineHeight: 1.12,
              fontWeight: 700,
            }}
          >
            Let’s talk about<br />
            <Box component="span" sx={{ color: 'primary.main' }}>what you’re building.</Box>
          </Typography>

          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: {
                xs: 4,
                sm: 5,
                md: 6,
              },
              px: {
                xs: 1,
                sm: 0,
              },
              color: 'text.secondary',
              maxWidth: 680,
              lineHeight: 1.7,
            }}
          >
            Have a product or engineering challenge in mind? Share a little context and let’s start a conversation.
          </Typography>
        </motion.div>

        {/* Main content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 0.82fr) minmax(0, 1.18fr)' },
            alignItems: 'start',
            columnGap: { xs: 0, md: 4, lg: 5 },
            rowGap: { xs: 3, md: 0 },
            width: '100%',
          }}
        >
          {/* Contact information */}
          <Box
            sx={{
              minWidth: 0,
              order: { xs: 2, md: 1 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              <Box sx={{ width: '100%', maxWidth: { xs: 560, md: 'none' }, mx: 'auto' }}>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'block',
                    mb: 1.5,
                    color: 'primary.main',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                  }}
                >
                  CONTACT DETAILS
                </Typography>

                <Paper
                  elevation={0}
                  sx={{
                    px: { xs: 1.5, sm: 2 },
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2.5,
                    backgroundColor: 'background.paper',
                  }}
                >
                  {contactInfo.map((info, index) => (
                    <Box
                      component="a"
                      key={info.title}
                      href={info.link}
                      target={info.title === 'Location' ? '_blank' : undefined}
                      rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                      sx={{
                        minHeight: 70,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        py: 1.25,
                        textDecoration: 'none',
                        color: 'inherit',
                        borderBottom: index < contactInfo.length - 1 ? '1px solid' : 'none',
                        borderColor: 'divider',
                        '&:hover .contact-icon': { color: 'primary.main', backgroundColor: 'rgba(100,255,218,0.12)' },
                      }}
                    >
                      <Box
                        className="contact-icon"
                        sx={{
                          width: 38,
                          height: 38,
                          flex: '0 0 38px',
                          display: 'grid',
                          placeItems: 'center',
                          borderRadius: 1.5,
                          color: 'text.secondary',
                          backgroundColor: 'rgba(255,255,255,0.045)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box sx={{ minWidth: 0, flex: 1 }}>
                        <Typography sx={{ color: 'text.secondary', fontSize: 10, mb: 0.25 }}>
                          {info.title}
                        </Typography>
                        <Typography sx={{ color: 'text.primary', fontSize: { xs: 11, sm: 12 }, overflowWrap: 'anywhere' }}>
                          {info.content}
                        </Typography>
                      </Box>
                      <ArrowOutward sx={{ flexShrink: 0, color: 'text.secondary', fontSize: 16 }} />
                    </Box>
                  ))}
                </Paper>

                {/* Social links */}
                <Box
                  sx={{
                    mt: {
                      xs: 3,
                      sm: 3.5,
                      md: 4,
                    },
                    display: 'flex',
                    justifyContent: 'flex-start',
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
          </Box>

          {/* Contact form */}
          <Box
            sx={{
              minWidth: 0,
              order: { xs: 1, md: 2 },
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
                  maxWidth: { xs: 560, md: 'none' },
                  mx: 'auto',
                  p: {
                    xs: 2,
                    sm: 3,
                    md: 3.5,
                  },
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2.5,
                  backgroundColor: 'background.paper',
                  boxSizing: 'border-box',
                  boxShadow: '0 18px 50px rgba(0,0,0,0.12)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: { xs: 2.5, sm: 3.5 } }}>
                  <Box sx={{ width: 40, height: 40, flex: '0 0 40px', display: 'grid', placeItems: 'center', borderRadius: 1.5, color: 'primary.main', backgroundColor: 'rgba(100,255,218,0.1)' }}>
                    <Email fontSize="small" />
                  </Box>
                  <Box>
                    <Typography sx={{ mb: 0.35, color: 'primary.main', fontSize: 9, fontWeight: 800, letterSpacing: '0.14em' }}>
                      SEND A NOTE
                    </Typography>
                    <Typography variant="h5" sx={{ fontSize: { xs: '1.2rem', sm: '1.4rem' }, fontWeight: 700, lineHeight: 1.3 }}>
                      Tell me about your project
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.65, fontSize: 11, lineHeight: 1.65 }}>
                      A few details are enough to get the conversation started.
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))' },
                    gap: { xs: 1.5, sm: 1.75 },
                    width: '100%',
                  }}
                >
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    autoComplete="name"
                    sx={fieldSx}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    autoComplete="email"
                    sx={fieldSx}
                  />

                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ ...fieldSx, gridColumn: '1 / -1' }}
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    minRows={3}
                    maxRows={7}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      ...fieldSx,
                      gridColumn: '1 / -1',
                      '& .MuiOutlinedInput-root': {
                        ...fieldSx['& .MuiOutlinedInput-root'],
                        alignItems: 'flex-start',
                        py: 1.25,
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    endIcon={<ArrowOutward />}
                    sx={{
                      gridColumn: '1 / -1',
                      minHeight: 50,
                      py: 1.1,
                      borderRadius: 1.5,
                      fontWeight: 700,
                      textTransform: 'none',
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                    }}
                  >
                    Open email draft
                  </Button>
                  <Typography sx={{ gridColumn: '1 / -1', mt: -0.75, color: 'text.secondary', fontSize: 10, textAlign: 'center' }}>
                    Your default email app will open with your message ready to send.
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;