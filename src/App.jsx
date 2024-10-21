import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Link,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Icon,
  HStack
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('AboutMe');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Message sent.',
        description: 'We will get back to you soon!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' }); 
    }, 2000);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'AboutMe':
        return (
          <Container centerContent>
            <Heading as="h2" size="xl" mb="6" color="teal.500">
              About Me
            </Heading>
            <Text fontSize="lg" textAlign="center" mb="6">
            Experienced professional with 8 years Product & Technology background in Tech industry. Worked in multiple roles as Data Analyst, Commerical Manager, Product Owner and Technical Program lead, now a Bootcamp graduated full stack web developer with experience in technologies : JavaScript, Node, React and more. 

            </Text>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://scontent.fsyd3-2.fna.fbcdn.net/v/t39.30808-6/308668353_6187090554640687_5155759867749710168_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0ccMS5qz-1IQ7kNvgGZARk2&_nc_zt=23&_nc_ht=scontent.fsyd3-2.fna&_nc_gid=ABYDiFa1rVsS8h9CUTRR6pZ&oh=00_AYCHgHHIGJ2UNYIS5m1tbyVscxh5FxFcIn_73DcjtfY7OA&oe=671BFDE6"
              alt="Profile Pic"
              mb="6"
              border="3px solid teal"
            />
          </Container>
        );
      case 'Portfolio':
        return (
          <Container centerContent>
            <Heading as="h2" size="xl" mb="6" color="teal.500">
              Portfolio
            </Heading>
            <SimpleGrid columns={2} spacing={10}>
              <Box
                bg="orange.300"
                p="6"
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
                maxW="300px"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
              >
                <Heading as="h3" size="md" mb="4">
                  CineJournal
                </Heading>
                <Text mb="4">CineJournal is a digital journal to track your viewing history of Movies & Television Shows that you watch across multiple platforms.</Text>
                <HStack spacing={4}>
                  <Link href="https://cinejournal-webapp.onrender.com/" isExternal >
                    <Icon as={FaExternalLinkAlt} w={6} h={6} color="white"/>
                  </Link>
                  <Link href="https://github.com/kevinvongmany/cinejournal-webapp" isExternal>
                    <Icon as={FaGithub} w={6} h={6} color="white" />
                  </Link>
                </HStack>
              </Box>
              <Box
                bg="orange.300"
                p="6"
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
                maxW="300px"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
              >
                <Heading as="h3" size="md" mb="4">
                  TechBlog
                </Heading>
                <Text mb="4">TechBlog is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.</Text>
                <HStack spacing={4}>
                  <Link href="https://techblog-ch3e.onrender.com/" isExternal >
                    <Icon as={FaExternalLinkAlt} w={6} h={6} color="white"/>
                  </Link>
                  <Link href="https://github.com/Wendyydxiao/wx-techblog" isExternal>
                    <Icon as={FaGithub} w={6} h={6} color="white" />
                  </Link>
                </HStack>
              </Box>
              <Box
                bg="orange.300"
                p="6"
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
                maxW="300px"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
              >
                <Heading as="h3" size="md" mb="4">
                  TextEditor
                </Heading>
                <Text mb="4">Just Another Text Editor (J.A.T.E) is a Progressive Web Application (PWA) that functions as a text editor, capable of working both online and offline.</Text>
                <HStack spacing={4}>
                  <Link href="https://texteditor-zz7z.onrender.com" isExternal >
                    <Icon as={FaExternalLinkAlt} w={6} h={6} color="white"/>
                  </Link>
                  <Link href="https://github.com/Wendyydxiao/texteditor" isExternal>
                    <Icon as={FaGithub} w={6} h={6} color="white" />
                  </Link>
                </HStack>
              </Box>
              <Box
                bg="orange.300"
                p="6"
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
                maxW="300px"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
              >
                <Heading as="h3" size="md" mb="4">
                  Weather Dashboard
                </Heading>
                <Text mb="4">This project uses server side API to build a weather dashboard. It should enable use to retrive weather forcaste by searching specific city.</Text>
                <HStack spacing={4}>
                  <Link href="https://wendyydxiao.github.io/module6challenge-weatherdashboard/" isExternal >
                    <Icon as={FaExternalLinkAlt} w={6} h={6} color="white"/>
                  </Link>
                  <Link href="https://github.com/Wendyydxiao/module6challenge-weatherdashboard" isExternal>
                    <Icon as={FaGithub} w={6} h={6} color="white" />
                  </Link>
                </HStack>
              </Box>
            </SimpleGrid>
          </Container>
        );
      case 'Contact':
        return (
          <Box maxW="600px" mx="auto" mt="10" p="6" borderRadius="md" boxShadow="lg" bg="white">
            <Heading as="h2" size="xl" mb="6" textAlign="center" color="teal.500">
              Contact Me
            </Heading>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Your Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    size="lg"
                  />
                </FormControl>

                <FormControl id="email" isRequired>
                  <FormLabel>Your Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    size="lg"
                  />
                </FormControl>

                <FormControl id="message" isRequired>
                  <FormLabel>Your Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    size="lg"
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  width="full"
                  isLoading={isSubmitting}
                  loadingText="Sending"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        );
      case 'Resume':
        return (
          <Container centerContent>
            <Heading as="h2" size="xl" mb="6" color="teal.500">
              Resume
            </Heading>
            <Text mb="2">
              <Link href="https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf" color="teal.500" isExternal download>
                Download
              </Link> 
              {' '}my resume and check out my proficiencies below.
            </Text>
            <SimpleGrid columns={[1, 2]} spacing={10} mt="8" mb="8">
              <Box>
                <Heading as="h3" size="md" mb="4">Frontend Proficiencies:</Heading>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </Box>

              <Box>
                <Heading as="h3" size="md" mb="4">Backend Proficiencies:</Heading>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </Box>
            </SimpleGrid>
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header setCurrentSection={setCurrentSection} />
      <main>{renderSection()}</main>
      <Footer />
    </>
  );
};

export default App;
