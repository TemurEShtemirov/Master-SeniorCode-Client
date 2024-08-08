import React from 'react';
import { Box, Button, Center, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import GridImage from '../../assets/images/div.col-lg-6.png';
import Card1Image from '../../assets/images/div.features__icon-two.png'
import Card2Image from '../../assets/images/div.features__icon-two(1).png'
import Card3Image from '../../assets/images/div.features__icon-two(2).png'
import Bro from '../../assets/images/bro.png'
import Shine from "../../assets/images/shine.png"
import { SimpleGrid } from '@chakra-ui/react';
import '../../assets/css/Home.css';
import Shape from '../../assets/images/banner_shape01.svg.png';
import { px } from 'framer-motion';

export default function Home() {

  const card = [
    {
      id: 1,
      image: Card1Image,
      title: "Expert Tutors",
      sub: `when an unknown printer took a galley offe
type and scrambled makes.`,
      bg: " rgba(241, 253, 255, 1)",
      shadow: "8px 8px 0px 0px rgba(201, 228, 233, 1)",
      border: "rgba(201, 228, 233, 1)"
    },
    {
      id: 2,
      image: Card2Image,
      title: `Effective Courses`,
      sub: `when an unknown printer took a galley offe
type and scrambled makes.`,
      bg: "rgba(237, 234, 255, 1)",
      shadow: "8px 8px 0px 0px rgba(217, 213, 241, 1)",
      border: "rgba(200, 193, 237, 1)"
    },
    {
      id: 3,
      image: Card3Image,
      title: `Earn Certificate`,
      sub: `when an unknown printer took a galley offe
type and scrambled makes.`,
      bg: "rgba(255, 247, 226, 1)",
      shadow: "8px 8px 0px 0px rgba(229, 222, 203, 1)",
      border: "rgba(235, 224, 196, 1)"
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

            <Box position={"relative"} className='BoxSection2'>
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

          </Center>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            marginTop="50px"
            gap={5}
            className='grid1'
            width="100%"
          >

            {card.map((item) => (
              <GridItem
                key={item.id}
                width="450px"
                height="226px"
                marginLeft={5}
                padding={5}
                borderRadius="20px"
                border={item.border}
                background={item.bg}
                _hover={{
                  transition: 'all 0.8s',
                  marginBottom: '10px',
                  boxShadow: item.shadow,
                }}


              >
                <Box display="flex" marginBottom="10px">
                  <Image src={item.image} alt="" />
                  <Image src={Shine} marginLeft="300px" w="49px" h="37px" alt="" />
                </Box>
                <Text id="title-card">{item.title}</Text>
                <Text id="sub-card">{item.sub}</Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </section>
      <section>
        <Grid templateColumns="repeat(2, 1fr)" marginTop="50px" gap={5}>
          <GridItem>
            <Image src={Bro} alt='Bro' className='bro' />
          </GridItem>
          <GridItem></GridItem>
        </Grid>
      </section>
    </Box>
  );
}
