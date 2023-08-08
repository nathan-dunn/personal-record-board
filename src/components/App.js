import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';
import { theme } from '../styles';
import PageHeader from './PageHeader';
import Board from './Board';
import Footer from './Footer';
import { records, M } from '../data';

export const App = () => {
  const getStorage = () => {
    const storage = localStorage.getItem('@HS') ? JSON.parse(localStorage.getItem('@HS')) : {};
    return storage;
  };

  const [board, setBoard] = useState(getStorage().board || M);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleBoardChange = board => {
    setBoard(board);
    const storage = getStorage();
    localStorage.setItem('@HS', JSON.stringify({ ...storage, board }));
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" fontFamily="Poppins">
        <VStack minH="100vh" direction="column" p={12} spacing={5}>
          <PageHeader
            board={board}
            handleBoardChange={handleBoardChange}
            records={records}
            windowWidth={windowWidth}
          />
          <Board key={board} board={board} records={records[board]} windowWidth={windowWidth} />
          <Footer lastUpdated={records.lastUpdated} />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};
