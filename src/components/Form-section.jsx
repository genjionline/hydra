import Vector16 from './Vector16.svg';
export const Form = () => {
    return (
        <div className="form-section">
            <h2 className="form-section__join">JOIN HYDRA</h2>
            <img src={Vector16} alt="" />
            <h2 className="form-section__experience">Let’s Build Your VR Experience</h2>
            <form className="form-section__form" action="">
                <div className="form-section__form__name">
                    <input placeholder="First Name" type="text" required />
                    <input placeholder="Last Name" type="text" required />
                </div>
                <div className="form-section__form__contact">
                    <input placeholder="Email" type="email" required />
                    <input placeholder="Phone Number" type="tel" required />
                </div>
                <input className="form-section__form__subject" placeholder="Subject" type="text" required />
                <br/>
                <textarea className="form-section__form__message" placeholder="Tell Us Something..." type="text" required />
                <br/>
                <input className="form-section__form__button" type="submit" value="SEND TO HYDRA" />
            </form>
        </div>
    )
}