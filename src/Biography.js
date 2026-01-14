import React from 'react';
import styled from 'styled-components';

const ExperienceTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const AboutMeContainer = styled.div`

`;

const Separate = styled.div`
    border-bottom: 1px solid #a5a5a5;
    width: calc(100% - 0px);
    transform: translate(0px, -8px);
`;

function Biography() {
  return (
    <AboutMeContainer>

      <ExperienceTitle>Biography</ExperienceTitle>
      <Separate></Separate>
      <div style={{margin: '8px 0px'}}>
      <p>
      I am an MPhil student at the <a href='https://cse.hkust.edu.hk' target='_blank' rel='noopener noreferrer'>Department of Computer Science and Engineering</a>, <a href='https://hkust.edu.hk' target='_blank' rel='noopener noreferrer'>Hong Kong University of Science and Technology (HKUST)</a>, and a member of the <a href='https://cse.hkust.edu.hk/dsf/DSF.html' target='_blank' rel='noopener noreferrer'>DSF Lab</a>. My supervisor is <a href='https://sites.google.com/view/xiaofang-zhou' target='_blank' rel='noopener noreferrer'>Prof. Xiaofang Zhou</a>. I received my Bachelor's degree in Computer Science from HKUST in June 2024. Previously, I interned at J.P. Morgan as an Applied AI/ML Researcher, HKUST as a Junior Research Assistant, and Dymon Asia Capital as a Quant Research Intern.
      </p>
      <p>
      My research focuses on routing optimization, reinforcement learning, and multi-agent systems. I am also interested in natural language processing (NLP) and large language models (LLMs), with applications in both research and industry contexts.</p>
      </div>
    </AboutMeContainer>
  );
}

export default Biography;