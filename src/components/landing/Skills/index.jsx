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
          I am Anupam Dagar, Software Engineer at Deutsche Telekom Digital Labs. I graduated from IIIT Allahabad in
          India. I am a full stack developer and an active open source contributor and have contributed to Zulip,
          Hasura, Fossasia, PublicLab, Elastic. I primarily use Python, Javascript and their different libraries and
          frameworks but I keep my skillset diverse and have experience working on different technologies including
          Kotlin and RxJava.
        </p>
        <p>
          You can contact me at <a href="mailto:dagaranupam@gmail.com">dagaranupam@gmail.com</a>
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
