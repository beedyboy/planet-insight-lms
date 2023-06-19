import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const CourseCard = ({ course }: { course: any }) => {
  return (
    <VStack height="300px" align={`start`}>
      <Box
        sx={{
          borderRadius: '10px',
          border: '1px solid #EFEFEF',
          boxShadow: '0px 0px 104px rgba(0, 0, 0, 0.05)'
        }}
      >
        <Flex>
          <Text>{course.name}</Text>
        </Flex>
      </Box>
    </VStack>
  );
};

export default CourseCard;
