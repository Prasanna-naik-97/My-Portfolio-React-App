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
                <Heading as='h1'>Front-End React Developer</Heading>
                <Image borderRadius='100%' src={handWave} alt='Profile Picture' position='absolute' top='0' right='10px' height='56px' />
                <Box my='20px'>Hi, I'm Stefan Topalovic. A passionate Front-end React Developer based in Belgrade, Serbia. 📍</Box>
                <Flex>
                  <Image src={linedin} alt='linkedin' />
                  <Image src={github} alt='github' />
                </Flex>
            </Box>
            <Box order={{base: '1', lg: '2'}}>
                <Image borderRadius='100%' src='assets/images/profile.png' alt='Profile Picture' margin='0 auto' height='350px' width='350px' />
            </Box>
        </Flex>
    </Element>
  )
}

export default Introduction
