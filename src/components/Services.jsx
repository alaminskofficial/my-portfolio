import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import { Code, Brush, PhoneIphone, Speed, Close } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: 'Software Development',
      description: 'Creating responsive and dynamic web applications using modern frameworks and best practices.',
      details: ['Responsive Design', 'SEO Optimization', 'E-commerce Solutions']
    },
    {
      icon: <Brush />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces with a focus on user experience and accessibility.',
      details: ['Wireframing', 'Prototyping', 'User Testing']
    },
    {
      icon: <PhoneIphone />,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications that deliver seamless user experiences.',
      details: ['iOS & Android', 'React Native', 'Flutter']
    },
    {
      icon: <Speed />,
      title: 'Performance Optimization',
      description: 'Optimizing applications for maximum speed, efficiency, and scalability.',
      details: ['Code Review', 'Load Testing', 'Caching Strategies']
    }
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
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ color: '#00ff9d' }}
            >
              Services
            </motion.span>
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOpenDialog(service)}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                      '& .service-icon': {
                        color: '#00ff9d',
                        transform: 'scale(1.2)',
                      }
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      gap: 3
                    }}
                  >
                    <Box
                      className="service-icon"
                      sx={{
                        color: 'white',
                        transform: 'scale(1.5)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        textAlign: 'center'
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        textAlign: 'center',
                        flexGrow: 1
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <AnimatePresence>
          {selectedService && (
            <Dialog
              open={Boolean(selectedService)}
              onClose={handleCloseDialog}
              maxWidth="sm"
              fullWidth
              disableEscapeKeyDown={false}
              onBackdropClick={handleCloseDialog}
              sx={{
                '& .MuiBackdrop-root': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)'
                },
                '& .MuiDialog-paper': {
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                }
              }}
              PaperProps={{
                component: motion.div,
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20 },
                transition: { duration: 0.3 },
                sx: {
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  backgroundImage: 'none',
                  p: { xs: 1, sm: 2 },
                  maxWidth: '95vw',
                  margin: '16px'
                }
              }}
            >
              <DialogTitle sx={{ pr: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {selectedService.icon}
                  <Typography variant="h6">{selectedService.title}</Typography>
                </Box>
                <IconButton
                  onClick={handleCloseDialog}
                  aria-label="close"
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'text.primary',
                      backgroundColor: 'action.hover'
                    }
                  }}
                >
                  <Close />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                  {selectedService.description}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
                  What's included:
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {selectedService.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      style={{ marginBottom: '16px' }}
                    >
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.primary',
                          lineHeight: 1.6
                        }}
                      >
                        {detail}
                      </Typography>
                    </motion.li>
                  ))}
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
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