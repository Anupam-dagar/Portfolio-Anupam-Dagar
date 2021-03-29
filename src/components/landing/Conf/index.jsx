import React from 'react';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import githubuniverse from 'assets/projects/githubuniverse.png';
import githubsatellite from 'assets/projects/satellite.jpeg';
import fossasia from 'assets/projects/fossasia.png';
import pragma from 'assets/projects/pragma.png';
import hackademic from 'assets/projects/hackademic.png';
import { Wrapper, Grid, Item, Content, Stats, Thumbnail, InnerContent } from './styles';

export const Conf = () => (
  <Wrapper as={Container} id="conferences">
    <h2>Conferences</h2>
    <Grid>
      <Item as="a" href="https://youtu.be/8zN9djgoO8A?t=4122" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img src={hackademic} alt="Hackademic by Hack In The North" />
          </Thumbnail>
          <Content>
            <h4>Remote Talk</h4>
            <h4>Hackademic by Hack In The North</h4>
            <p>
              Delivered a remote talk on <strong>Getting Reactive with Reactive Programming</strong>
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>IIIT Allahabad, India</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a href="https://youtu.be/8zN9djgoO8A?t=4122">Youtube Link</a>
                </span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item>
        <Card>
          <Thumbnail>
            <img src={githubuniverse} alt="GitHub Universe Logo" />
          </Thumbnail>
          <Content>
            <h4>Remote Talk</h4>
            <h4>GitHub Education Day at GitHub Universe 2019</h4>
            <p>
              Delivered a remote talk on{' '}
              <strong>GitHub Campus Experts and the rise of my on Campus Tech Community</strong>
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>GitHub HQ, San Francisco</span>
            </div>
          </Stats>
        </Card>
      </Item>

      <Item as="a" href="https://blog.anupamdagar.com/githubsatellite" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img src={githubsatellite} alt="GitHub Satellite Logo" />
          </Thumbnail>
          <Content>
            <h4>Lightening Talk</h4>
            <h4>GitHub Campus Experts meetup at GitHub Satellite 2019</h4>
            <p>
              Delivered a lightening talk on <strong>My experience as the community leader of Geekhaven</strong> in the
              GitHub Campus Experts meetup held a day before GitHub Satellite 2019 in <strong>Berlin, Germany</strong>
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>Berlin, Germany</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a href="https://blog.anupamdagar.com/githubsatellite">Blog</a>
                </span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>
      <Item as="a" href="https://www.youtube.com/watch?v=sT0p7eSYAH0" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img src={fossasia} alt="Fossasia Logo" />
          </Thumbnail>
          <Content>
            <h4>Lightening Talk</h4>
            <h4>Fossasia Summit 2019</h4>
            <p>
              Delivered a lightening talk on <strong>Why GraphQL over REST</strong> in the Fossasia Summit 2019 in{' '}
              <strong>Singapore</strong>
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>Singapore</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a href="https://www.youtube.com/watch?v=sT0p7eSYAH0">Youtube Link</a>
                </span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item>
        <Card>
          <Thumbnail>
            <img src={pragma} alt="Pragma Logo" />
          </Thumbnail>
          <Content>
            <h4>30 minute talk</h4>
            <h4>Pragma IIIT Allahabad</h4>
            <p>
              Delivered a 30 min talk on <strong>Leveraging the power of GraphQL with Hasura</strong> in Pragma
              Conference 2019 organised at <strong>IIIT Allahabad, India</strong>
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>IIIT Allahabad, India</span>
            </div>
          </Stats>
        </Card>
      </Item>
    </Grid>
  </Wrapper>
);
