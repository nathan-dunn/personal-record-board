import React from 'react';
import { Text } from '@chakra-ui/react';

const LiftRecordColumn = ({ color, text }) => (
  <Text minW="33%" maxW="100%" fontWeight={500} color={color} noOfLines={1}>
    {text}
  </Text>
);

export default LiftRecordColumn;
