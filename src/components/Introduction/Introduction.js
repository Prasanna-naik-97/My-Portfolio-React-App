import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import handWave from "../../assets/images/techIcons/hand.png";
import linedin from "../../assets/images/techIcons/linedin.svg";
import github from "../../assets/images/techIcons/github.svg";


const Introduction = () => {
  return (
    <Element name="home-intro">
        <Flex className="description" gap={{base: '0', lg: '116'}} direction={{base: 'column', lg: 'row'}} alignItems={{base: 'center', lg: 'center'}}>
            <Box position='relative' order={{base: '2', lg: '1'}}>
                <Heading as='h1'>SFCC Front-End Developer</Heading>
                <Image borderRadius='100%' src={handWave} alt='Profile Picture' position='absolute' top='0' right='10px' height='56px' />
                <Box my='20px'>Hi, I'm Prasanna Naik. A passionate SFCC Front-end Developer based in Bangalore, India. 📍</Box>
                <Flex gap={{base: '5', xl: '1'}}>
                  <a href="https://www.linkedin.com/in/prasanna-naik" target='_blank'>
                    <Image width={{base: '40px', xl: '50px'}} height={'auto'} src={linedin} alt='linkedin' />
                  </a>
                  <a href="https://github.com/Prasanna-naik-97" target="_blank">
                    <Image width={{base: '45px', xl: '50px'}} height={'auto'} src={github} alt='github' />
                  </a>
                </Flex>
            </Box>
            <Box order={{base: '1', lg: '2'}}>
                <Image borderRadius='100%' src='assets/images/profile.png' alt='Profile Picture' margin='0 auto' height={{base: '250px', xl: '350px'}} width={{base: '250px', xl: '350px'}} />
            </Box>
        </Flex>
    </Element>
  )
}

export default Introduction
