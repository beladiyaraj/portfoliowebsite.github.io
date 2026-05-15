import React, { forwardRef, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import vixcLogo from "../../assets/images/vixclogo.png";

import "./Projects.css";

const Projects = forwardRef((props, ProjectRef) => {
  const [hoveringIndex, setHoveringIndex] = useState(null); // Track which div is being hovered
  const animationRef = useRef(null); // Another ref specific to this component
  const isInView = useInView(animationRef, { once: false }); // Trigger animation once when in view

  const handleMouseEnter = (index) => {
    setHoveringIndex(index); // Set the hovered div's index
  };

  const handleMouseLeave = () => {
    setHoveringIndex(null); // Reset the hover state
  };

  const projects = [
    {
      title: "VIXC : AI Photos Organiser",
      myRole: "AWS Cloud Engineer",
      imgSrc: vixcLogo,
      description:
        "VIXC is an AI-powered photo organizer designed to make managing photos simple and efficient. The goal was to help users find, sort, and share their photos effortlessly using AI for automatic tagging, smart albums, and natural language search. Client Goals: Simplify photo organization with AI-driven sorting. Enable easy photo searches using natural language. Create smart, auto-generated photo albums. Challenges & Solutions: Challenge: Handling large photo collections. Solution: Scalable cloud infrastructure. Challenge: Ensuring accurate tagging and search. Solution: Fine-tuned AI models. Challenge: Balancing advanced features with a simple user experience. Solution: Designed a clean, user-friendly interface. The result is an intuitive platform that delivers a seamless photo management experience, meeting the client’s vision of making memories easy to find and enjoy.",
    },
    // {
    //   title: "Project 2",
    //   myRole: "Whtever",
    //   imgSrc: vixcLogo,
    //   description: "description",
    // }, // Example second project
  ];

  return (
    <section className="container" ref={ProjectRef}>
      <motion.div
        className="wrapper projectsWrapper"
        ref={animationRef} // Combine homeRef and localRef
        initial={{ opacity: 0, y: 0 }} // Initial animation state
        animate={
          isInView
            ? {
                x: 0,
                opacity: 1,
                transition: {
                  default: { type: "spring" },
                  opacity: { ease: "linear" },
                },
              }
            : {}
        } // Animate when in view
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="project-item"
          >
            <p className="project-title">{project.title}</p>
            <div
              className="hover-box"
              style={{
                display: hoveringIndex === index ? "flex" : "none",
              }}
            >
              <motion.img
                className="project-logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveringIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                src={project.imgSrc}
                alt={`${project.title} Logo`}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
});

export default Projects;
