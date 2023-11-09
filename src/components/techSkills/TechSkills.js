import React from 'react'
import techSkills from "./techSkillsData.json";
import { Card, CardBody, Center, Flex, Image, Stack } from '@chakra-ui/react';

const TechSkills = () => {
  return (
    <Flex py={10} gap='20px' justifyContent='center' gap="10" flexWrap='wrap'>
        {techSkills.map((item) => 
          <Card key={item.id}  w={{base: '40%', lg: '30%'}} boxShadow='dark-lg' p='6' bgGradient='linear(to-r, green.200, pink.500)' borderRadius='20px'>
              <CardBody m="0 auto" textAlign='center' p='0'>
                  <Image src={require(`../../assets/images/techIcons/${item.imgUrl}`)}  alt={item.label} margin='0 auto' />
                  <Stack mt='6' spacing='3' textTransform='capitalize'>
                      <Center size='md' fontWeight='700'>{item.label}</Center>
                  </Stack>
              </CardBody>
          </Card>
        )}
    </Flex>
  )
}

export default TechSkills
