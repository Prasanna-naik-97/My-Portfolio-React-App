import { Box, Container, Heading } from '@chakra-ui/react'
import dentsuLogo from "../../assets/images/techIcons/denstu.jpg";
import mindtreeLogo from "../../assets/images/techIcons/mindtree.jpg";
import smc2Logo from "../../assets/images/techIcons/smc2.jpg";
import React from 'react'

const WorkExperience = () => {
  const dentsu = {
    _before: {
        content: '""',
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        border: '2px solid #34b7a7',
        backgroundColor: '#fff',
        left: '-26px',
        top: '0',
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundImage: dentsuLogo
    }
  }
  const mindtree = {
    _before: {
        content: '""',
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        border: '2px solid #34b7a7',
        backgroundColor: '#fff',
        left: '-26px',
        top: '0',
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundImage: mindtreeLogo
    }
  }
  const smcSquared = {
    _before: {
        content: '""',
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        border: '2px solid #34b7a7',
        backgroundColor: '#fff',
        left: '-26px',
        top: '0',
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundImage: smc2Logo
    }
  }

//   const companies = [dentsu, mindtree, smcSquared]

  const experiences = [{
    companyName: 'Dentsu',
    role: 'SFCC Senior Front End Developer',
    period: '2022-23',
    place: 'Bangalore, India',
    style: dentsu 
  },
  {
    companyName: 'Mindtree',
    role: 'SFCC Front End Developer',
    period: '2021-22',
    place: 'Bangalore, India',
    style: mindtree
  },
  {
    companyName: 'Smc2',
    role: 'SFCC UI Developer',
    period: '2019-21',
    place: 'Bangalore, India',
    style: smcSquared
  }]

  return (
    <Box>
        <Box mb='5' pb='6' color='#110e0e' fontSize={{base: '40px', lg: '40px'}}>Professional Experience</Box>
        <Container>
            {experiences.map((company) => (
                <Box sx={company.style} position='relative'>
                    <Box pl='8' pb='20' borderLeft='2px solid #34b7a7'>
                        <Heading as='h4' fontSize='24' pt='2'>{company.companyName}</Heading>
                        <Box bgGradient='linear(to-r, green.200, pink.500)' p='2' my='3' display='inline-block' borderRadius='50'>{company.role}</Box>
                        <p><em>{company.place}</em></p>
                    </Box>
                </Box>
            ))}
        </Container>
    </Box>
  )
}

export default WorkExperience
