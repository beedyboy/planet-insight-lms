import React from 'react'
import {  VStack, Box, AspectRatio, Text, Flex } from '@chakra-ui/react';
import {  Card, CardHeader } from '@chakra-ui/react'
import LaunchPad from './components/LaunchPad';

const MyCourses = () => {
  return (
    <Flex gap={'2rem'}>
  <Box flex={'1'} h='auto' bg='#FFFFFF'>
    <VStack>
  
      {/* This video will have equal sides */}
        <AspectRatio w={'100%'} ratio={2}>
        <iframe
        title='naruto'
        src='https://www.youtube.com/embed/QhBnZ6NPOY0'
        allowFullScreen
        />
       </AspectRatio>
    
      <Box>
        <Card p='20px'>
          <CardHeader>
            <Text fontWeight={'bold'}>
            Subtitles
            </Text>
            <Box my={'20px'}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eius ea at iure laboriosam quisquam, molestiae veniam sapiente saepe vero expedita, praesentium possimus. Soluta facilis qui expedita incidunt, cumque autem!
                </Text>
            </Box>
          </CardHeader>
        </Card>
      </Box>

    </VStack>
    
  </Box>
     <LaunchPad />
      
    </Flex>
  )
}

export default MyCourses
