import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Internships, Conf, Opensource, Podcast } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Internships />
    <Projects />
    <Opensource />
    <Conf />
    <Podcast />
    <Skills />
  </Layout>
);
