import React from 'react';
import { Box, Grid, Flex, Text, Stack, WrapItem } from '@chakra-ui/react';
import { estimate1RM } from '../data';
import { theme } from '../styles';

const { colors } = theme;

const TextColumn = ({ color, text }) => (
  <Text minW="33%" maxW="100%" fontWeight={500} color={color}>
    {text}
  </Text>
);

const RecordRow = ({ record, row, len }) => {
  const [name, weight, reps] = record;
  const bg =
    row === 0
      ? colors.lightBlack
      : row === 1
      ? colors.teal
      : row % 2 === 0
      ? colors.lightBlack
      : colors.gray;

  const color = colors.light;

  return (
    <Flex p={2} bg={bg}>
      <TextColumn color={color} text={name} />
      <TextColumn color={color} text={weight} />
      <TextColumn color={color} text={reps} />
    </Flex>
  );
};

const LiftContainer = ({ liftName, records }) => {
  const recordsDisplayed = 10;

  const recordsSorted = records
    .map(record => [...record, estimate1RM(record[1], record[2])])
    .sort((a, b) => (a[3] < b[3] ? 1 : -1))
    .slice(0, recordsDisplayed);

  return (
    <WrapItem>
      <Box
        w="380px"
        m={6}
        backgroundColor={colors.lightBlack}
        borderBottomRadius="sm"
        borderTopRadius="sm"
      >
        <Text
          p={4}
          fontSize={'1.2em'}
          fontWeight="700"
          backgroundColor={colors.hornOrange}
          borderTopRadius="md"
        >
          {liftName}
        </Text>

        <Box pl={4} pr={4} borderBottomRadius="md">
          <RecordRow
            key="title"
            row={0}
            record={['NAME', 'WEIGHT', 'REPS']}
            len={recordsSorted.length}
          />

          {recordsSorted.map((record, index) => (
            <RecordRow key={index} row={index + 1} record={record} len={recordsSorted.length} />
          ))}
        </Box>
      </Box>
    </WrapItem>
  );
};

export default LiftContainer;
