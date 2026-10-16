import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, IconButton } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'design'];

  const projects = [
    {
      title:'minuteServ',
      category: 'web',
      image: 'https://picsum.photos/800/600?random=6',
      description: 'A service marketplace platform connecting users with local service providers for various tasks and services.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
      github:'https://github.com/alaminskofficial',
      live:'https://minuteserv.com',
    },
    {
      title: 'minuteServ android app',
      category: 'mobile',
      image: 'https://picsum.photos/800/600?random=8',
      description: 'A mobile application for the minuteServ service marketplace, allowing users to book services and manage their accounts on the go.',
      technologies: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
      github:'https://github.com/alaminskofficial',
      live:'https://play.google.com/store/apps/details?id=com.minuteserv',
    },
    {
      title: 'skMovies',
      category: 'web',
      image:'https://fullstack-lld-git-main-alaminskofficials-projects.vercel.app/static/media/footer-bg.67e95f05e76a8cebf7e2.jpg',
      backupImage: 'https://picsum.photos/800/600?random=1',
      description: 'A full-stack movie database application with personalized recommendations and advanced search features. ',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'TensorFlow'],
      github: 'https://github.com/alaminskofficial/fullstackLLD/tree/main/react/sk-movies',
      live: 'https://skmovies.vercel.app',
    },
    {
      title: 'Portfolio Website',
      category: 'design',
      image: 'https://picsum.photos/800/600?random=3',
      description: 'Modern portfolio website with dark theme, smooth animations, and responsive design.',
      technologies: ['React', 'Material-UI', 'Framer Motion', 'Three.js'],
      github: 'https://github.com/alaminskofficial/fullstackLLD/tree/main/react',
      live: 'https://alaminskofficial.vercel.app',
    },
    {
      title : "Weather Application",
      category: 'web',
      image : 'https://picsum.photos/800/600?random=7',
      description : "Weather application to fetch the weather data in current location and search based city ",
      technologies: ['React.js', 'Express', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/alaminskofficial/fullstackLLD/tree/main/react/weatherapp',
      live: 'https://sk-weather.vercel.app/',

    },
    {
      title: 'AI Code Review Platform',
      category: 'web',
      image: 'https://picsum.photos/800/600?random=5',
      description: 'Web platform that uses AI to analyze and provide feedback on code quality, style, and potential bugs.',
      technologies: ['AI', 'Next.js', 'Python', 'PyTorch', 'AWS'],
      github: 'https://github.com/alaminskofficial/',
      live: 'https://example.com',
    },
    {
      title: 'AI Image Generator',
      category: 'web',
      image: 'https://picsum.photos/800/600?random=5',
      description: 'Web application that generates unique artwork using state-of-the-art AI models.',
      technologies: ['Next.js', 'Python', 'PyTorch', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://picsum.photos/800/600?random=2',
      description: 'Mobile app for tracking workouts and nutrition with personalized AI coaching and social features.',
      technologies: ['React Native', 'Firebase', 'TensorFlow Lite', 'GraphQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management System',
      category: 'web',
      image: 'https://picsum.photos/800/600?random=4',
      description: 'Project management tool with real-time updates, Kanban boards, and team collaboration features.',
      technologies: ['React.js', 'Express', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/alaminskofficial/fullstackLLD/tree/main/react/todo-app',
      live: 'https://example.com',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg"
       display="flex"
       justifyContent="center"
       alignItems="center"
       mx="auto"
       sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
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
            My Work
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Explore my latest projects and creative works
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 1.5, sm: 2 },
              mb: { xs: 6, md: 8 },
              flexWrap: 'wrap',
              px: { xs: 1, sm: 0 }
            }}
          >
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === category ? 'contained' : 'outlined'}
                  onClick={() => setFilter(category)}
                  sx={{
                    textTransform: 'capitalize',
                    px: 3,
                    minWidth: '100px',
                  }}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <Grid container 
         justifyContent={"center"}
         alignItems={"center"}
         spacing={{ xs: 3, sm: 4 }} sx={{ px: { xs: 1, sm: 0 } }}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'background.paper',
                        overflow: 'hidden',
                      }}
                    >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'tween', duration: 0.5 }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        onError={(e) => {
                          e.target.src = project.backupImage || 'https://picsum.photos/800/600?random=1';
                        }}
                        sx={{
                          objectFit: 'cover',
                        }}
                      />
                    </motion.div>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ mb: 1, fontWeight: 600 }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ mb: 2, color: 'text.secondary' }}
                        >
                          {project.description}
                        </Typography>
                      </motion.div>
                      <Box sx={{ mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            style={{ display: 'inline-block' }}
                          >
                            <Chip
                              label={tech}
                              size="small"
                              sx={{ mr: 1, mb: 1 }}
                            />
                          </motion.div>
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{
                            color: 'text.primary',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          <GitHub />
                        </IconButton>
                        <IconButton
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{
                            color: 'text.primary',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          <Launch />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
