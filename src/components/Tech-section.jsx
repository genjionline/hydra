import ArrowDown from './ArrowDown.svg';
import HydraTech1 from './HydraTech1.png';
import HydraTech2 from './HydraTech2.png';
import HydraTech3 from './HydraTech3.png';
import HydraTech4 from './HydraTech4.png';
export const Tech = () => {
    return (
        <div className="tech-section">
            <div className="technologies">
                <h2 className="technologies__hardware">TECHNOLOGIES & HARDWARE</h2>
                <h2 className="technologies__used">USED BY HYDRA VR.</h2>
                {/* <div className="technologies__arrow-down"> */}
                    <img className="technologies__arrow-down__img" src={ArrowDown} alt="" />
                {/* </div> */}
            </div>
            <div className="partners">
                <div className="partners__item-1">
                    <img src={HydraTech1} alt="" />
                </div>
                <div className="partners__item-2">
                    <img src={HydraTech3} alt="" />
                </div>
                <div className="partners__item-3">
                    <img src={HydraTech2} alt="" />
                </div>
                <div className="partners__item-4">
                    <img src={HydraTech4} alt="" />
                </div>
            </div>
        </div>
    )
}