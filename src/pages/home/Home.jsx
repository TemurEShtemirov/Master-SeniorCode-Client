import React from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import GridImage from '../../assets/images/div.col-lg-6.png';
import { SimpleGrid } from '@chakra-ui/react';
import '../../assets/css/Home.css';
import Shape from '../../assets/images/banner_shape01.svg.png';

export default function Home() {
  return (
    <Box>
      <section className='section1'>
        <Image className='shape' src={Shape} alt='Shape' />

        <SimpleGrid columns={2} className='grid-container'>
          <Box className='grid1Box'>
            <Text className='Sentence1'>Never Stop <Text className='wordLearning'>Learning</Text> <br /> Life <strong>Never Stop</strong> Teaching </Text>
            <Text className='text1'>Every teaching and learning journey is unique Following We'll help guide your way.</Text>
            <Button borderRadius="20.54px 40px 20.45px 40px" className='btn1'>Start Free Trial</Button>
          </Box>
          <Box className='custom-grid-box'>
            <Image src={GridImage} alt="GridImage" />
          </Box>
        </SimpleGrid>
      </section>
    </Box>
  );
}
