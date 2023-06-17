import { Flex,Tab,TabList,TabPanel,TabPanels,Tabs,Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Dashboard = () => {
  return (
    <VStack mt="2rem" align="start" w="80%" p="2rem">
      <Text color="#1D1D1D">Hello, Jhon Doe</Text>
      <Flex justify={`space-between`} w="100%" mt="2rem">
        <Text fontSize="xl" fontWeight="bold">
          My Courses
        </Text>
        <Tabs isLazy variant="unstyled" colorScheme="red">
          <TabList>
            <Tab className="half-underline">Ongoing</Tab>
            <Tab className="half-underline">Complete</Tab>
            <Tab className="half-underline">Wishlist</Tab>
          </TabList>
          <TabPanels mt="4">
            <TabPanel>
              <Text>Ongoing Courses Content</Text>
            </TabPanel>
            <TabPanel>
              <Text>Complete Courses Content</Text>
            </TabPanel>
            <TabPanel>
              <Text>Wishlist Courses Content</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </VStack>
  );
}

export default Dashboard
