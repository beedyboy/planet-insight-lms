import { Box, Flex,Tab,TabList,TabPanel,TabPanels,Tabs,Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Ongoing from './component/Ongoing';
import CompletedCourses from './component/CompletedCourses';

const Dashboard = () => {
  return (
    <VStack mt="2rem" align="start" w="90%" p="2rem">
      <Text color="#1D1D1D">Hello, Jhon Doe</Text>
      <Tabs isLazy variant="unstyled" colorScheme="red">
        <Box display="flex" alignItems="center">
          <Box mr={4}>
            <Text fontSize="24px" fontWeight="bold">
              My Courses
            </Text>
          </Box>
          <TabList>
            <Tab className="half-underline">Ongoing</Tab>
            <Tab className="half-underline">Complete</Tab>
            <Tab className="half-underline">Wishlist</Tab>
          </TabList>
        </Box>

        <Flex flex="1">
          <Box flexGrow={`1`} />
          <TabPanels mt="4">
            <TabPanel>
              <Ongoing />
            </TabPanel>
            <TabPanel>
              <CompletedCourses />
            </TabPanel>
            <TabPanel>
              <Text>Wishlist Courses Content</Text>
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </VStack>
  );
}

export default Dashboard
