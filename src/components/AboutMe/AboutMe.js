import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import pcLogo from "../../assets/images/techIcons/pc.webp";
import { Element } from 'react-scroll';

const AboutMe = () => {
  return (
    
    <Box className="introduction" mt='4' mb='2' py='45'>
        <Element name="about-me" className="aboutmeElem">
            <Grid templateColumns={{base: '1fr', lg: '1fr 1fr'}} gap={6} justifyContent='center'>
                <GridItem>
                    <Image src={pcLogo} borderRadius='1.7rem' width={{base: '90%', lg: '30rem'}} height={{base: '90%', lg: '22rem'}} margin={{base: '0 auto', lg: 'unset'}} />
                </GridItem>
                <GridItem>
                    <Box flex='50%'>
                        <Box fontSize='20px' color='blue.600' fontWeight='700'>ABOUT ME</Box>
                        <Box fontSize='1.6rem'  fontWeight='700' lineHeight='35px' mb='5'>🚀 B2C Salesforce Commerce Cloud Developer | 5+ Years of Experience</Box>
                        <Box fontSize='17px' fontWeight='500'>
                            With 5 plus years of expertise in B2C Salesforce Commerce Cloud, I specialize in front-end development, combining a strong
                            foundation in JavaScript (ECMAScript 5/6) with hands-on experience in SFRA and UX design.
                            Proficient in HTML5, CSS, Bootstrap, and jQuery, my work reflects a commitment to delivering 
                            visually stunning and user-centric digital experiences. Additionally, I possess knowledge in NodeJS/Express JS, 
                            elevating my capabilities in front-end development.
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </Element>
    </Box>
  )
}

export default AboutMe
