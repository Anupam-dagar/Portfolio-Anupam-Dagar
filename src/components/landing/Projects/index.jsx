import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import hoxnox from 'assets/projects/hoxnox.png';
import hasura from 'assets/projects/hasura.svg';
import tabmaster from 'assets/projects/tabmaster.png';
import django from 'assets/projects/django.png';
import ge from 'assets/projects/githubeducation.png';
import reactredux from 'assets/projects/reactredux.png';
import fb from 'assets/projects/fb.png';
import googlechrome from 'assets/projects/googlechrome.png';
import omega from 'assets/projects/omega.png';
import chiron from 'assets/projects/chiron.png';
import { Wrapper, Grid, Item, Content, Stats, Thumbnail, InnerContent } from './styles';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h2>Projects</h2>
    <Grid>
      <Item as="a" href="https://github.com/Anupam-dagar/Portfolio-Generator" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={hoxnox}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Portfolio Generator</h4>
            <p>
              A portfolio generator app which lets user create portfolios in 3 simple steps. The deployed project has
              over <strong>1800</strong> registered users with nearly <strong>700</strong> created portfolios from users
              all around the world.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>93</span>
            </div>
            <div>
              <img src={forkIcon} alt="forks" />
              <span>76</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>Built Using: Django, Jquery, HTML, CSS</span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  Live at:{' '}
                  <a style={{ zIndex: 1 }} href="https://hoxnox.herokuapp.com/">
                    https://hoxnox.herokuapp.com/
                  </a>
                </span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a style={{ zIndex: 1 }} href="https://education.github.com/pack/gallery">
                    Featured at GitHub Student Developer Pack Student Gallery
                  </a>
                </span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>~30000 Pageviews from 143 Countries</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item as="a" href="https://github.com/Ctrl-plus-C/Chiron" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={chiron}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Chiron</h4>
            <p>
              Chiron is a healthcare platform built in a hackathon in a team of 4 developers.It keeps track of your
              daily deitary intake, and runs analytics to suggest possible changes in your diet plan. It also has a
              forum which allows users to interact with each other sharing their stories and interact with other
              patients. A user can also maintain a SelfCare Diary. By running Tonal Analysis on these, Chiron also keeps
              track of the user's mental health.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>15</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>Built Using: React, Django, Hasura, GraphQL, REST API, Zulip API</span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>Won third prize in hackathon with Chiron</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item as="a" href="https://github.com/Anupam-dagar/react-Hasura-todo" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={hasura}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>React Hasura Todo</h4>
            <p>A todo app built using React on the frontend and GraphQL API using Hasura.</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>16</span>
            </div>
            <div>
              <img src={forkIcon} alt="forks" />
              <span>7</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>Built Using: React, Hasura, GraphQL, PostgreSQL</span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  Live at:{' '}
                  <a style={{ zIndex: 1 }} href="https://reacthasuratodo.herokuapp.com/">
                    https://reacthasuratodo.herokuapp.com/
                  </a>
                </span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a style={{ zIndex: 1 }} href="https://blog.anupamdagar.com/reacthasuratodo">
                    Blog
                  </a>
                </span>
              </div>
              <div>
                <img src={starIcon} alt="stars" />
                <span>11.6k Views</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item as="a" href="https://github.com/Anupam-dagar/tabmaster" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={tabmaster}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Tabmaster</h4>
            <p>A chrome extension which enables you to quickly search and switch between tabs.</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>Built Using: Javscript, Webpack, HTML, CSS, Google Chrome API</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a
                    style={{ zIndex: 1 }}
                    href="https://chrome.google.com/webstore/detail/tabmaster/ckbnhlagbjfdhmajglbanjicndfhkefn"
                  >
                    Available at chrome store
                  </a>
                </span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>
      <Item
        as="a"
        href="https://github.com/Anupam-dagar/Leave-management-portal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card>
          <Thumbnail>
            <img
              src={django}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Leave Management Portal</h4>
            <p>
              A leave management portal which lets employees of a government organisation to submit their leaves which
              can be approved by their supervisors notified via email.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>Built Using: Python Django, Jquery, HTML, CSS</span>
            </div>
          </Stats>
        </Card>
      </Item>

      <Item
        as="a"
        href="https://github.com/Anupam-dagar/GitHub-Education-Portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card>
          <Thumbnail>
            <img
              src={ge}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>GitHub Education Portfolio</h4>
            <p>
              A portfolio website built as a tutorial to be sent as an email by GitHub to new students joining GitHub
              Student Developer Pack.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>Built Using: React, Heroku, GitHub Pages</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  Live at:{' '}
                  <a style={{ zIndex: 1 }} href="https://anupamdagar.com/GitHub-Education-Portfolio/">
                    https://anupamdagar.com/GitHub-Education-Portfolio/
                  </a>
                </span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>~2k pageviews from 57 Countries</span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a style={{ zIndex: 1 }} href="https://blog.anupamdagar.com/githubeducationportfolio">
                    Blog{' '}
                  </a>
                </span>
              </div>
              <div>
                <img src={starIcon} alt="stars" />
                <span>11.4k Views</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item
        as="a"
        href="https://github.com/Anupam-dagar/DRF-Websocket-Django-Backend"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card>
          <Thumbnail>
            <img
              src={django}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>RESTAPI and Websocket Backend</h4>
            <p>
              A Python Django Backend which exposes RESTAPI and a websocket server as a means to provide authentication
              and various filtering options on a restaurant database.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>Built Using: Python Django, Django Rest Framework, Django Channels, PostgreSQL, Regex</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  Live at:{' '}
                  <a style={{ zIndex: 1 }} href="https://glintsbackend.herokuapp.com/">
                    https://glintsbackend.herokuapp.com/
                  </a>
                </span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item
        as="a"
        href="https://github.com/Anupam-dagar/React-Redux-Saga-Learning-Project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card>
          <Thumbnail>
            <img
              src={reactredux}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>React Redux Saga Learning Project</h4>
            <p>
              A React frontend using Redux as a datastore which utilises a Django REST and websocket backend to filter
              restaurants and create collections of restaurants while viewing changes in realtime.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>Built Using: React, Redux, Redux Saga, Websockets, Semantic UI</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  Live at:{' '}
                  <a style={{ zIndex: 1 }} href="https://glintsfrontend.herokuapp.com/">
                    https://glintsfrontend.herokuapp.com/
                  </a>
                </span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item
        as="a"
        href="https://github.com/Anupam-dagar/Data-Visualisation-Facebook-Chat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card>
          <Thumbnail>
            <img
              src={fb}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Data Visualisation of Facebook Chat</h4>
            <p>A Python script which visualises a conversation between two users on Facebook Messenger.</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>16</span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>Built Using: Python, Matplotlib, Web Scraping</span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a style={{ zIndex: 1 }} href="https://github.com/Anupam-dagar/Data-Visualisation-Facebook-Chat">
                    View here
                  </a>
                </span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  <a style={{ zIndex: 1 }} href="https://blog.anupamdagar.com/analysingyourfacebookmessengerchat">
                    Blog{' '}
                  </a>
                </span>
              </div>
              <div>
                <img src={starIcon} alt="stars" />
                <span>9.4k Views</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item as="a" href="https://github.com/Anupam-dagar/chrominal-extension" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={googlechrome}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Chrominal</h4>
            <p>
              Chrominal is a chrome extension which lets user write and run a C or C++ code from a new tab of the
              browser.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>
                Chrome Extension: <a href="https://github.com/Anupam-dagar/chrominal-extension">View here</a>
              </span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>
                  Backend: <a href="https://github.com/Anupam-dagar/chrominal">View here</a>
                </span>
              </div>
            </Stats>
          </InnerContent>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>Built Using: Javascript, Python Django</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item
        as="a"
        href="https://github.com/Anupam-dagar/library-management-system"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card>
          <Thumbnail>
            <img
              src={django}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Library Management System</h4>
            <p>
              A library management system which lets a student to search through a database of books and issue them
              while the admins and staff are responsible for approving the issue requests and adding new books to the
              database. Email reminders as well as confirmation are sent to students along with calculating the fine to
              be paid if the student fails to return the book before the due date.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>
                <a href="https://github.com/Anupam-dagar/library-management-system">View here</a>
              </span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>Built Using: Javascript, Python Django, Jquery, Sendgrid, HTML, CSS</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>

      <Item as="a" href="https://github.com/Anupam-dagar/omega-bot-zulip" target="_blank" rel="noopener noreferrer">
        <Card>
          <Thumbnail>
            <img
              src={omega}
              alt="I’m Anupam Dagar. I'm a Full Stack Developer and a Final Year Student at IIIT Allahabad, India"
            />
          </Thumbnail>
          <Content>
            <h4>Omega Bot Zulip</h4>
            <p>
              A zulip chatbot with over 20 features which lets user to tweet from zulip chat, create a google doc, save
              important messages and many other features.
            </p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>
                <a href="https://github.com/Anupam-dagar/omega-bot-zulip">View here</a>
              </span>
            </div>
          </Stats>
          <InnerContent>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>Built Using: Python, Zulip API</span>
              </div>
            </Stats>
          </InnerContent>
        </Card>
      </Item>
    </Grid>
  </Wrapper>
);
