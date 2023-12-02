import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <section className="border bg-gray-900 text-white" style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ margin: "auto", maxWidth: "80%", padding: "0 20px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <motion.img
            src="/images/me2.webp.jpg"
            alt="Profile"
            style={{ height: "200px", width: "200px", borderRadius: "100%" }}
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            transition={{ duration: 0.8 }}
          />
        </div>
        <motion.div
          style={{ marginBottom: "20px", marginLeft: "20px" }}
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>My name is Farukh Ayaz</h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>I'm a Frontend / Fullstack developer with 1 year of experience. My goal is to advance my career and participate in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!</p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            flex-direction: column;
            align-items: center;
          }

          div {
            margin: 0;
            padding: 0;
            max-width: 100%;
            width: 100%;
          }

          img {
            height: 150px;
            width: 150px;
          }

          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;