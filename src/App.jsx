import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast
} from '@chakra-ui/react';
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
              I'm a passionate web developer with expertise in building dynamic and interactive web applications using React.
            </Text>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="/Assets/profile.png"
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
              {/* Each project box */}
              <Box
                bg="orange.300"
                p="6"
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
                maxW="300px"
              >
                <Heading as="h3" size="md" mb="4">
                  Project 1
                </Heading>
                <Text>Project description goes here...</Text>
              </Box>
              <Box
                bg="orange.300"
                p="6"
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
                maxW="300px"
              >
                <Heading as="h3" size="md" mb="4">
                  Project 2
                </Heading>
                <Text>Project description goes here...</Text>
              </Box>
              {/* Add more project boxes as needed */}
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
            <Text>Download my resume and check out my proficiencies below.</Text>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              {/* Add more proficiencies here */}
            </ul>
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
