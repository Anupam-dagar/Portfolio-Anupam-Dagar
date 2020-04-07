import React from 'react';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import zulip from 'assets/projects/zulip.png';
import fossasia from 'assets/projects/fossasia.png';
import hasura from 'assets/projects/hasura.svg';
import publiclab from 'assets/projects/publiclab.png';
import elastic from 'assets/projects/elastic.png';
import { Wrapper, Grid, Item, Content, Stats, Thumbnail, InnerContent } from './styles';

export const Opensource = () => (
  <Wrapper as={Container} id="conferences">
    <h2>Opensource Contributions</h2>
    <Grid>
      <Item as="a" href="https://github.com/zulip" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={zulip}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Zulip</h4>
            <p>
              Zulip is a powerful, open source group chat application that combines the immediacy of real-time chat with
              the productivity benefits of threaded conversations.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>
                <a href="https://github.com/pulls?q=is%3Apr+author%3AAnupam-dagar+archived%3Afalse+org%3Azulip+">
                  Pull Requests
                </a>
              </span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>September 2017 - September 2018</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>
      <Item as="a" href="https://github.com/fossasia" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={fossasia}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Fossasia</h4>
            <p>
              FOSSASIA is an organization developing software applications for social change using a wide-range of
              technologies. It was established 2009. Projects range from Free and Open Source software, to design,
              graphics and hardware.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>
                <a href="https://github.com/pulls?q=is%3Apr+author%3AAnupam-dagar+archived%3Afalse+org%3Afossasia">
                  Pull Requests
                </a>
              </span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>January 2019 - August 2019</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>
      <Item as="a" href="https://github.com/hasura#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={hasura}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Hasura</h4>
            <p>
              Hasura is an open source engine that connects to your databases & microservices and auto-generates a
              production-ready GraphQL backend.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>
                <a href="https://github.com/pulls?q=is%3Apr+author%3AAnupam-dagar+archived%3Afalse+org%3Ahasura">
                  Pull Requests
                </a>
              </span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>December 2018 - January 2019</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>
      <Item as="a" href="https://github.com/publiclab" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={publiclab}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Public Lab</h4>
            <p>
              Public Lab is a community and a non-profit, democratizing science to address environmental issues that
              affect people.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>
                <a href="https://github.com/pulls?q=is%3Apr+author%3AAnupam-dagar+archived%3Afalse+org%3Apubliclab">
                  Pull Requests
                </a>
              </span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>July 2019 - September 2019</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>
      <Item as="a" href="https://github.com/elastic" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={elastic}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Elastic</h4>
            <p>Elastic is the company behind the Elastic Stack — that's Elasticsearch, Kibana, Beats, and Logstash.</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>
                <a href="https://github.com/pulls?q=is%3Apr+author%3AAnupam-dagar+archived%3Afalse+org%3Aelastic">
                  Pull Requests
                </a>
              </span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>March 2019 - Present</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>
    </Grid>
  </Wrapper>
);
