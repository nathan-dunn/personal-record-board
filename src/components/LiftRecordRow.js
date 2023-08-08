import React from 'react';
import { Flex } from '@chakra-ui/react';
import LiftRecordColumn from './LiftRecordColumn';
import { theme } from '../styles';

const LiftRecordRow = ({ record, row }) => {
  const [name, weight, reps] = record;
  const bg =
    row === 0
      ? theme.colors.lightBlack
      : row === 1
      ? theme.colors.teal
      : row % 2 === 0
      ? theme.colors.lightBlack
      : theme.colors.gray;

  const color = theme.colors.light;

  return (
    <Flex p={2} bg={bg}>
      <LiftRecordColumn color={color} text={name} />
      <LiftRecordColumn color={color} text={weight} />
      <LiftRecordColumn color={color} text={reps} />
    </Flex>
  );
};

export default LiftRecordRow;
