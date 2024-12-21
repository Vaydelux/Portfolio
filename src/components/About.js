import React from "react";
import Observer from "./effects/Observer";

export default function About (){
    const [ref, isVisible] = Observer(0.01); 
    return(
        <section className={`about-sec ${isVisible ? "show-sec" : ""}`} ref={ref} id="about-sec" >
            <div className="about-wrap">
                <div className="about-container">
                    <h2 className="about-title">About Me</h2>
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className="about-text paragraphs">
=======
                    <div className="about-text">
>>>>>>> parent of 95d4430 (Updates)
=======
                    <div className="about-text">
>>>>>>> parent of 63b650a (changes on portfolio)
                    I am a junior back-end developer with 1 year and 2 months of experience,
                     specializing in C# and ASP.NET Core. I have a solid foundation in front-end technologies, 
                     including jQuery and CSS libraries like Sass and Bootstrap.
                      Proficient in MS SQL and MySQL for database management, 
                      I also have basic knowledge of Python, Java, and VB.NET. 
                      Recently, I started learning React Native and enjoy taking on new challenges. 
                      I have experience working in teams, where I contributed additional features to projects,
                       enhancing functionality and user experience. In my free time, I enjoy playing strategic games,
                        which further enhances my analytical thinking. With a degree in Information Technology, 
                        I’m excited to grow and contribute to innovative solutions in a supportive team environment.
                    </div>
                    <div className="about-cv">
                        <a href="/Portfolio/files/Mosqueda_Jericho_Resume.docx" download>
                            <i className="download-icon" data-feather="download"></i> Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};