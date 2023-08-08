import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Lift from './Lift';
import { SQ, PR, BP, DL } from '../data';

const Board = ({ sex, records }) => {
  return (
    <Box p={8} border="1px solid red">
      <Flex justify="space-between">
        {[SQ, PR, BP, DL].map(liftName => (
          <Lift key={liftName} liftName={liftName} records={records[sex][liftName]} />
        ))}
      </Flex>
    </Box>
  );
};

export default Board;
