import { useState } from "react";
import "./projects.css";
import { FaExternalLinkAlt, FaExpand } from "react-icons/fa";
import deebug from "./images/deebug.webp"
import jollof from "./images/jollof.jpg"
import pickload from "./images/pickload.png"
import medplan from "./images/medplan.png"
import { FaLink } from "react-icons/fa6";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";


const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const projects = [
        {
          id: 1,
          title: "DEEBUG",
          image: deebug,
          url: "https://www.deebug.org",
        },
        {
          id: 2,
          title: "Medplan",
          image: medplan,
          url: "https://medplan-solutions.netlify.app/",
        },
        {
          id: 3,
          title: "Uniben Foodie",
          image: jollof,
          url: "https://uniben-foodies.netlify.app/home",
        },
        {
          id: 4,
          title: "Pickload",
          image: pickload,
          url: "https://pickload.ng/",
        },
      ];
  return (
    <div>
        <section className="projects">
            <div className="project-grid">
                {projects.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} />
                    <div className="overlay">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="icons">
                            <HiMagnifyingGlassPlus  onClick={() => setSelectedImage(project.image)} className="icon" />
                            <FaLink onClick={() => window.open(project.url, "_blank")} className="icon" />
                        </div>
                    </div>
                </div>
                ))}
            </div>

        {selectedImage && (
            <div className="modal" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Expanded View" />
            </div>
        )}
    </section>
    </div>
  )
}

export default Projects