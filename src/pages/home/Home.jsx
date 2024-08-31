import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Grid, GridItem, Image, Text, List, ListItem, ListIcon, Tabs, Tab, TabPanels, TabList, TabPanel } from '@chakra-ui/react';
import GridImage from '../../assets/images/div.col-lg-6.png';
import Card1Image from '../../assets/images/div.features__icon-two.png'
import Card2Image from '../../assets/images/div.features__icon-two(1).png'
import Card3Image from '../../assets/images/div.features__icon-two(2).png'
import Bro from '../../assets/images/bro.png'
import Shine from "../../assets/images/shine.png"
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { SimpleGrid } from '@chakra-ui/react';
import CardCourses from '../../components/card/card';
import '../../assets/css/Home.css';
import Shape from '../../assets/images/banner_shape01.svg.png';
import courses from '../../assets/data/courses.json'
import { extractUniqueCategories } from '../../utils/categoryManage';

export default function Home() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const dynamicCategories = extractUniqueCategories(courses);
    setCategories([{ id: 'all', name: 'All' }, ...dynamicCategories]);
  }, []);

  const handleAddCategory = () => {
    const newCategory = { id: 'design', name: 'Design' };
    setCategories(prev => [...prev, newCategory]);
  };

  const handleRemoveCategory = (categoryId) => {
    setCategories(prev => prev.filter(category => category.id !== categoryId));
    if (selectedCategory === categoryId) {
      setSelectedCategory('all');
    }
  };

  const handleUpdateCategory = () => {
    const updatedCategory = { id: 'marketing', name: 'Digital Marketing' };
    setCategories(prev => prev.map(category => category.id === updatedCategory.id ? updatedCategory : category));
  };


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

  const lengthOfCard = 8

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
            <Box position="relative" className='BoxSection2'>
              <Text id='section2Box1Txt1'>Our Top Features</Text>
              <Text id='txt2sct2bx1'
                fontSize="36px"
                fontWeight="600"
                lineHeight="47.88px"
                letterSpacing="-0.75px"
                textAlign="center">
                Achieve Your Goal With SkillGrow
              </Text>
              <Text id='subtitlesct2bx1'>
                When an unknown printer took a galley of type and scrambled it to make a specimen book. It has survived not only five centuries.
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
                padding={5}
                borderRadius="20px"
                border={item.border}
                className='child-grid1'
                background={item.bg}
                transition={"all 0.4s ease-in"}
                _hover={{
                  transition: 'all 0.4s easy-in-out',
                  transform: 'translateY(-10px)', // Gives a lift effect on hover
                  boxShadow: item.shadow,
                }}
              >
                <Box className='child-box' display="flex" justifyContent="space-between" alignItems="center" marginBottom="10px">
                  <Image src={item.image} alt={item.title} />
                  <Image src={Shine} w="49px" h="37px" alt="shine effect" />
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
            <Image transition={"all 0.6s ease-in"} _hover={{
              transform: " scale(1.1)",// Moves the item slightly to the right
              transition: "all 0.5s ease-in-out",
            }} w={"420px"} mt={"35px"} ml={"55px"} src={Bro} alt='Bro' className='bro' />
          </GridItem>
          <GridItem>
            <Box position={"relative"} className='Box2Section2' mt={10} mr={"-10"}>
              <Text id='section2Box1Txt1'>Get More About Us</Text>



              <Text id='txt2sct2bx1'
                w={"660px"}
                display={"flex"}
                fontSize="36px"
                fontWeight="600"
                lineHeight="47.88px"
                letterSpacing="-0.75px"
                textAlign="center" >Thousand Of Top <br />
                Now in One Place <Text className='courses' transition={"all 0.5s ease-in"} _hover={{
                  transform: " scale(1.2)",// Moves the item slightly to the right
                  transition: "all 0.5s ease-in-out",
                }} >Courses</Text></Text>

              <Text id='subtitlesct2bx1' w={"500px"}>
                Groove’s intuitive shared inbox makes it easy for team members to
                organize, prioritize and.In this episode of the Smashing Pod we’re
                talking about Web Platform Baseline.
              </Text>
            </Box>
            <List mt={14} ml={18} spacing={3} fontSize="18px" fontWeight={600} color="#161439">
              <ListItem
                transition={"all 0.3s ease-in"}
                _hover={{
                  transform: "translateX(10px)", // Moves the item slightly to the right
                  transition: "all 0.3s ease-in-out", // Smoothens the transition
                  color: "green.500" // Changes text color on hover
                }}
              >
                <ListIcon as={ArrowForwardIcon} color='green.500' />
                The Most World Class Instructors
              </ListItem>
              <ListItem
                transition={"all 0.3s ease-in"}
                _hover={{
                  transform: "translateX(10px)",
                  transition: "all 0.3s ease-in-out ",
                  color: "green.500"
                }}
              >
                <ListIcon as={ArrowForwardIcon} color='green.500' />
                Access Your Class Anywhere
              </ListItem>
              <ListItem
                transition={"all 0.3s ease-in"}
                _hover={{
                  transform: "translateX(10px)",
                  transition: "all 0.3s ease-in-out",
                  color: "green.500"
                }}
              >
                <ListIcon as={ArrowForwardIcon} color='green.500' />
                Flexible Course Plan
              </ListItem>
            </List>
            <Button borderRadius="20.54px 40px 20.45px 40px" _hover={{
              transform: "translateX(30px)",
              transition: "all 0.6s ease-in-out",
              color: "green.500"
            }} className='btn1'>Start Free Trial&nbsp;<ArrowForwardIcon /></Button>

          </GridItem>
        </Grid>
      </section>
      <section style={{ marginTop: "100px" }}>
        <Tabs variant='soft-rounded' colorScheme='green' onChange={(index) => setSelectedCategory(categories[index].id)}>
          <TabList>
            {categories.map(category => (
              <Tab key={category.id}>{category.name}</Tab>
            ))}
          </TabList>

          <TabPanels>
            {categories.map(category => (
              <TabPanel key={category.id}>
                <CardCourses length={8} category={category.id} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        {/* <CardCourses length={lengthOfCard} /> */}

      </section>
    </Box >
  );
}
