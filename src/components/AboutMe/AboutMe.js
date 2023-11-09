import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import pcLogo from "../../assets/images/techIcons/pc.webp";

const AboutMe = () => {
  return (
    <Box className="introduction" mt='4' mb='2' py='45'>
        <Grid templateColumns={{base: '1fr', lg: '1fr 1fr'}} gap={6} justifyContent='center'>
            <GridItem>
                <Image src={pcLogo} borderRadius='1.7rem' width={{base: '90%', lg: '30rem'}} height={{base: '90%', lg: '22rem'}} margin={{base: '0 auto', lg: 'unset'}} />
            </GridItem>
            <GridItem>
                <Box flex='50%'>
                    <Box fontSize='20px' color='blue.600' fontWeight='700'>ABOUT ME</Box>
                    <Box fontSize='1.6rem'  fontWeight='700' lineHeight='35px' mb='5'>A dedicated Front-end Developer based in Belgrade, Serbia 📍</Box>
                    <Box fontSize='17px' fontWeight='500'>
                        As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.
                        I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic,
                        engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
                        I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default AboutMe
