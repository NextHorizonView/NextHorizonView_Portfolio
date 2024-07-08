import React from 'react'
import './RecentProject.styles.css'
import Header from '../home-section-header/Header.component';
import ProjectImg1 from '../../assets/projects1.png'
import ProjectImg2 from '../../assets/projects2.png'
import ProjectImg3 from '../../assets/projects3.png'
import ProjectImg4 from '../../assets/projects4.png'
import { motion } from 'framer-motion';

const projectData = [
  {
    img: ProjectImg1,
    name: 'City 2 Guide',
    year: 2024,
    genre: 'Traveling website'
  },
  {
    img: ProjectImg2,
    name: 'City 2 Guide',
    year: 2024,
    genre: 'Traveling website'
  },
  {
    img: ProjectImg3,
    name: 'City 2 Guide',
    year: 2024,
    genre: 'Traveling website'
  },
  {
    img: ProjectImg4,
    name: 'City 2 Guide',
    year: 2024,
    genre: 'Traveling website'
  },
]

const RecentProject = () => {
  return (
    <section className='recent-project-section'>
      <div className='section-btn'>Projects</div>
      <Header>Our designs <span className='italic'>just check it out</span></Header>
      <p className='recent-project-text'>Begin your design journey with avocado tech.</p>
      <div className='recent-project-container'>
        <div className='recent-projrct-item'>
          <motion.h2 initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: '-200px', once: true }} className='recent-project-header'>Recent Projects</motion.h2>
          <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: '-200px', once: true }} className='project-card'>
            <img src={projectData[0].img} alt='project1' className='project-img' />
            <h3>{projectData[0].name}</h3>
            <p>{projectData[0].year}.{projectData[0].genre}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: '-200px', once: true }} className='project-card'>
            <img src={projectData[1].img} alt='project1' className='project-img' />
            <h3>{projectData[0].name}</h3>
            <p>{projectData[0].year}.{projectData[0].genre}</p>
          </motion.div>
        </div>
        <div className='recent-projrct-item'>
          <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: '-200px', once: true }} className='project-card'>
            <img src={projectData[2].img} alt='project1' className='project-img' />
            <h3>{projectData[0].name}</h3>
            <p>{projectData[0].year}.{projectData[0].genre}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: '-200px', once: true }} className='project-card'>
            <img src={projectData[3].img} alt='project1' className='project-img' />
            <h3>{projectData[0].name}</h3>
            <p>{projectData[0].year}.{projectData[0].genre}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RecentProject;