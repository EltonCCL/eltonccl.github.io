import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: var(--bg-secondary);
  border-radius: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 30px;
  display: block;
  border: 3px solid var(--bg-primary);
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
  color: var(--text-secondary);
`;

const SubsubsectionTitle = styled.h4`
  font-size: 14px;
  font-weight: 400;
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
  font-size: 12px;
  color: var(--text-secondary);
  font-style: italic;
`;

const LanguagesContainer = styled.div`
  // @media (max-width: 768px) {
  //   display: grid;
  //   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  //   gap: 10px;
  // }
`;

function Sidebar({ name, title, imageUrl, skills, languages }) {
  console.log(skills)
  return (
    <SidebarContainer>
      <ProfileImage src={imageUrl} alt={name} />
      <SectionTitle>Skills</SectionTitle>
      
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
      <SubsectionTitle>Languages</SubsectionTitle>
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