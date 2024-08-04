import React, { useEffect } from 'react'
import './Brand.styles.css'
import Sp1 from '../../assets/sp1.png'
import Sp2 from '../../assets/sp2.png'
import Sp3 from '../../assets/sp3.png'
import Sp4 from '../../assets/sp-4.png'
import Sp5 from '../../assets/sp5.png'
import Sp6 from '../../assets/sp-6.png'
import video from '../../assets/video.mp4'

const Brand = () => {
    useEffect(() => {
        const videoElement = document.getElementById('video-player');
        if (videoElement) {
            videoElement.play();
        }
    }, []);
    return (
        <section className='brand-section'>
            <div className='brand-video-container'>
                {/* <video autoPlay={true} muted loop width="100%" className="video-player" src={video}></video> */}
                {/* <video autoPlay muted loop playsInline width="100%" className="video-player" src={video}></video> */}
                <video id="video-player" muted loop playsInline webkit-playsinline width="100%" className="video-player" src={video}
                ></video>

            </div>
            <p className='brand-text'>Our softwares are featured on:</p>
            <div className='brand-features'>
                <div className='scroll'>
                    <img src={Sp1} className='brand-img' />
                    <img src={Sp2} className='brand-img' />
                    <img src={Sp3} className='brand-img' />
                    <img src={Sp4} className='brand-img' />
                    <img src={Sp5} className='brand-img' />
                    <img src={Sp6} className='brand-img' />
                </div>
                <div className='scroll scroll2'>
                    <img src={Sp1} className='brand-img' />
                    <img src={Sp2} className='brand-img' />
                    <img src={Sp3} className='brand-img' />
                    <img src={Sp4} className='brand-img' />
                    <img src={Sp5} className='brand-img' />
                    <img src={Sp6} className='brand-img' />
                </div>
            </div>
        </section>
    )
}

export default Brand