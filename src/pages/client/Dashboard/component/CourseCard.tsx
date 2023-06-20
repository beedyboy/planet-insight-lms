import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { MdPlayCircleFilled, MdTimer, MdBook } from 'react-icons/md';
import React from 'react';

const CourseCard = ({ course }: { course: any }) => {
  return (
    <VStack w="300px" height="450px" align="start">
      <Box
        w="100%"
        sx={{
          borderRadius: '10px',
          border: '1px solid #EFEFEF',
          boxShadow: '0px 0px 104px rgba(0, 0, 0, 0.05)',
          position: 'relative',
          height: '90%',
          display: 'flex',
          flexDirection: 'column',
          p: '1rem'
        }}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{course.title}</Text>
          {course.liked && <AiFillHeart color="red" />}
        </Flex>
        <Flex justifyContent="center" alignItems="center" height="100%" color="blue.500">
          <MdPlayCircleFilled size={50} />
        </Flex>
        <Flex justifyContent="flex-end" alignItems="flex-end" mt="auto">
          <HStack>
            <MdBook style={{ marginRight: '0.5rem' }} />
            <Text>{course.modules} modules</Text>
          </HStack>{' '}
          <HStack>
            <MdTimer style={{ marginRight: '0.5rem' }} />
            <Text>{course.duration}</Text>
          </HStack>
        </Flex>
      </Box>
      <Box mt=".5rem" width="100%">
        <Box bg="gray.200" height="8px" borderRadius="full" overflow="hidden" maxWidth="100%">
          <Box bg="red.500" height="100%" width={`${course.progress}%`} borderRadius="full" />
        </Box>
        <Flex justifyContent="flex-end" alignItems="center" mt=".25rem">
          <Text>{course.progress}%</Text>
        </Flex>
      </Box>
    </VStack>
  );
};

export default CourseCard;
