import ArrowRight from './ArrowRight.svg';
import Boy from './Boy.png';
export const About = () => {
    return (
        <div className="about-section">
            <div className="about-section__introduction">
                <div className="about-section__introduction__container">
                    <h2 className="about-section__introduction__container__intro">INTRODUCTION</h2>
                    <div className="about-section__introduction__container__arrow">
                        <h2 className="about-section__introduction__container__hydra">TO HYDRA VR</h2>
                        <img src={ArrowRight} alt="" />
                    </div>
                </div>
                <p className="about-section__introduction__description">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat <br/>
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo <br/>
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare <br/>
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>
            <div className="about-section__about">
                <img src={Boy} className="about-section__about__picture" alt="" />
                <div className="about-section__about__hydra">
                    <h2 className="about-section__about__hydra__title">ABOUT</h2>
                    <h2 className="about-section__about__hydra__vr">HYDRA VR</h2>
                    <p className="about-section__about__hydra__description">Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus<br/> 
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida<br/> 
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.<br/> 
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet<br/> 
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam <br/>
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet<br/> 
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha<br/>
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
n tempor.</p>
                    <a href="https://google.com"><div className="about-section__about__hydra__button">LET’S GET IN TOUCH</div></a>
                </div>
            </div>
        </div>
    )
}