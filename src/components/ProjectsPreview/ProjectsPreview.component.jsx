import React, { useEffect, useState } from 'react';
import './ProjectsPreview.styles.css';
import Banner from '../../components/Banner/Banner.component';
import Header from '../../components/home-section-header/Header.component';
import BookCall from '../../components/book-call/BookCall.component';
import Footer from '../../components/Footer/Footer.component';
import { getProjects } from '../../utils/sanity.utils';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsPreview = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const projects = await getProjects();
            setProjects(projects)
        }
        fetchData();
    }, [])

    return (
        <div className='project-page'>
            <div className='project-content'>
                <Banner>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: '-200px', once: true }}
                        transition={{ duration: 0.3 }}
                        className='banner-header'>Explore our <span className='italic'>Award</span> winning work and case studies</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >Explore our celebrated projects showcasing excellence in web design and branding</motion.p>
                </Banner>

                <section className='projects-section'>
                    <div className='projects-content'>
                        <div className='project-sticky-text'>
                            [Case-Study]
                        </div>
                        <div className='projects-content-container'>
                            <p className='project-content-header'>Award winning designs for clients and world class startups.</p>
                            {projects.map((project, index) => (
                                <ProjectItem key={index} img={project.image} name={project.name} year={project.year} industry={project.industry} id={project.id} />
                            ))}
                        </div>
                    </div>
                </section>


                <BookCall>
                    <Header>Ready to scale your brand to <span className='italic'>new heights?</span></Header>
                    <p>If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you're in the right place.</p>
                </BookCall>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsPreview;


const ProjectItem = ({ img, name, year, industry, id }) => {
    return (
        <Link to={`/projects/${id}`} >
            <div className='project-content-item'>
                <img src={img} className='project-item-img' alt='' />
                <p className='project-item-name'>{name}</p>
                <p className='project-item-content'>{year} · {industry}</p>
                <p></p>
            </div>
        </Link>
    )
}