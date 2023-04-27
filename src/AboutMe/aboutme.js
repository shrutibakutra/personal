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
                        With over 4 years of professional experience, I have a strong background in frontend development using ReactJS, HTML, and CSS, and backend development using Python and Javascript (NodeJS).
                    </ul>
                    <ul>
                        I am excited about the opportunity to transition into a product management
                        role where I can leverage my technical expertise and collaborate with cross-functional teams
                        to develop products that align with business goals and delight users. As a software developer,
                        I have gained valuable insights into the software development process and am experienced in
                        leading agile development processes, including sprint planning, backlog grooming, and sprint reviews.
                        I am also skilled in identifying user needs and developing software products that meet those needs.
                        Additionally, I hold a  <a href="https://www.scrum.org/user/1230375">PSPO I certification</a>,
                        which has provided me with a solid foundation in product management
                        principles and best practices.
                    </ul>
                    <ul>
                        Outside of work, I enjoy outdoor activities such as hiking, running, playing badminton, and rock climbing, which enhance my determination and resilience, qualities that I bring to my work.
                    </ul>
                    {/* <ul>
                    I am a software developer with a passion for creating innovative and user-friendly software products. With over 4 years of professional experience,
                    I have a strong background in frontend development using ReactJS, HTML, and CSS,
                    and backend development using Python and Javascript (NodeJS).
                </ul>
                <ul>
                    While I have primarily worked in software development,
                    I am excited about the opportunity to transition into a product management role.
                    I have a strong desire to leverage my technical expertise and collaborate with cross-functional teams
                    to develop products that align with business goals and delight users.
                </ul>
                <ul>
                    As a software developer, I have gained valuable insights into the software
                    development process, which I can apply to product management. I am experienced in
                    leading agile development processes, including sprint planning, backlog grooming, and sprint reviews,
                    and have a strong understanding of software development methodologies.
                    I am also skilled in identifying user needs and developing software products that meet those needs.
                </ul>
                <ul>
                    Outside of work, I enjoy outdoor activities such as hiking, running, playing badminton, and rock climbing, which enhance my determination and resilience,
                    qualities that I bring to my work as a software developer and aspire to bring to my work as a product manager.
                </ul>
                <ul>
                    I am excited about the opportunity to leverage my technical expertise and collaborate
                    with cross-functional teams to develop innovative and user-friendly products that make a difference
                    in people's lives. I am eager to learn and grow in a product management
                    role and am committed to taking the necessary steps to make a successful transition.
                </ul> */}

                </div>
                <div className="aboutme__img">
                    <img alt="" src={myimg} />
                </div>
            </div>
        </>
    );
};