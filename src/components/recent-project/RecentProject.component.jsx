import React, { useEffect, useState } from 'react'
import './RecentProject.styles.css'
import Header from '../home-section-header/Header.component';
import ProjectImg1 from '../../assets/projects1.png'
import ProjectImg2 from '../../assets/projects2.png'
import ProjectImg3 from '../../assets/projects3.png'
import ProjectImg4 from '../../assets/projects4.png'
import { motion } from 'framer-motion';
import { getRecentProjects } from '../../../utils/sanity.utils';

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

  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getRecentProjects();
      setRecentProjects(projects)
    }
    fetchData();
  }
    , [])

  return (
    <section className='recent-project-section'>
      <div className='section-btn'>Projects</div>
      <Header>Our designs <span className='italic'>just check it out</span></Header>
      <p className='recent-project-text'>Begin your design journey with avocado tech.</p>
      <div className='recent-project-container'>
        <div className='recent-projrct-item'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ margin: '-200px', once: true }}
            transition={{ duration: 0.5 }}
            className='recent-project-header'
          >
            Recent Projects
          </motion.h2>
          {recentProjects[0] && <ProjectItem img={recentProjects[0].image} name={recentProjects[0].name} year={recentProjects[0].year} genre={recentProjects[0].genre} />}

          {recentProjects[1] && <ProjectItem img={recentProjects[1].image} name={recentProjects[1].name} year={recentProjects[1].year} genre={recentProjects[1].genre} />}
        </div>
        <div className='recent-projrct-item'>
          {recentProjects[2] && <ProjectItem img={recentProjects[2].image} name={recentProjects[2].name} year={recentProjects[2].year} genre={recentProjects[2].genre} />}

          {recentProjects[3] && <ProjectItem img={recentProjects[3].image} name={recentProjects[3].name} year={recentProjects[3].year} genre={recentProjects[3].genre} />}
        </div>
      </div>
    </section>
  )
}

export default RecentProject;

const ProjectItem = ({ img, name, year, genre }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: '-200px', once: true }} className='project-card'>
      <img src={img} alt='project1' className='project-img' />
      <h3>{name}</h3>
      <p>{year}.{genre}</p>
    </motion.div>
  )
}

