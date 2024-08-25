import { ProjectCard } from '@/components/user/project-card'
import { Project } from '@prisma/client'
import React from 'react'


function ProjectSection({ projects }: { projects: Project[] }) {




    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        dates={project.dates || ""}
                        tags={project.tags}
                        image={project.image || ""}
                        link={project.href || ""}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectSection