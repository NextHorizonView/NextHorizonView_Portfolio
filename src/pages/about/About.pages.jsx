import React, { useState } from 'react';
import './about.styles.css';
import Button from '../../components/button/Button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faX, faXmark } from '@fortawesome/free-solid-svg-icons';
import awardsimg from '../../assets/diamond.png'
import portraitImg from '../../assets/portrait.png'
import BookCall from '../../components/book-call/BookCall.component';
import Header from '../../components/home-section-header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Banner from '../../components/Banner/Banner.component';

const About = () => {
    return (
        <div className='about-page'>
            <div className='about-content'>
                <Banner>
                    <h1 className='banner-header'>Bringing Your <span className='italic'>Brand</span> to Life with Designs That Soar</h1>
                    <p>Crafting Exceptional Web Designs and Branding Solutions: Experience-Driven, Relationship-Focused</p>
                </Banner>

                <section className='about-values'>
                    <div className='about-values-content'>
                        <div>
                            <h1 className='about-header text-left'>The foundation</h1>
                            <h1 className='about-header text-left'>Of our values</h1>
                        </div>
                        <div className='about-values-row'>
                            <div className='about-values-row-item'>
                                <div className='icon-container'>
                                    <FontAwesomeIcon color='#000' className='icon' icon={faPen} />
                                </div>
                                <h2>Creativity</h2>
                                <p>We infuse innovation into every design, ensuring it captivates and resonates.</p>
                            </div>
                            <div className='about-values-row-item'>
                                <div className='icon-container'>
                                    <FontAwesomeIcon color='#000' className='icon' icon={faPen} />
                                </div>
                                <h2>Collaboration</h2>
                                <p>We transform ideas into impactful solutions through open communication.</p>
                            </div>
                            <div className='about-values-row-item'>
                                <div className='icon-container'>
                                    <FontAwesomeIcon color='#000' className='icon' icon={faPen} />
                                </div>
                                <h2>Quality</h2>
                                <p>Excellence shines through in every detail, ensuring unparalleled results for our clients.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='about-awards'>
                    <div className='about-awards-container'>
                        <div className='about-awards-header-container'>
                            <img className='about-awards-img' src={awardsimg} />
                            <h1 className='about-header'>Special <br /> Awards</h1>
                        </div>
                        <div className='about-grid'>
                            <div className='grid-row'>
                                <h3 className='item first'>Project</h3>
                                <h3 className='item middle'>Award</h3>
                                <h3 className='item last'>Year</h3>
                            </div>
                            <div className='grid-row separator'>
                                <p className='item first'>Avenix</p>
                                <p className='item middle'>Awwwards SOTD</p>
                                <p className='item last'>2024</p>
                            </div>
                            <div className='grid-row separator'>
                                <p className='item first'>Avenix</p>
                                <p className='item middle'>Awwwards SOTD</p>
                                <p className='item last'>2024</p>
                            </div>
                            <div className='grid-row separator'>
                                <p className='item first'>Avenix</p>
                                <p className='item middle'>Awwwards SOTD</p>
                                <p className='item last'>2024</p>
                            </div>
                            <div className='grid-row separator'>
                                <p className='item first'>Avenix</p>
                                <p className='item middle'>Awwwards SOTD</p>
                                <p className='item last'>2024</p>
                            </div>
                            <div className='grid-row separator'>
                                <p className='item first'>Avenix</p>
                                <p className='item middle'>Awwwards SOTD</p>
                                <p className='item last'>2024</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='about-statistic'>
                    <div className='about-statistic-container'>
                        <div className='about-statistic-card-container'>
                            <StatisticCard text1="14+" text2="Years of Designing and Building Brands" />
                            <StatisticCard text1="50+" text2="Innovative Projects Successfully Delivered" />
                            <StatisticCard text1="$2M" text2="Revenue Generated for our clients" />
                            <StatisticCard text1="18+" text2="Prestigious Industry Awards Won Globally" />
                            <StatisticCard text1="00" text2="Clients with unhappy result and team" />
                            <StatisticCard text1="80%" text2="High Client Retention Rate Maintained" />
                            <StatisticCard text1="8+" text2="Highly vetted Expert to create product for you" />
                            <StatisticCard text1="55%" text2="Product scaled since launched amplify" />
                        </div>
                    </div>
                </section>


                <section className='about-expert'>
                    <div className='about-expert-container'>
                        <h1>Meet the expert:</h1>
                        <div className='expert-card-container'>
                            <ExpertCard img={portraitImg} name='Jane Doe' />
                            <ExpertCard img={portraitImg} name='Jane Doe' />
                            <ExpertCard img={portraitImg} name='Jane Doe' />
                            <ExpertCard img={portraitImg} name='Jane Doe' />
                            <ExpertCard img={portraitImg} name='Jane Doe' />
                            <ExpertCard img={portraitImg} name='Jane Doe' />
                        </div>
                    </div>
                </section>

                <section className='have-questions'>
                    <div className='have-questions-wrapper'>
                        <div className='have-questions-container'>
                            <h1>Have <br />Questions</h1>
                            <div className='accordian'>
                                <AccordianItem title='What services do you offer?' content='We specialize in website design, app development, and branding/logo design.' />
                                <AccordianItem title='How long does a typical project take?' content='Project timelines vary depending on scope, but we aim for efficient delivery without compromising quality.' />
                                <AccordianItem title='Is my project information kept confidential?' content='Yes, we prioritize client confidentiality and ensure that all project information remains secure.' />
                                <AccordianItem title={`How do you ensure my brand's uniqueness?`} content='We conduct thorough research and collaborate closely with clients to create custom solutions tailored to their brand identity.' />
                                <AccordianItem title='Can you work with my budget?' content='We offer flexible pricing options and can tailor solutions to fit your budget while maintaining quality.' />
                                <AccordianItem title='What industries do you specialize in?' content='We have experience working across various industries, including technology, healthcare, e-commerce, and more.' />
                                <AccordianItem title='Can you provide examples of your past work?' content='Yes, we have a portfolio showcasing our previous projects. Feel free to check it out!' last={true} />
                            </div>
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

export default About;


const StatisticCard = ({ text1, text2 }) => (
    <div className='statistic-card'>
        <h1>{text1}</h1>
        <p>{text2}</p>
    </div>
)

const ExpertCard = ({ img, name }) => (
    <div className='expert-card'>
        <div className='expert-card-img-container'>
            <img src={img} />
        </div>
        <h2>{name}</h2>
    </div>
)

const AccordianItem = ({ title, content, last }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`accordian-item ${last ? 'last-accordian' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className='accordian-question'>
                <p>{title}</p>
                <FontAwesomeIcon icon={faXmark} className={isOpen ? 'acc-icon ' : 'acc-icon rotate'} />
            </div>
            <div className={`${!isOpen ? 'accordian-content' : 'accordian-content accordian-content-show'}`}>
                <div className='accordian-content-text'>{content}</div>
            </div>
        </div>
    )
}