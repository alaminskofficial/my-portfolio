import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
//import { Code as CodeIcon, Html as HtmlIcon, JavaScript as JavaScriptIcon, Language as LanguageIcon, DataObject as DataObjectIcon, Storage as StorageIcon } from '@mui/icons-material';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      period: '2022 - Present',
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Working on enterprise web applications.',
    },
    {
      period: '2020 - 2021',
      role: 'Freelance Web Developer',
      company: 'E-commerce Startup',
      description: 'Developed online shopping platforms.',
    },
    {
      period: '2019 - 2020',
      role: 'Teaching Assistant',
      company: 'Tech Academy',
      description: 'Assisted in web development courses.',
    },
  ];

  const skills = [
    { name: 'HTML/CSS',  category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React.js',  category: 'Frontend' },
    { name: 'Node.js',  category: 'Backend' },
    { name: 'Python',  category: 'Backend' },
    { name: 'MongoDB',  category: 'Backend' },
  ];

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
              Why hire me?
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ color: '#00ff9d' }}
            >
              My experience
            </motion.span>
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ flex: '0 0 200px' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                fullWidth
                variant={activeTab === 'experience' ? 'contained' : 'outlined'}
                onClick={() => setActiveTab('experience')}
                sx={{
                  mb: 2,
                  bgcolor: activeTab === 'experience' ? '#00ff9d' : 'transparent',
                  color: activeTab === 'experience' ? 'black' : 'white',
                  '&:hover': {
                    bgcolor: activeTab === 'experience' ? '#00ff9d' : 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                Experience
              </Button>
              <Button
                fullWidth
                variant={activeTab === 'education' ? 'contained' : 'outlined'}
                onClick={() => setActiveTab('education')}
                sx={{
                  mb: 2,
                  bgcolor: activeTab === 'education' ? '#00ff9d' : 'transparent',
                  color: activeTab === 'education' ? 'black' : 'white',
                  '&:hover': {
                    bgcolor: activeTab === 'education' ? '#00ff9d' : 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                Education
              </Button>
              <Button
                fullWidth
                variant={activeTab === 'skills' ? 'contained' : 'outlined'}
                onClick={() => setActiveTab('skills')}
                sx={{
                  mb: 2,
                  bgcolor: activeTab === 'skills' ? '#00ff9d' : 'transparent',
                  color: activeTab === 'skills' ? 'black' : 'white',
                  '&:hover': {
                    bgcolor: activeTab === 'skills' ? '#00ff9d' : 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                Skills
              </Button>
              <Button
                fullWidth
                variant={activeTab === 'about' ? 'contained' : 'outlined'}
                onClick={() => setActiveTab('about')}
                sx={{
                  bgcolor: activeTab === 'about' ? '#00ff9d' : 'transparent',
                  color: activeTab === 'about' ? 'black' : 'white',
                  '&:hover': {
                    bgcolor: activeTab === 'about' ? '#00ff9d' : 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                About me
              </Button>
            </motion.div>
          </Box>

        <Box sx={{ flex: 1 }}>
            {activeTab === 'experience' && (
              <Box>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          mb: 2,
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1
                        }}
                      >
                        <Typography variant="h6" color="#00ff9d">
                          {exp.period}
                        </Typography>
                        <Typography variant="h5">
                          {exp.role}
                        </Typography>
                        <Typography color="text.secondary">
                          {exp.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {exp.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
                </motion.div>
              </Box>
            )}

            {activeTab === 'skills' && (
              <Box>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Grid container spacing={2}>
                    {skills.map((skill, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              p: 3,
                              bgcolor: 'rgba(255, 255, 255, 0.05)',
                              borderRadius: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: 2
                            }}
                          >
                            <Box
                              sx={{
                                color: '#00ff9d',
                                transform: 'scale(1.5)'
                              }}
                            >
                              {skill.icon}
                            </Box>
                            <Typography variant="h6">
                              {skill.name}
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                              {skill.category}
                            </Typography>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Box>
            )}

            {activeTab === 'education' && (
              <Box>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: 2
                    }}
                  >
                    <Typography variant="h6" color="#00ff9d" gutterBottom>
                      2018 - 2022
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Bachelor of Computer Science
                    </Typography>
                    <Typography color="text.secondary">
                      University of Technology
                    </Typography>
                  </Paper>
                </motion.div>
              </Box>
            )}

            {activeTab === 'about' && (
              <Box>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: 2
                    }}
                  >
                    <Typography variant="body1" paragraph>
                      I am a passionate developer with a strong foundation in web technologies and a keen eye for detail. My journey in software development has equipped me with both technical expertise and problem-solving skills.
                    </Typography>
                    <Typography variant="body1">
                      I believe in writing clean, maintainable code and creating intuitive user experiences. When I'm not coding, I enjoy learning new technologies and contributing to open-source projects.
                    </Typography>
                  </Paper>
                </motion.div>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Resume;