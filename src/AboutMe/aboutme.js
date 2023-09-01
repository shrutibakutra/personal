import "./aboutme.scss";
import { CarouselCustom } from "./carousel";
import myimg from "../images/myimg.jpeg";
import visionary from "../images/visionary.png";
import agile from "../images/agile.png";
import success from "../images/success.png";

export const AboutMe = () => {
    return (
        <>
            <div className='head-text'>
                <span>Shruti Bakutra</span>
            </div>
            <div className="introduction">
                <div>
                    👋 Welcome to My Digital Space!
                </div>
                <div>
                    Hello there, digital wanderer! I'm thrilled you stopped by. As you explore these virtual realms, you'll find more than just code and pixels. Here, I'm all about crafting experiences that truly resonate. Take a step into this corner of the internet where innovation meets practicality, and where technology dances gracefully with design.
                </div>
            </div>

            <div className="aboutme">
                <div className="aboutme__fronend">
                    <div className="aboutme__fronend__img">
                        <CarouselCustom />
                    </div>
                    <div className="aboutme__fronend__text">
                        <ul>
                            👨‍💻 Frontend & Backend Explorer
                        </ul>
                        <ul>
                            With a captivating journey spanning over 5 years, I've wielded my creative quill to pen immersive frontend symphonies using ReactJS, HTML, and CSS. The backend realm, too, knows my footsteps, as I've orchestrated harmonious functionalities with Python and orchestrated the unseen with JavaScript (NodeJS). A melody of coding languages at my fingertips, each note resonating with purpose.
                        </ul>
                    </div>
                </div>

                <div className="aboutme__fronend">
                    <div className="aboutme__fronend__text">
                        <ul>
                            From Developer to Visioneering 🌌
                        </ul>
                        <ul>
                            Beyond the lines of code, I've embraced the role of a product enthusiast for a year. I've learned to guide not only the bits and bytes but also the teams behind them. The thrill of transitioning into a space where technical skills sync harmoniously with cross-functional teamwork is electrifying. The goal? Products that aren't just practical, but genuinely delightful.
                        </ul>
                    </div>
                    <div className="aboutme__fronend__img">
                        <img alt="" src={visionary} className='aboutme__fronend__img__vision'/>
                    </div>
                </div>

                <div className="aboutme__fronend">
                    <div className="aboutme__fronend__img">
                        <img alt="" src={agile} className='aboutme__fronend__img__agile'/>
                    </div>
                    <div className="aboutme__fronend__text">
                        <ul>
                            🌀 Navigating the Agile Galaxy
                        </ul>
                        <ul>
                            In the ever-evolving galaxy of software development, I've navigated through agile constellations. Sprint planning, backlog grooming, and sprint reviews are my guiding stars. With a keen eye, I identify user patterns and weave software constellations that align. It's like mapping celestial promises, one pixel at a time.
                        </ul>
                    </div>
                </div>

                <div className="aboutme__fronend">

                    <div className="aboutme__fronend__text">
                        <ul>
                            🛍️ Certified Product Voyager
                        </ul>
                        <ul>
                            Equipped with a  <a href="https://www.scrum.org/user/1230375">PSPO I certification</a>, I'm well-prepared to navigate the sometimes stormy seas of product management. Guided by principles and best practices, I steer my creativity toward islands of user-centric innovation.
                        </ul>
                    </div>
                    <div className="aboutme__fronend__img">
                        <img alt="" src={success} className='aboutme__fronend__img__success' />
                    </div>
                </div>

                <div className="aboutme__fronend">
                    <div className="aboutme__fronend__img">
                        <img alt="" src={myimg} className='aboutme__fronend__img__hobby' />
                    </div>
                    <div className="aboutme__fronend__text">
                        <ul>
                            ⛰️ Beyond the Code: Conquests & Resilience
                        </ul>
                        <ul>
                            When I step away from the digital canvas, you'll find me conquering mountains of determination or racing through fields of resilience. Whether it's hiking, badminton, or rock climbing, these passions infuse my work with unwavering energy.
                        </ul>
                    </div>
                </div>
                <div className="aboutme__footer">
                    So, whether you're a fellow traveler of the digital domain or the physical world, I invite you to journey with me. Let's shape tomorrows, one line of code and one pixel of design at a time. Your exploration into my world has just begun! 🌟
                </div>
            </div>
        </>
    );
};
