import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" bg="gray.700" color="white" p="4" justify="center">
      <Link href="https://github.com/developer" mx="2" _hover={{ color: 'teal.400' }} isExternal>
        GitHub
      </Link>
      <Link href="https://linkedin.com/in/developer" mx="2" _hover={{ color: 'teal.400' }} isExternal>
        LinkedIn
      </Link>
      <Link href="https://stackoverflow.com/users/developer" mx="2" _hover={{ color: 'teal.400' }} isExternal>
        Stack Overflow
      </Link>
    </Flex>
  );
};

export default Footer;