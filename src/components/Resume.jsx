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
      description: "Build and maintain enterprise financial-services applications, with day-to-day work spanning product changes, production quality, performance, and scalable engineering practices.",
    },
    {
      period: "2023 - 2025",
      role: "Software Development Engineer",
      company: "Novopay Solutions pvt ltd.",
      description: "Delivered web application features and ongoing improvements, balancing new product needs with code quality, performance, and maintainability.",
    },
    {
      period: "2021 - 2023",
      role: "Software Engineer",
      company: "TrisysIt Services pvt ltd.",
      description: "Contributed to web application delivery with cross-functional teammates, taking part in implementation, code review, and iterative releases.",
    },
  ];

  const skillGroups = [
    {
      name: "Frontend",
      description: "Interfaces and client-side applications",
      skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML/CSS"],
    },
    {
      name: "Backend & APIs",
      description: "Services, integrations, and application logic",
      skills: ["Node.js", "Java", "SpringBoot", "Python", "RESTful APIs", "MERN"],
    },
    {
      name: "Data & Infrastructure",
      description: "Storage, messaging, and delivery foundations",
      skills: ["SQL/NoSQL", "Redis", "Kafka/RabbitMQ", "AWS", "Docker", "CI/CD", "Git"],
    },
    {
      name: "AI & Engineering",
      description: "Applied intelligence and dependable delivery",
      skills: ["AI-ML", "Gen AI", "Microservice", "Agile/Scrum" , " Software Design"],
    },
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
                      My background
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ color: "#00ff9d" }}
            >
              {activeTab} 
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
          <Box sx={{ flex: { xs: "0 0 auto", md: "0 0 200px" }, width: { xs: "100%", md: "auto" }, minWidth: 0 }}>
            <motion.div
              className="resume-tabs-list"
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
              <Box className="skills-view">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.75 }}>
                      Tools I work with
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      A practical mix across product development, platform engineering, and applied AI.
                    </Typography>
                  </Box>
                  <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                    {skillGroups.map((group, index) => (
                      <Grid item xs={12} sm={6} key={group.name}>
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: index * 0.06 }}
                          style={{ height: "100%" }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              height: "100%",
                              p: { xs: 2, sm: 2.5 },
                              bgcolor: "rgba(255, 255, 255, 0.045)",
                              border: "1px solid rgba(204, 214, 246, 0.1)",
                              borderRadius: 2,
                            }}
                          >
                            <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 1, mb: 0.5 }}>
                              <Typography variant="h6" sx={{ color: "text.primary", fontSize: { xs: "0.95rem", sm: "1rem" }, fontWeight: 700 }}>
                                {group.name}
                              </Typography>
                              <Typography variant="caption" sx={{ color: "#64ffda", fontWeight: 700 }}>
                                {String(group.skills.length).padStart(2, "0")}
                              </Typography>
                            </Box>
                            <Typography color="text.secondary" variant="caption" sx={{ display: "block", mb: 1.75, lineHeight: 1.5 }}>
                              {group.description}
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                              {group.skills.map((skill) => (
                                <Box
                                  component="span"
                                  key={skill}
                                  sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    minHeight: 30,
                                    px: 1,
                                    border: "1px solid rgba(204, 214, 246, 0.14)",
                                    borderRadius: 1,
                                    color: "#ccd6f6",
                                    fontSize: { xs: "0.65rem", sm: "0.7rem" },
                                    lineHeight: 1.3,
                                    overflowWrap: "anywhere",
                                  }}
                                >
                                  {skill}
                                </Box>
                              ))}
                            </Box>
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
                      I’m a software engineer who enjoys making complex product requirements understandable and useful. I work across interfaces, services, and data to deliver complete experiences rather than isolated features.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      I’m especially interested in applied AI and machine learning: using them where they make a product more helpful, while keeping the underlying experience clear and dependable.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      I value readable code, useful collaboration, and thoughtful trade-offs. I keep learning through hands-on projects and by exploring tools that can make software better for the people who use it.
                    </Typography>
                    <Typography variant="body1">
                      My approach is practical: understand the problem, choose a clear solution, and keep improving it through feedback.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      I’m open to thoughtful opportunities and collaborations where I can contribute, keep growing, and help a team ship useful software.
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
