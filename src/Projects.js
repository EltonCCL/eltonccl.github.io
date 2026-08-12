import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
`;

const ProjectsTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const ProjectCard = styled.div`
  border-radius: 18px;
  padding: 0px 0px 24px 0px;
`;

const ProjectName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  margin-top: 0px;
`;

const DescriptionList = styled.ul`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 0px;
  margin-top: 8px;
  padding-left: 20px;
  color: #333;
`;

const DescriptionItem = styled.li`
  margin-bottom: 10px;
`;

const ProjectImage = styled.img`
  display: block;
  width: 360px;
  max-width: 100%;
  height: auto;
  margin: 14px auto 0;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ProjectLink = styled.a`
  color: #0070c9;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Separate = styled.div`
    border-bottom: 1px solid #e0e0e0;
    width: calc(100% - 0px);
    margin-bottom: 16px;
`;

function Projects({ projects }) {
  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      {projects.map((project, index) => (
        <>
        <Separate></Separate>
        <ProjectCard key={index}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <ProjectName>{project.name}</ProjectName>
          {project.link && <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
            [Code]
          </ProjectLink>}
          </div>
          <DescriptionList>
            {project.description.map((item, itemIndex) => (
              <DescriptionItem key={itemIndex}>{item}</DescriptionItem>
            ))}
          </DescriptionList>
          {project.image && (
            <ProjectImage src={project.image} alt={project.imageAlt || project.name} />
          )}

        </ProjectCard></>

      ))}
    </ProjectsContainer>
  );
}

export default Projects;
