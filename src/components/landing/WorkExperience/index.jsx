import React from 'react';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import dtdl from 'assets/projects/dtdl.png';
import { Wrapper, Grid, Item, Content, Stats, Thumbnail } from './styles';

export const WorkExperience = () => (
  <Wrapper as={Container} id="workexperience">
    <h2>WorkExperience</h2>
    <Grid>
      <Item as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img src={dtdl} alt="Deutsche Telekom Digital Labs" />
          </Thumbnail>
          <Content>
            <h4>Software Engineer</h4>
            <h4>Deutsche Telekom Digital Labs</h4>
            <p>Contributing to OneTv, an Android TV product for the users in 9 European Countries.</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>July 2020 - Present</span>
            </div>
          </Stats>
        </Card>
      </Item>
    </Grid>
  </Wrapper>
);
