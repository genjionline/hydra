import ArrowRight from './ArrowRight.svg';
import Item1 from './Item1.png';
import Item2 from './Item2.png';
import Item3 from './Item3.png';
import Item4 from './Item4.png';
import Vector10 from './Vector10.svg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
export const Services = () => {
    return (
        <div className="services-section">
            <div className="services-section__why">
                <div className="services-section__why__container">
                    <h2 className="services-section__why__container__build">WHY BUILD</h2>
                    <div className="services-section__why__container__arrow">
                        <h2 className="services-section__why__container__hydra">WITH HYDRA?</h2>
                        <img src={ArrowRight} alt="" />
                    </div>
                </div>
                <p className="services-section__why__description">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat <br/>
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo <br/>
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare <br/>
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>
            <div className="services-section__categories">
                <div className="services-section__categories__item">
                    <img className="services-section__categories__item__img" src={Item1} alt="" />
                    <h3 className="services-section__categories__item__name">SIMULATION</h3>
                    <img src={Vector10} alt="" />
                    <p className="services-section__categories__item__description">Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus
                        libero justo laoreet sit amet vitae.</p>
                    <a href="https://google.com"><div className="services-section__categories__item__button">TRY IT NOW</div></a>
                </div>
                <div className="services-section__categories__item">
                    <img className="services-section__categories__item__img" src={Item2} alt="" />
                    <h3 className="services-section__categories__item__name">EDUCATION</h3>
                    <img src={Vector10} alt="" />
                    <p className="services-section__categories__item__description">Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.</p>
                    <a href="https://google.com"><div className="services-section__categories__item__button">TRY IT NOW</div></a>
                </div>
                <div className="services-section__categories__item">
                    <img className="services-section__categories__item__img" src={Item3} alt="" />
                    <h3 className="services-section__categories__item__name">SELF-CARE</h3>
                    <img src={Vector10} alt="" />
                    <p className="services-section__categories__item__description">Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.</p>
                    <a href="https://google.com"><div className="services-section__categories__item__button">TRY IT NOW</div></a>
                </div>
                <div className="services-section__categories__item">
                    <img className="services-section__categories__item__img" src={Item4} alt="" />
                    <h3 className="services-section__categories__item__name">OUTDOOR</h3>
                    <img src={Vector10} alt="" />
                    <p className="services-section__categories__item__description">Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.</p>
                    <a href="https://google.com"><div className="services-section__categories__item__button">TRY IT NOW</div></a>
                </div>
            </div>
            <div className="services-section__categories-swiper">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><div className="services-section__categories__item">
                    <img className="services-section__categories__item__img" src={Item1} alt="" />
                    <h3 className="services-section__categories__item__name">SIMULATION</h3>
                    <img src={Vector10} alt="" />
                    <p className="services-section__categories__item__description">Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus
                        libero justo laoreet sit amet vitae.</p>
                    <a href="https://google.com"><div className="services-section__categories__item__button">TRY IT NOW</div></a>
                </div></SwiperSlide>
                    <SwiperSlide><div className="services-section__categories__item">
                    <img className="services-section__categories__item__img" src={Item2} alt="" />
                    <h3 className="services-section__categories__item__name">EDUCATION</h3>
                    <img src={Vector10} alt="" />
                    <p className="services-section__categories__item__description">Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.</p>
                    <a href="https://google.com"><div className="services-section__categories__item__button">TRY IT NOW</div></a>
                </div></SwiperSlide>
                    <SwiperSlide><div className="services-section__categories__item">
                    <img className="services-section__categories__item__img" src={Item3} alt="" />
                    <h3 className="services-section__categories__item__name">SELF-CARE</h3>
                    <img src={Vector10} alt="" />
                    <p className="services-section__categories__item__description">Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.</p>
                    <a href="https://google.com"><div className="services-section__categories__item__button">TRY IT NOW</div></a>
                </div></SwiperSlide>
                    <SwiperSlide><div className="services-section__categories__item">
                    <img className="services-section__categories__item__img" src={Item4} alt="" />
                    <h3 className="services-section__categories__item__name">OUTDOOR</h3>
                    <img src={Vector10} alt="" />
                    <p className="services-section__categories__item__description">Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.</p>
                    <a href="https://google.com"><div className="services-section__categories__item__button">TRY IT NOW</div></a>
                </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}