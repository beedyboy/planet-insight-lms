import React from 'react'
import CourseCard from './CourseCard';
import { Flex, Text } from '@chakra-ui/react';
const courses: IOngoingCourse[] = [
  {
    id: 1,
    title: 'Six Packs',
    modules: 4,
    duration: '1hr',
    liked: false,
    progress: 100
  },
  {
    id: 2,
    title: 'Shoulder Press',
    modules: 4,
    duration: '1hr 30mins',
    liked: false,
    progress: 100
  }
];
const CompletedCourses = () => {
  if (courses.length === 0) {
    return (
      <Text> No completed courses yet!.</Text>
    );
  }
  return (
      <Flex overflowX="auto" gap="1rem" width={`100%`}>
       {courses.map((course: IOngoingCourse) => (
          <CourseCard key={course.id} course={course} />
        ))}
    </Flex>
    );
};

export default CompletedCourses;
