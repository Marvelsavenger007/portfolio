import React, { useEffect, useState, useRef, Profiler } from "react";
import Profile from "./images/profilepic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import Contact from "./contact/Contact";
import Projects from "./Projects";

    const ProgressBar = ({ skill, percentage }) => {
        const [isVisible, setIsVisible] = useState(false);
    
        useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timeout);
        }, []);
    
        return (
        <div className="progress-container">
            <span className="skill-title">{skill}</span>
            <div className="progress-bar">
            <div
                className={`progress-fill ${isVisible ? "animate" : ""}`}
                style={{ width: `${percentage}%` }}
            >
                {percentage}%
            </div>
            </div>
        </div>
        );
    };


const Portfolio = () => {
    const text = "I AM A WEB DEVELOPER";
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(false); // Reset animation
            setTimeout(() => setIsVisible(true), 100); // Restart animation
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the text is visible
      );
  
      if (textRef.current) observer.observe(textRef.current);
  
      return () => observer.disconnect(); // Cleanup observer
    }, []);

  return (
    <div>        
        <div className="main-content">
            <section id="home">
                <h1>MARVELLOUS OKAFOR</h1>
                <p ref={textRef} className={`animated-text ${isVisible ? "visible" : ""}`}>
                {text.split("").map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                    {char === " " ? "\u00A0" : char}
                    <span className="underline"></span>
                    </span>
                ))}
                </p>
            </section>
            <section id="about">
                <h1 className="about-text">About Me</h1>
                <p>
                    I'm an enthusiastic <span>Web Developer</span> with a talent for making <span>dynamic, responsive, and user-friendly websites</span>.
                    Having worked with <span>front-end and back-end technologies</span>, my area of expertise is creating fluid digital experiences that 
                    combine functionality and creativity. 
                    With my proficiency in <span>ReactJS, JavaScript, HTML, CSS, and contemporary frameworks</span>, I guarantee 
                    that every project is streamlined for accessibility, speed, and performance.  
                    My goal is to transform ideas into interactive, high-quality web solutions that <span>engage users and drive results</span>. 
                    Beyond coding, I stay up-to-date with the latest industry trends and consistently enhance my 
                    skills to design <span>scalable and efficient applications</span>.  I'm dedicated to producing top-notch 
                    code in every line, whether it means creating user-friendly UI/UX designs or resolving 
                    challenging development issues.
                    Together, let's make something incredible!
                </p>
                <div className="about-props">
                    <div className="about-img">
                        <img 
                            src={Profile}
                            width="300"
                            height="300"
                            alt="About"
                        />
                    </div>
                    <div className="about-details">
                        <h2>Web Developer</h2> 
                        <div className="about-me">
                            <div className="about-me-item">
                                <span><FontAwesomeIcon icon={faGreaterThan} className="icon-style" /></span>
                                <h2>Birthday:</h2>
                                <span className="about-me-span"> 6 January</span>
                            </div>
                            <div className="about-me-item">
                                <span><FontAwesomeIcon icon={faGreaterThan} className="icon-style" /></span>
                                <h2>Age:</h2>
                                <span className="about-me-span"> 24</span>
                            </div>
                            <div className="about-me-item">
                                <span><FontAwesomeIcon icon={faGreaterThan} className="icon-style" /></span>
                                <h2>Degree:</h2>
                                <span className="about-me-span"> Bsc</span>
                            </div>
                            <div className="about-me-item">
                                <span><FontAwesomeIcon icon={faGreaterThan} className="icon-style" /></span>
                                <h2>Email:</h2>
                                <span className="about-me-span"> marvellousokafor08@gmail.com</span>
                            </div>
                            <div className="about-me-item">
                                <span><FontAwesomeIcon icon={faGreaterThan} className="icon-style" /></span>
                                <h2>Freelance:</h2>
                                <span className="about-me-span"> Available</span>
                            </div>
                            <div className="about-me-item">
                                <span><FontAwesomeIcon icon={faGreaterThan} className="icon-style" /></span>
                                <h2>Phone:</h2>
                                <span className="about-me-span"> +234 9067672646</span>
                            </div>
                            <div className="about-me-item">
                                <span><FontAwesomeIcon icon={faGreaterThan} className="icon-style" /></span>
                                <h2>Experience:</h2>
                                <span className="about-me-span"> 3 years in web development</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>
                    As a dedicated Web Developer, I specialize in building efficient, 
                    dynamic, and visually engaging websites. My passion lies in 
                    leveraging the latest technologies and best practices to deliver 
                    high-performing solutions that drive user engagement and business 
                    success. I focus on writing clean, maintainable code and continuously 
                    refining my skills to keep up with the rapidly evolving tech landscape. 
                    Whether I’m collaborating with cross-functional teams or tackling projects 
                    independently, I take pride in crafting digital experiences that seamlessly 
                    blend form and function. From concept to deployment, I strive to deliver results that 
                    exceed expectations and set new standards for quality and innovation.
                </h3>
            </section>
            <div className="skills">
                <h1 className="about-text">Skills</h1>
                <p>
                    I excel in <span>HTML, CSS, and JavaScript</span>, crafting responsive designs 
                    with <span>Tailwind CSS</span> and building dynamic, high-performance web 
                    applications using <span>ReactJS</span> for seamless user experiences.
                </p>
                <div className="skills-bar">
                    <ProgressBar skill="ReactJS" percentage={90} />
                    <ProgressBar skill="JavaScript" percentage={80} />
                    <ProgressBar skill="CSS" percentage={93} />
                    <ProgressBar skill="HTML" percentage={100} />
                    <ProgressBar skill="Tailwind CSS" percentage={60} />
                </div>
            </div>


            <section id="resume">
                <h1 className="about-text">Resume</h1>
                <p>My technological proficiency, work history, and web development education are highlighted on my resume.  It demonstrates my proficiency and practical experience in creating dynamic and responsive web applications.

                    I have a solid background in front-end and back-end development and have worked on a variety of projects that have improved functionality, performance, and user experience.  Details of my undergraduate degree, qualifications, and ongoing efforts to understand web technologies are also included in my résumé.

                    My credentials are briefly outlined in this part, which also highlights my capacity to develop effective and aesthetically pleasing web solutions.
                </p>
                <div className="resume-container">
                {/* Summary Section */}
                <section className="resume-section">
                    <h2>Summary</h2>
                    <div className="timeline">
                    <div className="timeline-item">
                        <div className="circle"></div>
                        <div className="content">
                        <h3>OKAFOR MARVELLOUS</h3>
                        <p>
                            <i>
                                Passionate and detail-oriented Web Developer with expertise in HTML, CSS, 
                                JavaScript, Tailwind CSS, and ReactJS. Skilled in building responsive, 
                                high-performance web applications with a strong focus on UI/UX. Adept at 
                                problem-solving, collaborating with teams, and delivering innovative solutions.
                            </i>
                        </p>
                        <ul>
                            <li> +2349067672646</li>
                            <li> marvellousokafor08@gmail.com</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="resume-section">
                    <h2>Education</h2>
                    <div className="timeline">
                    <div className="timeline-item">
                        <div className="circle"></div>
                        <div className="content">
                        <h3>BACHELOR OF Science Computer Science</h3>
                        <span>2019 - 2023</span>
                        <p>
                            <i>University of Benin, Nigeria</i>
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Professional Experience Section */}
                <section className="resume-section">
                    <h2>Professional Experience</h2>
                    <div className="timeline">
                    <div className="timeline-item">
                        <div className="circle"></div>
                        <div className="content">
                        <h3>Web Developer | Web Development Instructor | Operations Officer</h3>
                            <span>2024</span>
                            <p>
                                <i>DEEBUG | Benin, Nigeria</i>
                            </p>
                            <ul>
                                <li>
                                    Designed, developed, and maintained responsive web applications using React, prioritizing UX/UI design and performance optimization.
                                </li>
                                <li>
                                    Conducted thorough testing, debugging, and API integrations to ensure seamless functionality and an optimal user experience.
                                </li>
                                <li>
                                    Created and delivered structured learning materials, including presentations, slides, and notes, to enhance student engagement and understanding of web development concepts.
                                </li>
                                <li>
                                    Oversaw daily operations and inventory management, ensuring the efficient and seamless functioning of the facility.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="circle"></div>
                        <div className="content">
                            <h3>Web Developer Intern</h3>
                            <span>April 2022 - January 2023</span>
                            <p>
                                <i>DEEBUG | Benin, Nigeria</i>
                            </p>
                            <ul>
                                <li>Conducted research and collaborated on developing web applications using ReactJS, enhancing functionality and user experience.</li>
                                <li>Maintained an organized and efficient workspace to support team productivity and collaboration.</li>
                                <li>Participated in department meetings and training sessions to gain industry insights and improve technical expertise.</li>
                                <li>Delivered lectures and presentations on front-end web development, providing students with hands-on learning experiences.</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
                
            </section>

            <section id="projects">
                <h1 className="about-text">Projects</h1>
                <p>
                    The Project Showcase section is designed to provide an interactive and visually 
                    engaging display of my work. This section features a grid layout containing images 
                    representing each project. The images serve as clickable elements, allowing visitors ]
                    to explore my projects further.
                </p>
                <Projects />
            </section>


            <section id="contact">
                <h1 className="about-text">Contact</h1>
                <Contact />

            </section>

        </div>
    </div>
  )
}

export default Portfolio