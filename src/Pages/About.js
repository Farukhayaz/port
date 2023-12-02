import React from 'react';

const About = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "80%", alignItems: "center" }}>
      {/* <div style={{ padding: "20px" }}>
        <img src="/images/me2.webp.jpg" alt="Profile" style={{ height: "300px", width: "300px", borderRadius: "20px" }} />
      </div> */}
      <div className='w-[50%]' style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>About Me</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          I am a passionate Full Stack Web Developer based in Lahore, Pakistan, with a keen enthusiasm for software development. As a driven and motivated individual, I bring over 1+ years of experience in crafting visually stunning websites, as well as developing impactful web and mobile applications. My expertise lies in frontend technologies and backend technologies, allowing me to deliver comprehensive solutions across the entire development spectrum.
        </p>

        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>

          I specialize in advanced JavaScript, jQuery, React.js, HTML, CSS and backend development using technologies such as Node.js, Express, and serverless architecture. I have a comprehensive understanding of MySQL databases, including MongoDB and Firebase, and I am proficient in deploying applications on Github. I take great pleasure in customizing development environments to optimize productivity and efficiency.
        </p>



      </div>
    </div >
  );
};

export default About;