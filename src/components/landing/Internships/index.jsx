import React from 'react';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import ntu from 'assets/projects/ntu.jpg';
import fossasia from 'assets/projects/fossasia.png';
import nucleus from 'assets/projects/nucleus.png';
import hasura from 'assets/projects/hasura.svg';
import { Wrapper, Grid, Item, Content, Stats, Thumbnail, InnerContent } from './styles';

export const Internships = () => (
  <Wrapper as={Container} id="internships">
    <h2>Internships</h2>
    <Grid>
      <Item as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={ntu}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Research Assistant</h4>
            <h4>Nanyang Technological University, Singapore</h4>
            <p>
              Working as a Research Assistant in the field of NLP and Speech Synthesis building a development project.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>January 2020 - July 2020</span>
            </div>
          </Stats>
        </Card>
      </Item>

      <Item as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={hasura}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Software Developer Intern</h4>
            <h4>Hasura, Bangalore(Remote) </h4>
            <p>
              Added a generic toggle component for text to textarea making it easier to add long text. Implemented a
              generic text to json editor toggle component ensuring a smoother uploading process. Integrated a
              validation module to the modify section of Hasura’s console.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>December 2018 - January 2019</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a href="https://github.com/pulls?q=is%3Apr+author%3AAnupam-dagar+archived%3Afalse+org%3Ahasura+is%3Aclosed">
                    Pull Requests
                  </a>
                </span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={fossasia}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Open Source Developer Intern</h4>
            <h4>Fossasia, Singapore(Remote) </h4>
            <p>
              Contributed to the development of both Ember Frontend and Flask Backend of Fossasia's in production
              project Open Event. Got over 52 Pull Requests merged which involved improving frontend and writing tests
              for backend.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>June 2019 - August 2019</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a href="https://github.com/pulls?q=is%3Apr+author%3AAnupam-dagar+archived%3Afalse+org%3Afossasia+is%3Aclosed">
                    Pull Requests
                  </a>
                </span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>
      <Item as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={nucleus}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Software Developer Intern</h4>
            <h4>Nucleus Software, Noida(India) </h4>
            <p>
              Built a production ready voice user interface for their product which is used by using Alexa skill.
              Implemented a conversational model of Alexa for the voice user interface.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>May 2019 - July 2019</span>
            </div>
          </Stats>
        </Card>
      </Item>
    </Grid>
  </Wrapper>
);
