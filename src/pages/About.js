import React from 'react';
import ShinyText from '../Reactbits/ShinyText';
import SpotlightCard from '../Reactbits/SpotlightCard';
import './About.css';

const About = () => {
  return (
    <div class="home">
      <div className="about-container">
        <ShinyText text="
I am a Software Developer and AI Specialist with a background that combines creativity, technical discipline, and strategic vision. My experience spans the development of web and mobile applications, UI/UX design, and digital projects focused on delivering efficient and scalable technological solutions.

I have worked on projects such as Spotify Clone, where I implemented CRUD functionality and a modern user experience using React, TypeScript, TailwindCSS, and MongoDB. I also developed Snacks Olivo App, a mobile application for product management and online sales, integrating Firebase and Stripe, which increased the company’s sales performance by more than 30%. Additionally, I created the Google Keep App, a notes system with personalized reminders, and my own Portfolio App, an interactive platform showcasing my projects and skills.

My profile also includes experience in creative and technical environments, such as developing video game mods using Java and C++, which strengthened my problem-solving abilities in complex systems. Furthermore, I have worked on digital design and multimedia projects, applying tools such as Photoshop, Blender, and FL Studio for branding, music production, and content creation.

Academically, I am currently pursuing a Bachelor’s Degree in Psychology with a specialization in IT/AI at Universidad Vizcaya de las Américas (2023–2027), and I previously studied Mechatronics Engineering at Universidad Tecnológica de Camargo (2019–2020). My education is complemented by certifications, including Meta’s Database Engineering Certificate, Google’s Data Science Certificate (in progress), and additional training in programming and cloud computing.

I am recognized for my adaptability to dynamic technological environments, teamwork, and collaborative leadership. My professional approach focuses on delivering measurable results through technological solutions that generate real value for companies and projects, always maintaining a high professional standard with a creative perspective." disabled={false} speed={2} className='about-custom-class' />
      </div>
    </div>
  );
};

export default About;
