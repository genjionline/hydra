import ArrowRight from './ArrowRight.svg';
import ArrowSmallRight from './ArrowSmallRight.svg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
export const Process = () => {
    return (
        <div className="process-section">
            <div className="process-section__how">
                <div className="process-section__how__container">
                    <h2 className="process-section__how__container__build">HOW WE BUILD</h2>
                    <div className="process-section__how__container__arrow">
                        <h2 className="process-section__how__container__hydra">WITH HYDRA VR?</h2>
                        <img src={ArrowRight} alt="" />
                    </div>
                </div>
                <p className="process-section__how__description">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat <br/>
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo <br/>
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare <br/>
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>
            <div className="process-section__steps">
                <div className="process-section__steps__item">
                    <div className="process-section__steps__item__number">01</div>
                    <div className="process-section__steps__item__name">
                        <img src={ArrowSmallRight} alt="" />
                        <h3 className="process-section__steps__item__name__title">3D Conception<br/>
& Design</h3>
                    </div>
                </div>
                <div className="process-section__steps__item">
                    <div className="process-section__steps__item__number">02</div>
                    <div className="process-section__steps__item__name">
                        <img src={ArrowSmallRight} alt="" />
                        <h3 className="process-section__steps__item__name__title">Interaction<br/>
Design</h3>
                    </div>
                </div>
                <div className="process-section__steps__item">
                    <div className="process-section__steps__item__number">03</div>
                    <div className="process-section__steps__item__name">
                        <img src={ArrowSmallRight} alt="" />
                        <h3 className="process-section__steps__item__name__title">VR World<br/>
User Testing</h3>
                    </div>
                </div>
                <div className="process-section__steps__item">
                    <div className="process-section__steps__item__number">04</div>
                    <div className="process-section__steps__item__name">
                        <img src={ArrowSmallRight} alt="" />
                        <h3 className="process-section__steps__item__name__title">Hydra VR<br/>
Deploy</h3>
                    </div>
                </div>
            </div>
            <div className="process-section__steps-swiper">
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><div className="process-section__steps__item">
                    <div className="process-section__steps__item__number">01</div>
                    <div className="process-section__steps__item__name">
                        <img src={ArrowSmallRight} alt="" />
                        <h3 className="process-section__steps__item__name__title">3D Conception<br/>
& Design</h3>
                    </div>
                </div></SwiperSlide>
                    <SwiperSlide><div className="process-section__steps__item">
                    <div className="process-section__steps__item__number">02</div>
                    <div className="process-section__steps__item__name">
                        <img src={ArrowSmallRight} alt="" />
                        <h3 className="process-section__steps__item__name__title">Interaction<br/>
Design</h3>
                    </div>
                </div></SwiperSlide>
                    <SwiperSlide><div className="process-section__steps__item">
                    <div className="process-section__steps__item__number">03</div>
                    <div className="process-section__steps__item__name">
                        <img src={ArrowSmallRight} alt="" />
                        <h3 className="process-section__steps__item__name__title">VR World<br/>
User Testing</h3>
                    </div>
                </div></SwiperSlide>
                    <SwiperSlide><div className="process-section__steps__item">
                    <div className="process-section__steps__item__number">04</div>
                    <div className="process-section__steps__item__name">
                        <img src={ArrowSmallRight} alt="" />
                        <h3 className="process-section__steps__item__name__title">Hydra VR<br/>
Deploy</h3>
                    </div>
                </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}