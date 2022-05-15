import React from 'react';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="Skills" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I am Anupam Dagar, Software Engineer at Ula. I graduated from IIIT Allahabad in
          India with Bachelors of Technology in Information Technology. I am a full stack developer with 2 years of hands on experience building backend with golang, typescript
          with data stores including mysql, elastic search, mongo db. I have been building frontend for my projects with react js and
          next js and have worked with native android using kotlin in the past. I am currently in early stages of building dapps
          using solidity.
        </p>
        <p>
          You can contact me at <a href="mailto:dagaranupam@gmail.com">dagaranupam@gmail.com</a>
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
