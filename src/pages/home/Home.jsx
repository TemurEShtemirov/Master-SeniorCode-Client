import React from 'react';
import { Box, Button, Center, Image, Text } from '@chakra-ui/react';
import GridImage from '../../assets/images/div.col-lg-6.png';
import Card1Image from '../../assets/images/div.features__icon-two.png'
import Card2Image from '../../assets/images/div.features__icon-two(1).png'
import Card3Image from '../../assets/images/div.features__icon-two(2).png'
import Shine from "../../assets/images/shine.png"
import { SimpleGrid } from '@chakra-ui/react';
import '../../assets/css/Home.css';
import Shape from '../../assets/images/banner_shape01.svg.png';

export default function Home() {

  const card = [
    {
      id: 1,
      image: Card1Image,
      title: "Expert Tutors",
      sub: `when an unknown printer took a galley offe
type and scrambled makes.`,
    },
    {
      id: 2,
      image: Card2Image,
      title: `Effective Courses`,
      sub: `when an unknown printer took a galley offe
type and scrambled makes.`,
    }, {
      id: 3,
      image: Card3Image,
      title: `Earn Certificate`,
      sub: `when an unknown printer took a galley offe
type and scrambled makes.`,
    }
  ]


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
      <section className='section2'>
        <Box>
          <Center>

            <Box position={"relative"} >
              <Text id='section2Box1Txt1'>Our Top Features</Text>
              <Text id='txt2sct2bx1'
                fontSize="36px"
                fontWeight="600"
                lineHeight="47.88px"
                letterSpacing="-0.75px"
                textAlign="center" >Achieve Your Goal With SkillGrow</Text>
              <Text id='subtitlesct2bx1'>
                when an unknown printer took a galley of type and scrambled make
                specimen book has survived not only five centuries
              </Text>
            </Box>
            <Box>
              {card.map((item) => (
                <Box id='boxCard' key={item.id}>
<Text id='title-card'></Text>
                </Box>
              ))

              }
            </Box>
          </Center>
        </Box>
      </section>
    </Box>
  );
}
