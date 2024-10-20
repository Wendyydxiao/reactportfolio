import { Flex, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';  // Import icons from React Icons

const Footer = () => {
  return (
    <Flex as="footer" bg="gray.700" color="white" p="4" justify="center">
      <IconButton
        as="a"
        href="https://github.com/Wendyydxiao"
        aria-label="GitHub"
        icon={<FaGithub />}
        colorScheme="orange"
        mx="2"
        isRound
      />
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/wendy-xiao-6b9457117/"
        aria-label="LinkedIn"
        icon={<FaLinkedin />}
        colorScheme="orange"
        mx="2"
        isRound
      />
      <IconButton
        as="a"
        href="https://www.facebook.com/dingding1023/"
        aria-label="Facebook"
        icon={<FaFacebook />}
        colorScheme="orange"
        mx="2"
        isRound
      />
    </Flex>
  );
};

export default Footer;
