import React, { useEffect, useState } from 'react';
import './project.styles.css';
import Banner from '../../components/Banner/Banner.component';
import Header from '../../components/home-section-header/Header.component';
import BookCall from '../../components/book-call/BookCall.component';
import Footer from '../../components/Footer/Footer.component';
import ProjectImg1 from '../../assets/projects1.png'
import ProjectImg2 from '../../assets/projects2.png'
import ProjectImg3 from '../../assets/projects3.png'
import ProjectImg4 from '../../assets/projects4.png'
import { getProjects } from '../../../utils/sanity.utils';

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const projects = await getProjects();
            setProjects(projects)
        }
        fetchData();
    }
        , [])

    return (
        <div className='project-page'>
            <div className='project-content'>
                <Banner>
                    <h1 className='banner-header'>Explore our <span className='italic'>Award</span> winning work and case studies</h1>
                    <p>Explore our celebrated projects showcasing excellence in web design and branding</p>
                </Banner>

                <section className='projects-section'>
                    <div className='projects-content'>
                        <div className='project-sticky-text'>
                            [Case-Study]
                        </div>
                        <div className='projects-content-container'>
                            <p className='project-content-header'>Award winning designs for clients and world class startups.</p>
                            {projects.map((project, index) => (
                                <ProjectItem key={index} img={project.image} name={project.name} year={project.year} genre={project.genre} />
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

export default Project;

const ProjectItem = ({ img, name, year, genre }) => {
    return (
        <div className='project-content-item'>
            <img src={img} className='project-item-img' alt='' />
            <p className='project-item-name'>{name}</p>
            <p className='project-item-content'>{year} · {genre}</p>
            <p></p>
        </div>
    )
}
