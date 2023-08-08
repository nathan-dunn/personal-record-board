import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Grid, Flex, VStack } from '@chakra-ui/react';
import { theme } from '../styles';
import BoardHeader from './BoardHeader';
import Board from './Board';
import { records, M, W } from '../data';

export const App = () => {
  const [sex, setSex] = useState(M);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log('>>w:', windowWidth);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" fontFamily="Poppins">
        <VStack minH="100vh" direction="column" p={12} spacing={5}>
          <BoardHeader sex={sex} setSex={setSex} records={records} windowWidth={windowWidth} />
          <Board key={sex} sex={sex} records={records} windowWidth={windowWidth} />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};
