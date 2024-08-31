import React from 'react'
import courses from '../../assets/data/courses.json'
import { Card, CardHeader, Flex, Avatar, Box, Heading, CardBody, Text, CardFooter, Image, Button, Center, Grid, GridItem } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { GoMortarBoard } from "react-icons/go";

export default function CardCourses({ length }) {
    function getCourseCards() {
        // Handling when the length prop is not provided or equals "all"
        if (length === undefined || length === null || length === "all") {
            length = courses.length;
        }

        // Handling invalid length values
        if (length <= 0) {
            return <Text>No courses available.</Text>;
        }

        if (length > courses.length) {
            return <Text>Length exceeds the available number of courses.</Text>;
        }

        return courses.slice(0, length).map((item) => (
            <GridItem key={item.id} w='100%'>
                <Card maxW='md' w={"330px"} h={"455px"} m={"15px"}>
                    <CardHeader>
                        <Image
                            objectFit='cover'
                            src={item.img}
                            alt={item.title}
                            w={"278px"}
                            h={"190px"}
                            borderRadius={"5px"}
                        />
                    </CardHeader>
                    <Center mt={"-35px"}>
                        <CardBody>
                            <Text fontSize={"18px"} fontWeight={"600"} fontFamily={"Poppins, sans-serif"}>{item.title}</Text>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' mt={3}>
                                <Flex>
                                    <Avatar name={item.teacher.full_name} src={item.teacher.img} />
                                    <Box display={"flex"} mt={"11px"} ml={"5px"}>
                                        <Heading size='sm'>{item.teacher.full_name}</Heading>
                                        <Text display={"flex"} mt={"-2.3px"}>
                                            <FaStar style={{ marginTop: "5px", marginLeft: "5px", marginRight: "4px" }} />
                                            {`(${item.teacher.grade} Reviews)`}
                                        </Text>
                                    </Box>
                                </Flex>
                                <Grid
                                    templateColumns={{ base: "repeat(2, 1fr)" }}
                                    gap={5}
                                    width="100%"
                                    mt={"-15px"}
                                    mb={"50px"}
                                    ml={"40px"}
                                >
                                    <GridItem>
                                        <Text
                                            width={"100%"}
                                            height={"27px"}
                                            padding={"6.5px 12.63px 7.5px 13px"}
                                            borderRadius={"50px 0px 50px 0px"}
                                            background={"#EFEFF2"}
                                            fontFamily={"Inter, sans-serif"}
                                            fontSize={"13px"}
                                            fontWeight={500}
                                            textAlign={"left"}
                                            transition={"all 0.6s ease-in"}
                                            _hover={{
                                                borderRadius: "0px 50px 0px 50px",
                                                transform: "scale(1.1)",
                                            }}
                                        >
                                            <Center>{item.category}</Center>
                                        </Text>
                                    </GridItem>
                                    <GridItem>
                                        <Text>${item.price}</Text>
                                    </GridItem>
                                </Grid>
                            </Flex>
                        </CardBody>
                    </Center>
                    <CardFooter
                        justify='space-between'
                        flexWrap='wrap'
                        sx={{
                            '& > button': {
                                minW: '136px',
                            },
                        }}
                        mt={"-80px"}
                    >
                        <Button flex='1' variant='ghost' leftIcon={<FaBookBookmark />}>
                            {item.lessons_quantity}
                        </Button>
                        <Button flex='1' variant='ghost' leftIcon={<FaRegClock />}>
                            {item.duration}
                        </Button>
                        <Button flex='1' variant='ghost' leftIcon={<GoMortarBoard />}>
                            {item.graduation_quantity}
                        </Button>
                    </CardFooter>
                </Card>
            </GridItem>
        ));
    }

    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={5}>
            {getCourseCards()}
        </Grid>
    );
}
