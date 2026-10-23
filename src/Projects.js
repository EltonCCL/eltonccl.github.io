import React, { useState } from 'react';
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

const DemoContainer = styled.div`
  width: 360px;
  max-width: 100%;
  margin: 14px auto 0;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  box-sizing: border-box;
`;

const DemoButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 0;
  border: 0;
  background: #111;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid #0070c9;
    outline-offset: -3px;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    place-items: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 24px;
  }

  &:hover span {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const DemoVideo = styled.video`
  display: block;
  width: 100%;
  height: auto;
`;

function ProjectDemo({ project }) {
  const [playing, setPlaying] = useState(false);

  return (
    <DemoContainer>
      {playing ? (
        <DemoVideo controls autoPlay muted playsInline preload="none" poster={project.videoPoster} aria-label={`${project.name} demo`}>
          <source src={project.video} type="video/mp4" />
          <a href={project.video}>Watch the demo video</a>
        </DemoVideo>
      ) : (
        <DemoButton type="button" onClick={() => setPlaying(true)} aria-label={`Play ${project.name} demo`}>
          <img src={project.videoPoster} alt={`${project.name} demo preview`} loading="lazy" />
          <span aria-hidden="true">▶</span>
        </DemoButton>
      )}
    </DemoContainer>
  );
}

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
            [{project.linkLabel || 'Code'}]
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
          {project.video && <ProjectDemo project={project} />}

        </ProjectCard></>

      ))}
    </ProjectsContainer>
  );
}

export default Projects;
