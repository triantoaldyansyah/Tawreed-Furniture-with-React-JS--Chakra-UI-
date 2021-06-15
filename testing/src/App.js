import React from 'react';
import './App.css';
import { Container, Flex, Heading } from '@chakra-ui/layout';
import { Button, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
//import { Button } from '@chakra-ui/button';

function App() {
  return (
    <div className="App">

  {/* Section-1 */}

      <Flex className="Section-1">
        
        {/* Article */}
        <Container>
          <Heading 
            className="heading-title"
            mt='143px'
            textAlign='left'
            w='md'
          >find interior design inspiration for your beloved home</Heading>
          <Text 
            className="heading-sub-title"
            mt='27px'
            textAlign='left'
            w='60%'
          >Consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Text>
          
          {/* Button */}
          <Button
            className="button"
            display="block"
            backgroundColor="#1D6861"
            borderRadius="none"
            mt="52px"
            _hover={{ bg: "#18524c" }}
          >
            Take a Tour
          </Button>
        </Container>

        {/* Image-Slider */}
        <Container>
            <Image className="image" src="https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" alt="image-1" />
        </Container>
      </Flex>
    </div>
  );
}

export default App;
