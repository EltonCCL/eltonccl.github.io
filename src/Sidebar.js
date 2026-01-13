import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: var(--bg-primary);
  border-radius: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  @media (max-width: 992px) {
    margin-bottom: 40px;
  }
`;

const Banner = styled.div`
  z-Index: 5;
  position: absolute;
  background-color: #ede3c6;
  width: 100%;
  height: 134px;
  transform: translate(-30px, -30px);
  border-radius: 18px 18px 0px 0px;
`;

const ProfileImage = styled.img`
  width: 208px;
  height: 208px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 30px;
  display: block;
  border: 3px solid var(--bg-primary);
  z-index: 10;
  position: relative;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SubsectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  color: var(--text-primary);
`;

const SubsubsectionTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  color: var(--text-secondary);
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

const Tag = styled.span`
  background-color: var(--bg-primary);
  color: var(--text-primary);
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #e0e0e0;
  }
`;

const LanguageItem = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LanguageName = styled.span`
  font-weight: 500;
  color: var(--text-primary);
`;

const LanguageLevel = styled.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
`;

const LanguagesContainer = styled.div`
  margin-top: 8px;
`;

const Separate = styled.div`
    border-bottom: 1px solid #a5a5a5;
    transform: translateY(-6px);

`;
const EducationItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
`;
const AboutMe = styled.div`
  padding-bottom: 15px
`;

function Sidebar({ name, title, imageUrl, skills, languages }) {
  return (
    <SidebarContainer>
      <Banner></Banner>
      <ProfileImage src={imageUrl} alt={name} />

      {/* <SectionTitle>Education</SectionTitle>
      <EducationItem>Master in Philosophy in Computer Science and Engineering</EducationItem> */}
      <AboutMe>
      <Name>Elton Chun-Chai, LI</Name>
      <EducationItem>MPhil in Computer Science, HKUST</EducationItem>
      <EducationItem>BEng in Computer Science, HKUST</EducationItem>
      <EducationItem><div style={{fontSize: "14px", color: "#666", paddingTop: "4px"}}>Passed Level I of the CFA® Program</div></EducationItem>
      </AboutMe>
      <SectionTitle>Skills</SectionTitle>
      <Separate></Separate>
      <SubsectionTitle>Programming</SubsectionTitle>
      <TagContainer>
        {skills.Programming.map((skill, index) => (
          <Tag key={index}>{skill}</Tag>
        ))}
      </TagContainer>

      <SubsectionTitle>Technical</SubsectionTitle>
      {skills.Technical.map((category, index) => (
        <div key={index}>
          <SubsubsectionTitle>{category.category}</SubsubsectionTitle>
          <TagContainer>
            {category.items.map((item, itemIndex) => (
              <Tag key={itemIndex}>{item}</Tag>
            ))}
          </TagContainer>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}></div>
      <SectionTitle>Languages</SectionTitle>
      <Separate></Separate>
      <LanguagesContainer>
        {languages.map((language, index) => (
          <LanguageItem key={index}>
            <LanguageName>{language.name}</LanguageName>
            <LanguageLevel>{language.level}</LanguageLevel>
          </LanguageItem>
        ))}
      </LanguagesContainer>
    </SidebarContainer>
  );
}

export default Sidebar;