import React from 'react'
import './projects.scss';

const Projects = () => {
  return (
    <div className="projects">
        <h2>Projects &nbsp; Worked</h2>
        <div className="project">
            <div className="project-img">
                <a href="https://www.lecreuset.co.uk/en_GB/" target="_blank">
                <img src="assets/images/lecreuset.PNG" alt="le creuset site image" />
                </a>
            </div>
            <div className="title">
                <h3>Le Creuset</h3>
            </div>
            <div className="project-description">
                <p>Making Joy in the Kitchen Since 1925 ; The First. The first to pioneer colorful enameled cast iron cookware</p>
            </div>
        </div>
        <div className="project">
            <div className="project-img">
                <a href="https://www.currys.co.uk/" target="_blank">
                <img src="assets/images/currys.PNG" alt="le creuset site image" />
                </a>
            </div>
            <div className="title">
                <h3>Currys</h3>
            </div>
            <div className="project-description">
                <p>Making Joy in the Kitchen Since 1925 ; The First. The first to pioneer colorful enameled cast iron cookware</p>
            </div>
        </div>
        <div className="project">
            <div className="project-img">
                <a href="https://www.lumens.com/" target="_blank">
                <img src="assets/images/lumens.PNG" alt="le creuset site image" />
                </a>
            </div>
            <div className="title">
                <h3>Lumens</h3>
            </div>
            <div className="project-description">
                <p>Making Joy in the Kitchen Since 1925 ; The First. The first to pioneer colorful enameled cast iron cookware</p>
            </div>
        </div>
    </div>
  )
}

export default Projects
