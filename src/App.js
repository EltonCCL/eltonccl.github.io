import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Footer from './Footer';
import experienceData from './data.json';
import projectsData from './projects.json';
import sidebarData from './sidebar.json';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f7;
    --text-primary: #333333;
    --text-secondary: #666666;
    --accent-color: #333333;
    --border-color: #e0e0e0;
  }
`;

const AppContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 40px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 20px;
  overflow-x: clip;
  width: 50%
  -webkit-overflow-scrolling: touch;

  @media (max-width: 992px) {
    margin-top: 40px;
  }
`;

const TabButton = styled.button`
  background-color: transparent;
  color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-secondary)'};
  border: none;
  padding: 10px 0;
  margin-right: 20px;
  font-size: 18px;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--accent-color);
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--accent-color);
  }
`;

function App() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <div className='container'>
          <div className="row ">
            <div className='col-lg-4'>
              <Sidebar {...sidebarData} />
            </div>
            <div className='col-lg-8'>
              <TabContainer>
                <TabButton
                  active={activeTab === 'experience'}
                  onClick={() => setActiveTab('experience')}
                >
                  Work Experience
                </TabButton>
                <TabButton
                  active={activeTab === 'projects'}
                  onClick={() => setActiveTab('projects')}
                >
                  Projects
                </TabButton>
              </TabContainer>
              {activeTab === 'experience' ? (
                <WorkExperience experiences={experienceData} />
              ) : (
                <Projects projects={projectsData} />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;