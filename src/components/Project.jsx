import { Box, Image, Text, Link } from '@chakra-ui/react';

const Project = ({ title, image, deployLink, repoLink }) => {
  return (
    <Box
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p="5"
      _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
    >
      <Image src={image} alt={`${title} screenshot`} borderRadius="md" />
      <Text mt="4" fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Box mt="2">
        <Link href={deployLink} color="teal.500" isExternal mr="4">
          Deployed App
        </Link>
        <Link href={repoLink} color="teal.500" isExternal>
          GitHub Repo
        </Link>
      </Box>
    </Box>
  );
};

export default Project;

