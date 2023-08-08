import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const BoardHeader = () => {
  return (
    <Flex justify="space-between" p={8} border="1px solid red">
      <Box></Box>
      <Text fontSize={48}>PERSONAL RECORD BOARD</Text>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default BoardHeader;
