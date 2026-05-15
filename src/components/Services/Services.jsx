import React, { forwardRef, useRef } from "react";
import AnimatedCounter from "../Counter/Counter";
import { motion, useInView } from "framer-motion";

import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";

import "./Services.css";

const Services = forwardRef((props, ServicesRef) => {
  const animationRef = useRef(null); // Another ref specific to this component
  const isInView = useInView(animationRef, { once: false }); // Trigger animation once when in view

  return (
    <section className="container" ref={ServicesRef}>
      <motion.div
        className="wrapper serviceWrapper"
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
        <div className="freelancer-card-wrapper">
          <div style={{ fontSize: 50, color: "#fff", fontWeight: 100 }}>
            Work With Me on
          </div>
          <div className="freelancer-card-section">
            <a href="https://www.fiverr.com/raj4________?public_mode=true">
              <div className="freelancer-card">
                <div className="freelancer-card-brand-logo">
                  <TbBrandFiverr
                    style={{ color: "#00b22d", fontSize: "36px" }}
                  />
                </div>
                <div className="freelancer-card-stats">
                  <div>
                    <strong>Completed Jobs</strong>{" "}
                    <AnimatedCounter targetNumber={0} duration={3} />
                  </div>
                  <div>
                    <strong>Ratings</strong> N/A
                  </div>
                </div>
              </div>
            </a>
            <a href="https://www.upwork.com/freelancers/beladiyaraj">
              <div className="freelancer-card">
                <div className="freelancer-card-brand-logo">
                  <FaSquareUpwork
                    style={{ color: "#fff", fontSize: "36px", fontWeight: 100 }}
                  />
                </div>
                <div className="freelancer-card-stats">
                  <div>
                    <strong>Completed Jobs</strong>{" "}
                    <AnimatedCounter targetNumber={21} duration={3} />
                  </div>
                  <div>
                    <strong>Job Success Score</strong> 90%
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
    <h2>OR</h2>
        <div className="phone-and-email">
          <div style={{ fontSize: 50, color: "#fff", fontWeight: 100 }}>
            Directly approach me via
          </div>
          <div className="contact-buttons">
            <a
              href="mailto:rajbeladiya55@gmail.com"
              className="contact-button email-button"
            >
              rajbeladiya55@gmail.com
            </a>
            <a href="tel:+919313288221" className="contact-button phone-button">
              +919313288221
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

export default Services;
