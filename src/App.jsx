import React, { useState } from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('AboutMe');

  const renderSection = () => {
    switch (currentSection) {
      case 'AboutMe':
        return (
          <Container centerContent>
            <Heading as="h2" size="xl" mb="6">About Me</Heading>
            <Text fontSize="lg" textAlign="center">
              I'm a web developer specializing in React. I enjoy building dynamic and interactive web apps.
            </Text>
          </Container>
        );
      case 'Portfolio':
        return (
          <Container centerContent>
            <Heading as="h2" size="xl" mb="6">Portfolio</Heading>
            <Project
                title="CineJournal"
                image=""
                deployLink="https://cinejournal-webapp.onrender.com/"
                repoLink="https://github.com/kevinvongmany/cinejournal-webapp"
              />
            <Project
                title="Note Taker"
                image=""
                deployLink="https://module11challenge-notetaker.onrender.com/"
                repoLink="https://github.com/Wendyydxiao/module11challenge-notetaker"
              />
            <Project
                title="Weather Dashboard"
                image=""
                deployLink="https://wendyydxiao.github.io/module6challenge-weatherdashboard/"
                repoLink="https://github.com/Wendyydxiao/module6challenge-weatherdashboard"
              />
          </Container>
        );
      case 'Contact':
        return (
          <Container centerContent>
            <Heading as="h2" size="xl" mb="6">Contact</Heading>
            {/* Add contact form here */}
          </Container>
        );
      case 'Resume':
        return (
          <Container centerContent>
            <Heading as="h2" size="xl" mb="6">Resume</Heading>
            <Text>Download my resume and check out my proficiencies below.</Text>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              {/* Add more proficiencies here */}
            </ul>
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header setCurrentSection={setCurrentSection} />
      <main>{renderSection()}</main>
      <Footer />
    </>
  );
};

export default App;


