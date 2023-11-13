import Frame from './Frame.png';
import Vector20 from './Vector20.svg';
import Facebook from './Facebook.svg';
import Twitter from './Twitter.svg';
import Linkedin from './Linkedin.svg';
import Youtube from './Youtube.svg';
import Instagram from './Instagram.svg';
import Pinterest from './Pinterest.svg';
import Vector17 from './Vector17.svg';
export const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-section__container">
                <img className="footer-section__container__logo" src={Frame} alt="" />
                <img src={Vector20} alt="" />
                <div>
                    <ul className="footer-section__container__list">
                        <a href="https://google.com"><li className="footer-section__container__list__item">ABOUT</li></a>
                        <a href="https://google.com"><li className="footer-section__container__list__item">SERVICES</li></a>
                        <a href="https://google.com"><li className="footer-section__container__list__item">TECHNOLOGIES</li></a>
                        <a href="https://google.com"><li className="footer-section__container__list__item">HOW TO</li></a>
                        <a href="https://google.com"><li className="footer-section__container__list__item">JOIN HYDRA</li></a>
                    </ul>
                </div>
                <img src={Vector20} alt="" />
                <div>
                    <ul className="footer-section__container__list">
                        <a href="https://google.com"><li className="footer-section__container__list__item">F.A.Q</li></a>
                        <a href="https://google.com"><li className="footer-section__container__list__item">SITEMAP</li></a>
                        <a href="https://google.com"><li className="footer-section__container__list__item">CONDITIONS</li></a>
                        <a href="https://google.com"><li className="footer-section__container__list__item">LICENSES</li></a>
                    </ul>
                </div>
                <img src={Vector20} alt="" />
                <div className="footer-section__container__media">
                    <h4 className="footer-section__container__social">SOCIALIZE WITH HYDRA</h4>
                    <div className="footer-section__container__social__icons">
                        <a href="https://google.com"><img src={Facebook} alt="" /></a>
                        <a href="https://google.com"><img src={Twitter} alt="" /></a>
                        <a href="https://google.com"><img src={Linkedin} alt="" /></a>
                        <a href="https://google.com"><img src={Youtube} alt="" /></a>
                        <a href="https://google.com"><img src={Instagram} alt="" /></a>
                        <a href="https://google.com"><img src={Pinterest} alt="" /></a>
                    </div>
                    <a href="https://google.com"><div className="footer-section__container__button">BUILD YOUR WORLD</div></a>
                </div>
            </div>
            <img className="footer-section__divider" src={Vector17} alt="" />
            <p className="footer-section__copyright">2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
        </div>
    )
}