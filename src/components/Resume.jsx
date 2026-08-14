import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
//import { Code as CodeIcon, Html as HtmlIcon, JavaScript as JavaScriptIcon, Language as LanguageIcon, DataObject as DataObjectIcon, Storage as StorageIcon } from '@mui/icons-material';

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      period: "2025 - Present",
      role: "Specialist Software Engineer",
      company: "Societe Generale Global Solution Centre",
      description: "Developing and maintaining enterprise-level applications for financial services, focusing on performance optimization and scalability.",
    },
    {
      period: "2023 - 2025",
      role: "Software Development Engineer",
      company: "Novopay Solutions pvt ltd.",
      description: "Worked on developing and maintaining web applications, implementing new features, and optimizing existing code for better performance.",
    },
    {
      period: "2021 - 2023",
      role: "Software Engineer",
      company: "TrisysIt Services pvt ltd.",
      description: "Contributed to the development of web applications, collaborated with cross-functional teams, and participated in code reviews to ensure high-quality software delivery.",
    },
  ];

  const skills = [
    { name: "AI-ML", category: "Machine Learning" },
    { name:"Gen AI", category:"Artificial Intelligence"},
    { name: "Python", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "SpringBoot", category: "Backend" },
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Next.js", category: "Full Stack" },
    { name: "MERN" ,category :"Full Stack"},
    { name: "HTML/CSS", category: "Frontend" },
    { name: "SQL/NoSQL", category: "Database" },
    { name: "Redis", category: "Cache" },
    { name: "Kafka/RabbitMQ", category: "Messaging Queue" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "Containerization" },
    { name: "Git", category: "Version Control" },
    { name: "Agile/Scrum", category: "Methodology" },
    { name: "CI/CD", category: "DevOps" },
    { name: "RESTful APIs", category: "API" },
    {name :"Microservice", category:"Architecture"}
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
        minHeight: "100vh",
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
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
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
              style={{ color: "#00ff9d" }}
            >
              My experience
            </motion.span>
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: "0 0 200px" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                fullWidth
                variant={activeTab === "experience" ? "contained" : "outlined"}
                onClick={() => setActiveTab("experience")}
                sx={{
                  mb: 2,
                  bgcolor:
                    activeTab === "experience" ? "#00ff9d" : "transparent",
                  color: activeTab === "experience" ? "black" : "white",
                  "&:hover": {
                    bgcolor:
                      activeTab === "experience"
                        ? "#00ff9d"
                        : "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Experience
              </Button>
              <Button
                fullWidth
                variant={activeTab === "education" ? "contained" : "outlined"}
                onClick={() => setActiveTab("education")}
                sx={{
                  mb: 2,
                  bgcolor:
                    activeTab === "education" ? "#00ff9d" : "transparent",
                  color: activeTab === "education" ? "black" : "white",
                  "&:hover": {
                    bgcolor:
                      activeTab === "education"
                        ? "#00ff9d"
                        : "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Education
              </Button>
              <Button
                fullWidth
                variant={activeTab === "skills" ? "contained" : "outlined"}
                onClick={() => setActiveTab("skills")}
                sx={{
                  mb: 2,
                  bgcolor: activeTab === "skills" ? "#00ff9d" : "transparent",
                  color: activeTab === "skills" ? "black" : "white",
                  "&:hover": {
                    bgcolor:
                      activeTab === "skills"
                        ? "#00ff9d"
                        : "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Skills
              </Button>
              <Button
                fullWidth
                variant={activeTab === "about" ? "contained" : "outlined"}
                onClick={() => setActiveTab("about")}
                sx={{
                  bgcolor: activeTab === "about" ? "#00ff9d" : "transparent",
                  color: activeTab === "about" ? "black" : "white",
                  "&:hover": {
                    bgcolor:
                      activeTab === "about"
                        ? "#00ff9d"
                        : "rgba(255,255,255,0.1)",
                  },
                }}
              >
                About me
              </Button>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1 }}>
            {activeTab === "experience" && (
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
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          borderRadius: 2,
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Typography variant="h6" color="#00ff9d">
                          {exp.period}
                        </Typography>
                        <Typography variant="h5">{exp.role}</Typography>
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

            {activeTab === "skills" && (
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
                              bgcolor: "rgba(255, 255, 255, 0.05)",
                              borderRadius: 2,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                color: "#00ff9d",
                                transform: "scale(1.5)",
                              }}
                            >
                              {skill.icon}
                            </Box>
                            <Typography variant="h6">{skill.name}</Typography>
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

            {activeTab === "education" && (
              <Box sx={{ flex: 1 }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {[
                    {
                      period: "2017 - 2021",
                      degree: "Bachelor of Engineering",
                      institution: "Jadavpur University",
                    },
                    {
                      period: "2024 - 2026",
                      degree: "Master of Science in Computer Science",
                      institution: "Woolf University (Scaler Neovarsity)",
                    },
                  ].map((education, index) => (
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
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="h6" color="#00ff9d" gutterBottom>
                          {education.period}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                          {education.degree}
                        </Typography>
                        <Typography color="text.secondary">
                          {education.institution}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
                </motion.div>
              </Box>
            )}

            {activeTab === "about" && (
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
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      borderRadius: 2,
                    }}
                  >
                     <Typography variant="body1" paragraph>
                      As a dedicated software Engineer, I thrive on transforming complex problems into elegant solutions. My expertise spans across various technologies, allowing me to craft seamless and intuitive user experiences.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      I am also deeply passionate about the field of Artificial Intelligence and Machine Learning. I have been actively exploring AI technologies, including <b>Generative AI</b>, and have implemented several projects that leverage these cutting-edge tools to solve real-world problems.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      I am committed to writing clean, efficient code and continuously improving my skills. Outside of work, I am passionate about exploring new technologies and contributing to open-source projects, which keeps me at the forefront of industry trends.
                    </Typography>
                    <Typography variant="body1">
                      My journey in software development is driven by a love for learning and a desire to make a meaningful impact through technology.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      I am always open to new opportunities and collaborations that challenge me to grow and innovate. Let's connect and create something amazing together!
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
};

export default Resume;
