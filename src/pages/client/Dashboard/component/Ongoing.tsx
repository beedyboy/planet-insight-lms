import React from 'react'
import CourseCard from './CourseCard';
import { Box } from '@chakra-ui/react';
const courses: IOngoingCourse[] = [
  {
    id: 1,
    title: 'Full body training',
    modules: 4,
    duration: '1hr',
    liked: false,
    percentageCompleted: '10%'
  },
  {
    id: 2,
    title: 'Military Press',
    modules: 4,
    duration: '1hr 30mins',
    liked: false,
    percentageCompleted: '20%'
  },
  {
    id: 3,
    title: 'Bicept Training',
    modules: 5,
    duration: '1hr 40mins',
    liked: true,
    percentageCompleted: '35%'
  }
];
const Ongoing = () => {
  return (
    <Box>
      {courses.map((course: IOngoingCourse) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Box>
  );
}

export default Ongoing
