import React from 'react'
import AboutMe from "../AboutMe/AboutMe";
import Introduction from "../Introduction/Introduction";
import ContactUs from "../contactus/Contactus";
import { Container } from '@chakra-ui/react'
import WorkExperience from '../WorkExperience/WorkExperience';
import TechSkills from '../techSkills/TechSkills';

const Home = () => {
  return (
    <Container maxW='1200px' className="main" bgGradient={[
      'linear(to-tr, teal.300, yellow.400)',
      'linear(to-t, blue.200, teal.500)',
      'linear(to-b, orange.100, #fff4f9)',
    ]}>
      <Introduction />
      <AboutMe />
      <TechSkills />
      <WorkExperience />
      <ContactUs />
    </Container>
  )
}

export default Home
