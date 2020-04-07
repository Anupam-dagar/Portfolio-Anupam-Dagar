import React from 'react';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img
          src={dev}
          alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
        />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I am Anupam Dagar, a final year undergraduate student at IIIT Allahabad in India. I am a full stack developer
          and an active open source contributor and have contributed to Zulip, Hasura, Fossasia, PublicLab. Recently I
          started contributing to Elastic. I primarily use Python, Javascript and their different libraries and
          frameworks but I keep my skillset diverse and have experience working on different technologies.
        </p>
        <p>
          I am currently looking for Full Time Opportunities, both remote or in person. I am willing to relocate if
          required.
        </p>
        <p>
          You can contact me at <a href="mailto:dagaranupam@gmail.com">dagaranupam@gmail.com</a>
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
