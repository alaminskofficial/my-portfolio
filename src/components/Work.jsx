import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, IconButton } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import workingPhoto from '../assets/mypicture.jpg';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'design'];

  const projects = [
    {
      title: 'Minuteserv User App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
      description: 'The customer-facing Minuteserv app makes it easy to browse local services, book a visit, pay securely, and follow booking progress from one place.',
      technologies: ['React Native', 'Expo', 'Node.js', 'Socket.IO', 'Razorpay'],
      github: 'https://github.com/alaminskofficial',
      live: 'https://play.google.com/store/apps/details?id=com.minuteserv',
    },
    {
      title: 'Minuteserv Partner App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85',
      description: 'A partner-focused Android app for receiving service jobs, managing bookings, communicating with customers, and keeping work moving while on the go.',
      technologies: ['React Native', 'Expo', 'Node.js', 'Socket.IO', 'Maps'],
      github: 'https://github.com/alaminskofficial',
      live: 'https://play.google.com/store/apps/details?id=com.minuteserv.partner',
    },
    {
      title: 'Minuteserv Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=85',
      description: 'The web marketplace helps customers explore available services, compare options, schedule a visit, and complete a booking through a clear desktop and mobile experience.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'REST APIs', 'Razorpay'],
      github: 'https://github.com/alaminskofficial',
      live: 'https://minuteserv.com',
    },
    {
      title: 'skMovies',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85',
      description: 'A full-stack movie discovery experience for exploring titles, searching a growing catalog, and finding what to watch next.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'TensorFlow'],
      github: 'https://github.com/alaminskofficial/fullstackLLD/tree/main/react/sk-movies',
      live: 'https://skmovies.vercel.app',
    },
    {
      title: 'Portfolio Website',
      category: 'design',
      image: workingPhoto,
      description: 'A personal portfolio shaped around clear storytelling, responsive layouts, and a direct path from selected work to contact.',
      technologies: ['React', 'Material-UI', 'Framer Motion', 'Three.js'],
      github: 'https://github.com/alaminskofficial/fullstackLLD/tree/main/react',
      live: 'https://alaminskofficial.vercel.app',
    },
    {
      title: "Weather Application",
      category: 'web',
      image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=85',
      description: "A weather dashboard that brings current local conditions together with city search in a simple, glanceable view.",
      technologies: ['React.js', 'Express', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/alaminskofficial/fullstackLLD/tree/main/react/weatherapp',
      live: 'https://sk-weather.vercel.app/',

    },
    {
      title: 'AI Code Review Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
      description: 'An AI-assisted code review concept focused on turning source changes into practical feedback about quality, consistency, and possible issues.',
      technologies: ['AI', 'Next.js', 'Python', 'PyTorch', 'AWS'],
      github: 'https://github.com/alaminskofficial/',
      live: 'https://example.com',
    },
    {
      title: 'AI Image Generator',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=85',
      description: 'An image-generation exploration for making prompt-led creative tools approachable through a focused web interface.',
      technologies: ['Next.js', 'Python', 'PyTorch', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85',
      description: 'A mobile product concept for bringing workout and nutrition tracking into one clear daily routine.',
      technologies: ['React Native', 'Firebase', 'TensorFlow Lite', 'GraphQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
      description: 'A collaborative task-management concept organized around visual workflow, shared progress, and timely updates.',
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
            A selection of full-stack builds, product ideas, and interface work. Each project starts with a real user need and a clear path through it.
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

        <Grid
          container
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={{ xs: 2, sm: 3 }}
          sx={{ px: { xs: 0, sm: 0 } }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.title} sx={{ display: 'flex' }}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%', height: '100%', display: 'flex' }}
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    style={{ width: '100%', height: '100%', display: 'flex' }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        width: '100%',
                        minWidth: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'background.paper',
                        overflow: 'hidden',
                        border: '1px solid rgba(204, 214, 246, 0.1)',
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.035 }}
                        transition={{ type: 'tween', duration: 0.35 }}
                        style={{ width: '100%', overflow: 'hidden' }}
                      >
                        <CardMedia
                          component="img"
                          height="180"
                          image={project.image}
                          alt={project.title}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = workingPhoto;
                          }}
                          sx={{
                            display: 'block',
                            objectFit: 'cover',
                            width: '100%',
                            aspectRatio: '16 / 9',
                          }}
                        />
                      </motion.div>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: Math.min(index, 4) * 0.06 }}
                        >
                          <Typography
                            variant="h6"
                            sx={{ mb: 1, fontWeight: 600, minHeight: { xs: 'auto', sm: 52 } }}
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              mb: 2,
                              color: 'text.secondary',
                              minHeight: { xs: 'auto', sm: 84 },
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 4,
                              overflow: 'hidden',
                            }}
                          >
                            {project.description}
                          </Typography>
                        </motion.div>
                        <Box sx={{ mb: 1.5, minHeight: { xs: 0, sm: 58 } }}>
                          {project.technologies.slice(0, 4).map((tech) => (
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
                          {project.technologies.length > 4 && (
                            <Chip
                              label={`+${project.technologies.length - 4}`}
                              size="small"
                              aria-label={`${project.technologies.length - 4} more technologies`}
                              sx={{ mr: 1, mb: 1 }}
                            />
                          )}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, mt: 'auto', pt: 1, borderTop: '1px solid rgba(204, 214, 246, 0.08)' }}>
                          <IconButton
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            aria-label={`View ${project.title} source code`}
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
                            aria-label={`Open ${project.title} project`}
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
