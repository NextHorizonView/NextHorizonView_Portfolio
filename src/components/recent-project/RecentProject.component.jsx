import React, { useEffect, useState, useRef } from 'react'
import './RecentProject.styles.css'
import Header from '../home-section-header/Header.component';
import { motion } from 'framer-motion';
import { getRecentProjects } from '../../utils/sanity.utils';
import { useHover } from '../../contexts/Cursor.context';

const RecentProject = () => {
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getRecentProjects();
      console.log(projects);
      setRecentProjects(projects)
    }
    fetchData();
  }
    , [])

  return (
    recentProjects && recentProjects.length > 0 ? <section className='recent-project-section'>
      <div className='section-btn'>Projects</div>
      <Header>Our software <span className='italic'>just check it out</span></Header>
      <p className='recent-project-text'>Begin your software journey with Horizon View</p>
      <div className='recent-project-container'>
        <div className='recent-projrct-item'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='recent-project-header'
          >
            Recent Projects
          </motion.h2>
          {recentProjects[0] && <ProjectItem id={recentProjects[0].id} img={recentProjects[0].image} name={recentProjects[0].name} year={recentProjects[0].year} industry={recentProjects[0].industry} />}

          {recentProjects[1] && <ProjectItem id={recentProjects[1].id} img={recentProjects[1].image} name={recentProjects[1].name} year={recentProjects[1].year} industry={recentProjects[1].industry} />}
        </div>
        <div className='recent-projrct-item'>
          {recentProjects[2] && <ProjectItem id={recentProjects[2].id} img={recentProjects[2].image} name={recentProjects[2].name} year={recentProjects[2].year} industry={recentProjects[2].industry} />}

          {recentProjects[3] && <ProjectItem id={recentProjects[3].id} img={recentProjects[3].image} name={recentProjects[3].name} year={recentProjects[3].year} industry={recentProjects[3].industry} />}
        </div>
      </div>
    </section>
      :
      <></>
  )
}

export default RecentProject;

const ProjectItem = ({ img, name, year, industry, id }) => {
  const { setIsHovered } = useHover();
  const projectItemRef = useRef(null);

  const handleMouseEnter = () => {
    console.log('hovered');
    setIsHovered('project');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a href={`/projects/${id}`}>
      <motion.div
        ref={projectItemRef}
        initial={{ scale: 0.75 }}
        whileInView={{ rotateX: 0, scale: 1 }}
        viewport={{ once: true }}
        onMouseOut={handleMouseLeave}
        onMouseOver={handleMouseEnter}
        onClick={() => console.log('clicked')}
      >
        <div className='project-card'>
          <img src={img} alt='project1' className='project-img' />
          <h3>{name}</h3>
          <p className='project-item-text'>{year}<span />{industry}</p>
        </div>
      </motion.div>
    </a>
  );
};
