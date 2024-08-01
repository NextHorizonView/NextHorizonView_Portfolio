import React, { useEffect, useState } from 'react'
import './ProjectDetail.styles.css'
import { getProjectById } from '../../utils/sanity.utils';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer.component';
import BookCall from '../book-call/BookCall.component'
import Header from '../home-section-header/Header.component';
import { motion } from 'framer-motion';
import ScrollToTop from '../scroll-to-top/ScrollToTopComponent';

const ProjectDetail = () => {
    const { id } = useParams();
    const [projectData, setProjectData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const projects = await getProjectById(id);
            if (projects.length > 0) setProjectData(projects[0])
        }
        fetchData();
    }, []);

    return (
        <div className='project-detail'>
            <div className='project-detail-content'>
                {projectData && <>
                    <section className='project-detail-header'>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='project-name'>{projectData?.name}</motion.h1>
                        <hr />
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='project-header-content'>
                            <div>
                                <p>Year</p>
                                <p className='project-header-item'>{projectData?.year}</p>
                            </div>
                            <div>
                                <p>Industry</p>
                                <p className='project-header-item'>{projectData?.industry}</p>
                            </div>
                            <div>
                                <p>Service</p>
                                <p className='project-header-item'>{projectData?.service}</p>
                            </div>
                            <div className='project-header-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="white" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></path></svg>
                                <a href={projectData?.link} target='_blank' rel='noreferrer'>Visit Website</a>
                            </div>
                        </motion.div>
                    </section>
                    <section className='project-info'>
                        <motion.div

                            initial={{ scale: 0.75, rotateX: 50 }}
                            whileInView={{ scale: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='project-info-odd'>
                            <img src={projectData?.image1} alt={projectData?.name} />
                        </motion.div>
                        <div className='project-info-even'>
                            <h4>About Project:</h4>
                            <p>{projectData?.about}</p>
                        </div>
                        <motion.div
                            initial={{ scale: 0.75, rotateX: 50 }}
                            whileInView={{ scale: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='project-info-odd'>
                            <img src={projectData?.image2} alt={projectData?.name} />
                        </motion.div>
                        <div className='project-info-even'>
                            <h4>Challenges:</h4>
                            <p>{projectData?.challenges}</p>
                        </div>
                        <div className='project-info-even'>
                            <motion.div
                                initial={{ scale: 0.75, rotateX: 50 }}
                                whileInView={{ scale: 1, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}>
                                <img src={projectData?.image3} alt={projectData?.name} />
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0.75, rotateX: 50 }}
                                whileInView={{ scale: 1, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}>
                                <img src={projectData?.image4} alt={projectData?.name} />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ scale: 0.75, rotateX: 50 }}
                            whileInView={{ scale: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }} className='project-info-odd'>
                            <img src={projectData?.image5} alt={projectData?.name} />
                        </motion.div>
                        <div className='project-info-even'>
                            <h4>Results:</h4>
                            <p>{projectData?.results}</p>
                        </div>
                    </section>
                </>}
                <BookCall>
                    <Header>Ready to scale your brand to <span className='italic'>new heights?</span></Header>
                    <p>If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you're in the right place.</p>
                </BookCall>
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default ProjectDetail
