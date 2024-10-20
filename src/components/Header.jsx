import { Flex, Heading, Link, Box } from '@chakra-ui/react';

const Header = ({ setCurrentSection }) => {
  return (
    <Flex as="header" bg="gray.700" color="white" p="4" justify="space-between" align="center">
      <Heading size="lg">My Portfolio</Heading>
      <Box>
        <Link onClick={() => setCurrentSection('AboutMe')} mx="2" _hover={{ color: 'teal.400' }}>
          About Me
        </Link>
        <Link onClick={() => setCurrentSection('Portfolio')} mx="2" _hover={{ color: 'teal.400' }}>
          Portfolio
        </Link>
        <Link onClick={() => setCurrentSection('Contact')} mx="2" _hover={{ color: 'teal.400' }}>
          Contact
        </Link>
        <Link onClick={() => setCurrentSection('Resume')} mx="2" _hover={{ color: 'teal.400' }}>
          Resume
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;

