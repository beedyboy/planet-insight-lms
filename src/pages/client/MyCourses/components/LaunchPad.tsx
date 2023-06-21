import { Box, Card, CardBody, CardFooter, Progress, Text } from '@chakra-ui/react';
import React from 'react'

const LaunchPad = () => {
  return (
    <Box  h='auto' bg='#FFFFFF'>
    <Card bg={'#FFF6F6'}>
    <CardBody>
      <Text>Coaching Launchpad</Text>
      <Progress color="#EC5656" value={50} />
    </CardBody>
    <CardFooter>
      <h4>
      10% <Text as={`span`}>completed</Text>
      </h4>
     </CardFooter> 
  </Card>
      
    </Box>
  )
}

export default LaunchPad;