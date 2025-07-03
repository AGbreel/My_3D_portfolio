import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const HireMe = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Get in Touch</p>
                <h2 className={styles.sectionHeadText}>Hire Me.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.3, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm currently open to new opportunities, whether full-time, part-time, or freelance.

                If you're looking for a committed Frontend Developer who works with React, Next.js, and modern JavaScript technologies, I'd love to be part of your team.

                Let's connect and explore how I can add value to your company or project, <br />
                feel free to contact me through any of the platforms below.
            </motion.p>

            <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className="mt-10 flex flex-wrap gap-4"
            >
                <Button
                    variant="outlined"
                    href="/MY-CV.pdf"
                    target="_blank"
                    sx={{
                        borderColor: "#00FFFF",
                        color: "#00FFFF",
                        "&:hover": {
                            backgroundColor: "#00FFFF",
                            color: "#000",
                        },
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    Download CV
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EmailIcon />}
                    href="mailto:ahmedgbreel47@gmail.com"
                    sx={{ textTransform: "none", fontWeight: 600 }}
                >
                    Email
                </Button>

                <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    href="https://wa.me/201147211430"
                    target="_blank"
                    sx={{
                        backgroundColor: "#25D366",
                        "&:hover": { backgroundColor: "#1ebc59" },
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    WhatsApp
                </Button>

                <Button
                    variant="contained"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/ahmed-gbreel-8465b0352/"
                    target="_blank"
                    sx={{
                        backgroundColor: "#0A66C2",
                        "&:hover": { backgroundColor: "#0956a2" },
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    LinkedIn
                </Button>

                <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/AGbreel"
                    target="_blank"
                    sx={{
                        backgroundColor: "#333",
                        "&:hover": { backgroundColor: "#222" },
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    GitHub
                </Button>
            </motion.div>
        </>
    );
};

export default SectionWrapper(HireMe, "hireMe");
