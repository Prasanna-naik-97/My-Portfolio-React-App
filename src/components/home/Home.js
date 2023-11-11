import React from 'react'
import AboutMe from "../AboutMe/AboutMe";
import Introduction from "../Introduction/Introduction";
import ContactUs from "../contactus/Contactus";
import { Container } from '@chakra-ui/react'
import WorkExperience from '../WorkExperience/WorkExperience';
import TechSkills from '../techSkills/TechSkills';

const Home = () => {
  return (
    <Container maxW='1070px' padding={'40px'} className="main">
      <Introduction />
      <AboutMe />
      <TechSkills />
      <WorkExperience />
      <ContactUs />
    </Container>
  )
}

export default Home
