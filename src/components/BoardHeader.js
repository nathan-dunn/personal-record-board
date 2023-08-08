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

const BoardHeader = ({ windowWidth, sex, setSex }) => {
  return (
    <VStack spacing={5}>
      <Image src={require('../assets/HS+WHITE+FINAL.png')} alt="" width={480} />
      <HStack spacing={10}>
        {windowWidth > 950 && <Text fontSize="1.1em">PERSONAL RECORD BOARD</Text>}
        <ButtonGroup spacing="0">
          <Button
            fontSize="0.66em"
            // variant={sex === M ? 'solid' : 'outline'}
            borderRadius="none"
            borderLeftRadius="md"
            // backgroundColor={sex === M ? colors.orange : 'transparent'}
            backgroundColor={sex === M ? colors.hornOrange : 'transparent'}
            onClick={() => setSex(M)}
            border="1px solid white"
            borderRight="none"
          >
            MEN
          </Button>
          <Button
            fontSize="0.66em"
            // variant={sex === W ? 'solid' : 'outline'}
            borderRadius="none"
            borderRightRadius="md"
            // backgroundColor={sex === W ? colors.orange : 'transparent'}
            backgroundColor={sex === W ? colors.hornOrange : 'transparent'}
            onClick={() => setSex(W)}
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
