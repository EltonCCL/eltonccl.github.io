import React, { useState } from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
`;

const ExperienceTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Card = styled.div`
  border-radius: 18px;
  padding: 0px 0px 16px 0px;
`;

const CompanyName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  margin-top: 0px;
`;

const JobTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 8px;
`;

const DateRange = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
  text-align: right;

  @media (max-width: 1199px) {
    text-align: left;
  }
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
const Separate = styled.div`
    border-bottom: 1px solid #e0e0e0;
    width: calc(100% - 0px);
    margin-bottom: 16px;
`;

const CompanyLogo = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin-right: 16px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }
`;

const LogoFallback = styled.div`
  width: 56px;
  height: 56px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-right: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  color: #666;
  
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    margin-right: 12px;
    font-size: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 0px;
`;

const LOGO_DEV_PUBLIC_KEY = 'pk_bGe_svLvQhOJG5-N4rQqdw';

function CompanyLogoWithFallback({ icon, company }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <LogoFallback>{company.charAt(0)}</LogoFallback>;
  }

  return (
    <CompanyLogo
      src={`https://img.logo.dev/${icon}?token=${LOGO_DEV_PUBLIC_KEY}`}
      alt={`${company} logo`}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

function WorkExperience({ experiences }) {
  return (
    <ExperienceContainer>
      <ExperienceTitle>Work Experience</ExperienceTitle>
      {experiences.map((exp, index) => (
        <>
          <Card key={index}>
            <Separate></Separate>
            <ContentWrapper>
              {exp.icon && <CompanyLogoWithFallback icon={exp.icon} company={exp.company} />}
              <div style={{ flex: 1 }}>
                <div className='container-fluid'>
                  <div className="row justify-content-between">
                    <div className="col-xl" style={{ padding: 0 }}>
                      <CompanyName>{exp.company}</CompanyName>
                      <JobTitle>{exp.title}</JobTitle>
                    </div>
                    <div className="col-xl-4" style={{ padding: 0 }}>
                      <DateRange>{exp.startDate} - {exp.endDate}</DateRange>
                    </div>
                  </div>
                </div>
                <DescriptionList>
                  {exp.description.map((item, itemIndex) => (
                    <DescriptionItem key={itemIndex}>{item}</DescriptionItem>
                  ))}
                </DescriptionList>
              </div>
            </ContentWrapper>
          </Card>
        </>
      ))}
    </ExperienceContainer >
  );
}

export default WorkExperience;
