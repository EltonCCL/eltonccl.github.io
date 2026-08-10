import React, { useState } from 'react';
import styled from 'styled-components';
import CertificationsData from './certifications.json';

const Container = styled.div`
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Card = styled.div`
  border-radius: 18px;
  padding: 0px 0px 16px 0px;
`;

const Separate = styled.div`
  border-bottom: 1px solid #e0e0e0;
  width: calc(100% - 0px);
  margin-bottom: 16px;
`;

const CertificationLogo = styled.img`
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

function CertificationLogoWithFallback({ icon, issuer }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <LogoFallback>{issuer.charAt(0)}</LogoFallback>;
  }

  return (
    <CertificationLogo
      src={`https://img.logo.dev/${icon}?token=${LOGO_DEV_PUBLIC_KEY}`}
      alt={`${issuer} logo`}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

const CertificationName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const IssuerName = styled.h4`
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 8px;
`;

const IssueDate = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
  text-align: right;

  @media (max-width: 1199px) {
    text-align: left;
  }
`;

function Certifications() {
  return (
    <Container>
      <Title>Certifications</Title>
      {CertificationsData.map((cert, index) => (
        <Card key={index}>
          <Separate></Separate>
          <ContentWrapper>
            {cert.icon && <CertificationLogoWithFallback icon={cert.icon} issuer={cert.issuer} />}
            <div style={{ flex: 1 }}>
              <div className='container-fluid'>
                <div className="row justify-content-between">
                  <div className="col-xl" style={{ padding: 0 }}>
                    <CertificationName>{cert.name}</CertificationName>
                    <IssuerName>{cert.issuer}</IssuerName>
                  </div>
                  <div className="col-xl-4" style={{ padding: 0 }}>
                    <IssueDate>Issued {cert.issueDate}</IssueDate>
                  </div>
                </div>
              </div>
            </div>
          </ContentWrapper>
        </Card>
      ))}
    </Container>
  );
}

export default Certifications;
