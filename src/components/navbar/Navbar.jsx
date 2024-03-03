import "./navbar.scss"
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const openLinkedIn = () => {
        // Replace 'your-linkedin-profile-url' with your actual LinkedIn profile URL
        const linkedinURL = 'http://www.linkedin.com/in/jessica-goldrin';
        window.open(linkedinURL, '_blank');
    };

    const openResume = () => {
        // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
        const pdfURL = '/Resume 2023.pdf';
        window.open(pdfURL, '_blank');
    };

    return (
        <div className="navbar">
            <div className="wrapper">
                <ScrollLink to="Homepage" spy={true} smooth={true} offset={-70} duration={500}>
                    <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Jessica Goldrin</motion.span>
                </ScrollLink>
                <div className="navItems">
                    <motion.button className="navItem" onClick={openResume} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                        RESUME
                    </motion.button>
                    <ScrollLink to="Work Experience" spy={true} smooth={true} offset={-70} duration={500}>
                        <motion.button className="navItem" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>WORK EXPERIENCE</motion.button>
                    </ScrollLink>
                    <ScrollLink to="Side Projects" spy={true} smooth={true} offset={-70} duration={500}>
                        <motion.button className="navItem" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>PROJECTS</motion.button>
                    </ScrollLink>
                    <ScrollLink to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
                        <motion.button className="navItem" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>CONTACT</motion.button>
                    </ScrollLink>
                    <motion.button className="navItem" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                        <div className="social">
                            <a href="#" onClick={openLinkedIn}><img src="/linkedin.png" alt="" /></a>
                        </div>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Navbar