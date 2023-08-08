import React, { useState } from 'react';
import { ChakraProvider, Box, Grid, Flex, theme } from '@chakra-ui/react';
import BoardHeader from './BoardHeader';
import Board from './Board';
import { records, M, W } from '../data';

export const App = () => {
  const [sex, setSex] = useState(M);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" direction="column" p={12}>
          <BoardHeader records={records} />
          <Board key={sex} sex={sex} records={records} />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
