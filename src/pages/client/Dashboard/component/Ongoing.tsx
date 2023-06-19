import React from 'react';
import CourseCard from './CourseCard';
import { Flex } from '@chakra-ui/react';

const courses = [
  {
    id: 1,
    title: 'Full body training',
    modules: 4,
    duration: '1hr',
    liked: false,
    progress: 10
  },
  {
    id: 2,
    title: 'Military Press',
    modules: 4,
    duration: '1hr 30mins',
    liked: false,
    progress: 20
  },
  {
    id: 3,
    title: 'Bicep Training',
    modules: 5,
    duration: '1hr 40mins',
    liked: true,
    progress: 35
  }
];

const Ongoing = () => {
  return (
    <Flex overflowX="auto" gap="1rem" width={`100%`}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Flex>
  );
};

export default Ongoing;
