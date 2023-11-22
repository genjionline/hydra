import Frame from './Frame.svg';
import Frame2 from './Frame2.svg';
import VrGirl from './VrGirl.png';
import SmallArrow from './SmallArrow.svg';
import Location from './Location.svg';
import Phone from './Phone.svg';
import Mail from './Mail.svg';
import Vector from './Vector.svg';
import HamburgerButton from './HamburgerButton.svg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from "react";


export const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }
    return (
        <div className="hero-section">
            <div className="header">
                <div className="hero-section__header__logo">
                    <a href="https://google.com">
                        <img src={Frame} className="logo-hydra" alt="Logo" />
                    </a>
                    <a href="https://google.com">
                        <img src={Frame2} className="logo-text" alt="Logo" />
                    </a>
                    
                </div>
                
                <div className={`hero-section__header__nav ${isOpen ? "is-open" : ""}`}>
                    <ul className="hero-section__header__nav__list">
                        <li className="hero-section__header__nav__list__item"><a href="https://google.com">ABOUT</a></li>
                        <li className="hero-section__header__nav__list__item"><a href="https://google.com">SERVICES</a></li>
                        <li className="hero-section__header__nav__list__item"><a href="https://google.com">TECHNOLOGIES</a></li>
                        <li className="hero-section__header__nav__list__item"><a href="https://google.com">HOW TO</a></li>
                    </ul>
                </div>
                <img className="HamburgerButton" src={HamburgerButton} alt="" onClick={toggleMenu} />
                <div className="hero-section__header__buttons">
                    <a href="https://google.com"><div className="hero-section__header__buttons__contact">CONTACT US</div></a>
                    <a href="https://google.com"><div className="hero-section__header__buttons__join">JOIN HYDRA</div></a>
                </div>
            </div>
            <div className="main">
                <div className="main__dive">
                    <div className="main__dive__info">
                        <h2 className="main__dive__info__title">Dive <span className="main__dive__info__title__depths">Into The Depths <br/>Of</span> Virtual Reality</h2>
                        <p className="main__dive__info__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
sed do eiusmod tempor incididunt ut labore et dolore<br/> 
nisl tincidunt eget. Lectus mauris eros in vitae.</p>
                    </div>
                    <div className="main__dive__build">
                        <a href="htttps://google.com"><div className="main__dive__build__button">BUILD YOUR WORLD</div></a>
                        <img src={SmallArrow} alt="" />
                    </div>
                </div>
                <div className="main__picture">
                    <div className="main__picture__frame">
                            <img className="main__picture__img" src={VrGirl} alt="VrGirl" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer__container">
                    <img className="footer__container__picture" src={Location} alt="" />
                    <div className="footer__container__info">
                        <p className="footer__container__name">Pay Us a Visit</p>
                        <p className="footer__container__contact">Union St, Seattle, WA 98101, United States</p>
                    </div>
                </div>
                <img src={Vector} alt="" />
                <div className="footer__container">
                    <img className="footer__container__picture" src={Phone} alt="" />
                    <div className="footer__container__info">
                        <p className="footer__container__name">Give Us a Call</p>
                        <p className="footer__container__contact"><a href="tel:+110) 1111-1010">(110) 1111-1010</a></p>
                    </div>
                </div>
                <img src={Vector} alt="" />
                <div className="footer__container">
                    <img className="footer__container__picture" src={Mail} alt="" />
                    <div className="footer__container__info">
                        <p className="footer__container__name">Send Us a Message</p>
                        <p className="footer__container__contact"><a href="mailto:Contact@HydraVTech.com">Contact@HydraVTech.com</a></p>
                    </div>
                </div>
            </div>
            <div className="footer-swiper">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="footer__container">
                    <img className="footer__container__picture" src={Location} alt="" />
                    <div className="footer__container__info">
                        <p className="footer__container__name">Pay Us a Visit</p>
                        <p className="footer__container__contact">Union St, Seattle, WA 98101, United States</p>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide><div className="footer__container">
                    <img className="footer__container__picture" src={Phone} alt="" />
                    <div className="footer__container__info">
                        <p className="footer__container__name">Give Us a Call</p>
                        <p className="footer__container__contact"><a href="tel:+110) 1111-1010">(110) 1111-1010</a></p>
                    </div>
                </div></SwiperSlide>
      <SwiperSlide><div className="footer__container">
                    <img className="footer__container__picture" src={Mail} alt="" />
                    <div className="footer__container__info">
                        <p className="footer__container__name">Send Us a Message</p>
                        <p className="footer__container__contact"><a href="mailto:Contact@HydraVTech.com">Contact@HydraVTech.com</a></p>
                    </div>
                    </div></SwiperSlide>
    </Swiper>
            </div>
        </div>
    )
}