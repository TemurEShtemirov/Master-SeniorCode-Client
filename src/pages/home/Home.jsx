import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import '../../assets/css/Home.css'
import Shape from '../../assets/images/banner_shape01.svg.png'

export default function Home() {
  return (
    <>
      <Box>
        <section className='section1'>
          <Image className='shape' src={Shape} alt='Shape' />
          <Box>
            <Text className='Sentence1'>Never Stop <Text className='wordLearning'>Learning</Text> Life <strong>Never Stop</strong> Teaching </Text>
          </Box>
        </section>
      </Box>
    </>
  )
}
