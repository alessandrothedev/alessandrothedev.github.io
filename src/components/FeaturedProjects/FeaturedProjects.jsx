import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { ProjectData } from '../../data/ProjectsData'
import ProjectCard from '../ProjectCard/ProjectCard'
import "./FeaturedProjects.scss"
import img from "../../assets/images/js-calculator.png"

const FeaturedProjects = () => {

    const projectsList = ProjectData.map(project => {
        return <ProjectCard key={project.title} title={project.title} image={img}/>
    })

    return (
        <section className="featured-projects">

            <h2 className="featured-projects__headline">Featured Projects</h2>

            <div className="featured-projects-grid">
                {projectsList}
            </div>

            <Link to="/projects">
                <Button buttonText="See More Projects"/>
            </Link>
            
        </section>
    )
}

export default FeaturedProjects
