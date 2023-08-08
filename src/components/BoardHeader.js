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
  Link,
} from '@chakra-ui/react';

import { M, W } from '../data';
import { theme } from '../styles';

const { colors } = theme;

const BoardHeader = ({ windowWidth, board, handleBoardChange }) => {
  return (
    <VStack spacing={5}>
      <Link href="https://www.hornstrength.com/" isExternal>
        <Image src={require('../assets/HS+WHITE+FINAL.png')} alt="" width={480} />
      </Link>
      <HStack spacing={10}>
        {windowWidth > 950 && <Text fontSize="1.1em">PERSONAL RECORD BOARD</Text>}

        <ButtonGroup spacing="0">
          <Button
            fontSize="0.66em"
            borderRadius="none"
            borderLeftRadius="md"
            border={`1px solid ${colors.darkWhite}`}
            borderRight="none"
            backgroundColor={board === M ? colors.darkWhite : 'transparent'}
            color={board === M ? colors.dark : colors.darkWhite}
            onClick={() => handleBoardChange(M)}
          >
            MEN
          </Button>
          <Button
            fontSize="0.66em"
            borderRadius="none"
            borderRightRadius="md"
            border={`1px solid ${colors.darkWhite}`}
            borderLeft="none"
            backgroundColor={board === W ? colors.darkWhite : 'transparent'}
            color={board === W ? colors.dark : colors.darkWhite}
            onClick={() => handleBoardChange(W)}
          >
            WOMEN
          </Button>
        </ButtonGroup>
      </HStack>
    </VStack>
  );
};

export default BoardHeader;
