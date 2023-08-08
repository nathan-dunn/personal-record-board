import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Wrap,
  Button,
  ButtonGroup,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { M, W } from '../data';
import { theme } from '../styles';

const { colors } = theme;

const BoardHeader = ({ windowWidth, board, handleBoardChange }) => {
  return (
    <VStack spacing={5}>
      <Image src={require('../assets/HS+WHITE+FINAL.png')} alt="" width={480} />
      <HStack spacing={10}>
        {windowWidth > 950 && <Text fontSize="1.1em">PERSONAL RECORD BOARD</Text>}
        <ButtonGroup spacing="0">
          <Button
            fontSize="0.66em"
            borderRadius="none"
            borderLeftRadius="md"
            backgroundColor={board === M ? colors.hornOrange : 'transparent'}
            onClick={() => handleBoardChange(M)}
            border="1px solid white"
            borderRight="none"
          >
            MEN
          </Button>
          <Button
            fontSize="0.66em"
            borderRadius="none"
            borderRightRadius="md"
            backgroundColor={board === W ? colors.hornOrange : 'transparent'}
            onClick={() => handleBoardChange(W)}
            border="1px solid white"
            borderLeft="none"
          >
            WOMEN
          </Button>
        </ButtonGroup>
      </HStack>
    </VStack>
  );
};

export default BoardHeader;
