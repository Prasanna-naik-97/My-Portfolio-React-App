import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import { Element } from 'react-scroll'

const Contactus = () => {

  return (
    <Box mb='50px' mt='50px'>
      <Element name="contactus-form" className="contactUsElem">
        <Heading as='h3' fontSize={22} color={'blue.600'} mb={5}>Contact</Heading>
        <Heading as='h4' fontSize={25} mb={10}>Don't be shy! Hit me up! 👇</Heading>
        <Flex gap={{base: '50px', xl: '100px'}} flexDirection={{base: 'column', xl: 'row'}}>
          <Flex gap={5}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color='blue' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>
              <Box>
                <Heading as='h3' fontSize={20}>Location</Heading>
                <Box>Bangalore, India</Box>
              </Box>
          </Flex>
          <Flex gap={5}>
            <Link href="mailto:naik.prasanna.49@gmail.com" display={'flex'} gap={'5'} textDecoration='none'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color='blue' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
              <Box>
                <Heading as='h3' fontSize={20}>Mail</Heading>
                <Box>naik.prasanna.49@gmail.com</Box>
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Element>
    </Box>
  )
}

export default Contactus
