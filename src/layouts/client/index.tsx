import { Box, Flex, IconButton, Image, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import chat from 'assets/icons/chat.svg';
import notification from 'assets/icons/notification.svg';
import profile from 'assets/icons/profile.svg';


const ClientLayout = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex>
      <Box
        width={{ base: isOpen ? '100%' : '20%', md: '20%' }}
        bg="#090C11"
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        minHeight="100vh"
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Flex flexDirection="column" flex="1">
        {/* Navbar */}
        <Box bg="#FFFFFF" height="60px" boxShadow="0px 1px 1px rgba(0, 0, 0, 0.15)">
          <IconButton
            aria-label="Toggle Sidebar"
            icon={<HamburgerIcon />}
            display={{ base: 'block', md: 'none' }}
            onClick={onToggle}
          />
          <Flex justifyContent={`flex-end`} gap="1rem">
            <Image src={chat} h={`40px`} mt="7px" alt="chat" />
            <Image src={notification} h={`40px`} mt="7px" alt="notification" />
            <Image src={profile} h={`47px`} alt="profile" mr={`2rem`} />
          </Flex>
          {/* Navbar content */}
        </Box>

        {/* Main content */}
        <Box p="4" overflowY="auto">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ClientLayout;
