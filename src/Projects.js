import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  margin: 40px 0;
`;

const ProjectsTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ProjectCard = styled.div`
  background-color: #f5f5f7;
  border-radius: 18px;
  padding: 30px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

const ProjectName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const DescriptionList = styled.ul`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 15px;
  padding-left: 20px;
`;

const DescriptionItem = styled.li`
  margin-bottom: 8px;
`;

const ProjectLink = styled.a`
  color: #0070c9;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

function Projects({ projects }) {
  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectName>{project.name}</ProjectName>
          <DescriptionList>
            {project.description.map((item, itemIndex) => (
              <DescriptionItem key={itemIndex}>{item}</DescriptionItem>
            ))}
          </DescriptionList>
          <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
            Learn More
          </ProjectLink>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}

export default Projects;