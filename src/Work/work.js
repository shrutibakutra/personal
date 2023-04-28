import "./mywork.scss";
import projects from "../projects.js";

export const Work = () => {
    return (
        <div className="mywork">
            <div className="mywork__header"> Projects </div>
            <div>A SUMMARY OF THE PROJECTS I HAVE WORKED ON</div>

            {projects.map((project) => {
                return (
                    <div className="mywork__table">
                        <div>{project.title}</div>
                        <div>{project.description}</div>
                    </div>
                )
            })}
        </div>
    )
}