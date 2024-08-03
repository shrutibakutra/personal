import "./aboutme.scss";
import myimg from "../myimg.jpeg";

export const AboutMe = () => {
    return (
        <>
            <div className='head-text'>
                <span>Shruti Bakutra</span>
            </div>
            <div className="aboutme">
                <div className="aboutme__text">
                    <ul>Thank you for visiting my website! Heres something about me:</ul>
                    <ul>
                        I'm a passionate and experienced software developer with over 5 years of expertise in creating dynamic and responsive web applications. Specializing in React, HTML, CSS, MaterialUI, and NodeJS, I bring a comprehensive skill set to every project. My knowledge extends to Python, allowing me to handle diverse development needs.
                    </ul>
                    <ul>
                        I adhere to Agile methodology, ensuring efficient and adaptive project management, and I am a  <a href="https://www.scrum.org/user/1230375">certified Product Owner</a>, ready to bridge the gap between technical teams and business goals.
                    </ul>
                    <ul>
                        Outside of work, I enjoy outdoor activities such as hiking, running, playing badminton, and rock climbing, which enhance my determination and resilience, qualities that I bring to my work.
                    </ul>

                    <ul>
                        Explore my portfolio to see how I can turn innovative ideas into reality!
                    </ul>
                </div>
                <div className="aboutme__img">
                    <img alt="" src={myimg} />
                </div>
            </div>
        </>
    );
};