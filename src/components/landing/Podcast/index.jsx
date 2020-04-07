import React from 'react';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import codish from 'assets/projects/codish.png';
import { Wrapper, Grid, Item, Content, Stats, Thumbnail, InnerContent } from './styles';

export const Podcast = () => (
  <Wrapper as={Container} id="podcast">
    <h2>Podcasts</h2>
    <Grid>
      <Item
        as="a"
        href="https://www.heroku.com/podcasts/codeish/43-the-github-student-developer-pack"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card>
          <Thumbnail>
            <img
              src={codish}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Heroku Codish</h4>
            <h4>The GitHub Student Developer Pack</h4>
            <p>Recorded a podcast with Heroku for their podcast series Cod[ish]</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>
                <a href="https://www.heroku.com/podcasts/codeish/43-the-github-student-developer-pack">Listen Here</a>
              </span>
            </div>
          </Stats>
        </Card>
      </Item>
    </Grid>
  </Wrapper>
);
