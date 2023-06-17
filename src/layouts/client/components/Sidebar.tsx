import { Box, Button, Divider, Flex, IconButton, Image, Text, VStack } from '@chakra-ui/react';
import { ClientRoutes } from 'constant';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import courses from 'assets/icons/courses.svg';
import dashboard from 'assets/icons/dashboard.svg';
import group from 'assets/icons/group.svg';
import { FiLogOut } from 'react-icons/fi';

const ClientMenuList = [
  {
    path: ClientRoutes.Dashboard,
    name: 'Dashboard',
    isAuthenticated: true,
    icon: dashboard,
    iconActive: dashboard,
    active: false
  },
  {
    path: ClientRoutes.MyCourses,
    name: 'My courses',
    isAuthenticated: true,
    icon: courses,
    iconActive: courses,
    active: false
  }
];

const Sidebar = () => {
  const navigate = useNavigate();

  const goToUrl = (url: string) => {
    navigate(url);
  };

  return (
    <VStack spacing="4" p="4" align="stretch" h="100%" color="#FFFFFF">
      <Text
        fontWeight="bold"
        sx={{
          fontFamily: 'Arima Madurai',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '39px'
        }}
      >
        Planet Insight
      </Text>
      <Divider mt="1rem" mb="2rem" w="100%" borderColor="white" />

      {ClientMenuList.map((item) => (
        <Flex
          alignItems="center"
          gap="1rem"
          sx={{
            height: '37px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            width: '100%',
            paddingLeft: '10px',
            color: 'D3D3D3'
          }}
          onClick={() => goToUrl(item.path)}
          key={item.path}
        >
          {item.active ? (
            <Image src={item.icon} alt={item.name} />
          ) : (
            <Image src={item.iconActive} alt={item.name} />
          )}
          {item.name}
        </Flex>
      ))}

      <VStack spacing="0" w="100%" align="start" mt="auto">
        <Box bg="#131518" p="2rem">
          <Image src={group} alt="group" />
          <Text fontSize="sm" color="gray.500">
            The only platform you will ever need to unleash your full potential.
          </Text>
          <Button
            bg="#EC5656"
            borderRadius="6px"
            color="FFFFFF"
            sx={{
                mt: '1rem',
              fontFamily: 'Aquire',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '12.48px',
              align: 'center',
              height: '37px'
            }}
          >
            JOIN A COURSE
          </Button>
        </Box>
        <Divider mt="2rem" w="100%" borderColor="white" />
        <Flex align="center">
          <IconButton
            aria-label="Logout"
            icon={<FiLogOut />}
            fontSize="xl"
            color="gray.500"
            bg="transparent"
            _hover={{
              color: 'red.500'
            }}
          />
          <Text fontSize="sm" color="gray.500" ml="2">
            Logout
          </Text>
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Sidebar;
