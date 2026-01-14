import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Sidebar from './Sidebar';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Footer from './Footer';
import experienceData from './data.json';
import projectsData from './projects.json';
import publicationsData from './publications.json';
import sidebarData from './sidebar.json';
import Biography from './Biography';
import Publications from './Publication';
import Education from './Education';
import Patents from './Patents';
import { Tabs, ConfigProvider } from 'antd';
import { Helmet } from 'react-helmet';

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
  padding: 0px 20px 40px 20px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`;


const AntTabContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 20;
  background-color: rgba(256, 256, 256, 0.61);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(8px);
  margin-bottom: 40px;
`;


const Content = ({ headers }) => {
  return (
    <div className="content">
      {headers.map((header) => (
        <section key={header.id} id={header.id}>
          {header.component}
        </section>
      ))}
    </div>
  );
};

function App() {
  const headers = useMemo(() => [
    { id: 'biography', label: 'Biography', component: <Biography /> },
    { id: 'education', label: 'Education', component: <Education /> },
    { id: 'experience', label: 'Work Experience', component: <WorkExperience experiences={experienceData} /> },
    { id: 'projects', label: 'Projects', component: <Projects projects={projectsData} /> },
    { id: 'publications', label: 'Publications', component: <Publications publications={publicationsData} /> },
    { id: 'patents', label: 'Patents', component: <Patents /> },
  ], []);

  const [activeId, setActiveId] = useState(headers[0].id);
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const activeHeader = headers.find((header) => {
        const element = document.getElementById(header.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          let top = offsetTop - 64;
          return scrollPosition >= top && scrollPosition < top + offsetHeight;
        }
        return false;
      });
      if (activeHeader && !isActive) {
        setActiveId(activeHeader.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headers, isActive]);

  const handleHeaderClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: 'smooth',
      })
      setActiveId(id);
    }
  };

  const resetState = useCallback(() => {
    setIsActive(false);
    setCounter(0);
  }, []);

  const handleTabClick = () => {
    // Clear existing timers if any
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Set active state and reset counter
    setIsActive(true);
    setCounter(0);

    // Start new counter
    intervalRef.current = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    // Set timeout to reset state after 0.75 seconds
    timerRef.current = setTimeout(() => {
      resetState();
      clearInterval(intervalRef.current);
    }, 1000);
  };

  function check(el) {
    let curOverf = el.style.overflow;

    if (!curOverf || curOverf === "visible")
      el.style.overflow = "hidden";

    let isOverflowing = el.clientWidth < el.scrollWidth
      || el.clientHeight < el.scrollHeight;

    el.style.overflow = curOverf;

    return isOverflowing;
  }
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [overflow, setOverflow] = useState(false);
  const handleWindowResize = useCallback(event => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  }, [handleWindowResize]);

  useEffect(() => {
    setOverflow(check(document.getElementsByClassName('ant-tabs-nav-wrap')[0]))
  }, [windowSize])


  return (
    <>
      <Helmet>
        <title>Elton Li</title>
        <meta name="author" content="Elton Li" />
        <meta name="keywords" content="Elton Li, Elton Chun Chai Li, HKUST, Computer Science" />
        <meta name="description" content="Elton Li's personal website" />
      </Helmet>
      <GlobalStyle />
      <AntTabContainer>
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                inkBarColor: "var(--text-secondary)",
                itemSelectedColor: "var(--accent-color)",
                itemHoverColor: "var(--accent-color)",
                titleFontSize: "16px",
                itemActiveColor: "var(--accent-color)",
                horizontalItemGutter: "8px",
                horizontalItemPaddingLG: "12px 16px 12px 16px",
                horizontalMargin: "0 0 0 0",
              },
            },
          }}
        >
          <Tabs
            centered={!overflow}
            size='large'
            activeKey={activeId}
            onTabClick={(k, e) => { handleTabClick(); handleHeaderClick(k) }}
            items={headers.map((header) => {
              const id = header.id;
              return {
                label: header.label,
                key: header.id,
                disabled: false,
                children: '',
              };
            })}
          />
        </ConfigProvider>
      </AntTabContainer>
      <AppContainer>

        <div className='container'>
          <div className="row ">
            <div className='col-lg-4'>
              <Sidebar {...sidebarData} />
            </div>
            <div className='col-lg-8'>
              <Content headers={headers} />
            </div>
          </div>
        </div>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;