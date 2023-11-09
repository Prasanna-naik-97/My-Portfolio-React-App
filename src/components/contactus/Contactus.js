import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Element } from 'react-scroll'

const Contactus = () => {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailInputChange = (e) => setInput(e.target.value)
  const isError = input === ''

  const handleMessageInputChange = (e) => setMessage(e.target.value)

  return (
    <Element name="contactus-form">
      <Flex mt='50px' bgGradient='linear(to-r, #766a6a, #e6d4d4,  #766a6a)' gap='20px' borderRadius='25px' p='10' flexDirection={{base: 'column', lg: 'row'}}>
        <Heading as='h2' size='xl' flex='40%'>
          Want to get in touch?
        </Heading>
        <Box flex='60%'>
          <form action="" method="post">
            
            <FormControl isRequired pt='4'>
              <FormLabel>First name</FormLabel>
              <Input placeholder='First name' />
            </FormControl>

            <FormControl isRequired pt='4'>
              <FormLabel>Email</FormLabel>
              <Input type='email' value={input} onChange={handleEmailInputChange} placeholder='Enter your email' />
              {!isError ? (
                <FormHelperText>
                  Enter your email so that I can reach out to you.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isRequired pt='4'>
              <FormLabel>Message</FormLabel>
              <Textarea
                value={message}
                onChange={handleMessageInputChange}
                placeholder='Enter your message'
                size='sm'
              />
            </FormControl>

            <Button mt={4} colorScheme='teal' type='submit' mb='4'>
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </Element>
  )
}

export default Contactus
