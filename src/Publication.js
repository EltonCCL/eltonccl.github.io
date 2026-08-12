import React from 'react';
import styled from 'styled-components';

const PublicationsContainer = styled.div`
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Card = styled.div`
  border-radius: 18px;
  padding: 0px 0px 24px 0px;
`;

const Separate = styled.div`
  border-bottom: 1px solid #e0e0e0;
  width: calc(100% - 0px);
  margin-bottom: 16px;
`;

const PaperTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 0px;
  line-height: 1.4;
`;

const Authors = styled.p`
  font-size: 15px;
  color: #666;
  margin-bottom: 4px;
`;

const VenueInfo = styled.p`
  font-size: 15px;
  color: #333;
  margin-bottom: 8px;
  font-style: italic;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const PaperLink = styled.a`
  color: #0070c9;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background-color: #f0f0f0;
  color: #666;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  margin-right: 8px;
`;

function Publications({ publications }) {
  if (!publications || publications.length === 0) {
    return (
      <PublicationsContainer>
        <Title>Publications</Title>
        <Card>to be continued...</Card>
      </PublicationsContainer>
    );
  }

  // You can customize this with your actual name
  const myName = "Elton Chun-Chai Li";

  return (
    <PublicationsContainer>
      <Title>Publications</Title>
      {publications.map((pub, index) => (
        <React.Fragment key={index}>
          <Separate></Separate>
          <Card>
            <PaperTitle>{pub.title}</PaperTitle>
            <Authors>
              {pub.authors.map((author, idx) => (
                <React.Fragment key={idx}>
                  {author === myName ? <strong>{author}</strong> : author}
                  {idx < pub.authors.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
            </Authors>
            <VenueInfo>
              {pub.type && <Badge>{pub.type}</Badge>}
              {pub.venue}, {pub.year}
            </VenueInfo>
            {(pub.link || pub.doi) && (
              <LinkContainer>
                {pub.link && (
                  <PaperLink href={pub.link} target="_blank" rel="noopener noreferrer">
                    [PDF]
                  </PaperLink>
                )}
                {pub.doi && (
                  <PaperLink href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                    [DOI]
                  </PaperLink>
                )}
              </LinkContainer>
            )}
          </Card>
        </React.Fragment>
      ))}
    </PublicationsContainer>
  );
}

export default Publications;