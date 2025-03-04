import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Textarea,
  Image,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { generateInteriorImage } from '../config/gemini';
import { useToast } from '@chakra-ui/toast';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const [roomType, setRoomType] = useState('');
  const [style, setStyle] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleGenerate = async () => {
    if (!roomType || !style || !prompt) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);
      const fullPrompt = `Generate a ${style} style interior design for a ${roomType}. ${prompt}`;
      const imageUrl = await generateInteriorImage(fullPrompt);
      setGeneratedImage(imageUrl);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to generate image. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to log out',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Flex mb={8}>
        <Heading>Welcome, {currentUser?.email}</Heading>
        <Spacer />
        <Button onClick={handleLogout} colorScheme="red">
          Logout
        </Button>
      </Flex>

      <VStack gap={6} align="stretch">
        <Box p={6} borderWidth={1} borderRadius={8} boxShadow="lg">
          <VStack gap={4}>
            <Heading size="md">Interior Design Generator</Heading>
            <Box>
              <Text mb={2}>Room Type</Text>
              <select
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #E2E8F0' }}
                value={roomType}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRoomType(e.target.value)}
              >
                <option value="">Select room type</option>
                <option value="living room">Living Room</option>
                <option value="bedroom">Bedroom</option>
                <option value="kitchen">Kitchen</option>
                <option value="bathroom">Bathroom</option>
                <option value="office">Office</option>
              </select>
            </Box>

            <Box>
              <Text mb={2}>Style</Text>
              <select
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #E2E8F0' }}
                value={style}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStyle(e.target.value)}
              >
                <option value="">Select style</option>
                <option value="modern">Modern</option>
                <option value="minimalist">Minimalist</option>
                <option value="industrial">Industrial</option>
                <option value="traditional">Traditional</option>
                <option value="scandinavian">Scandinavian</option>
              </select>
            </Box>

            <Textarea
              placeholder="Describe your vision (e.g., 'with large windows and natural lighting')"
              value={prompt}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
              rows={4}
            />

            <Button
              colorScheme="blue"
              onClick={handleGenerate}
              isLoading={loading}
              width="100%"
            >
              Generate Design
            </Button>
          </VStack>
        </Box>

        {generatedImage && (
          <Box p={6} borderWidth={1} borderRadius={8} boxShadow="lg">
            <VStack gap={4}>
              <Heading size="md">Generated Design</Heading>
              <Image
                src={generatedImage}
                alt="Generated interior design"
                maxW="100%"
                borderRadius={8}
              />
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Dashboard; 