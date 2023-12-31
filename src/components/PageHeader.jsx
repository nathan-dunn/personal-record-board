import { Text, Image, Button, ButtonGroup, VStack, HStack, Link } from '@chakra-ui/react';
import { M, W, links } from '../data/index.js';
import { theme } from '../styles/index.js';

const PageHeader = ({ windowWidth, board, handleBoardChange }) => {
  return (
    <VStack spacing={10}>
      <Link href={links.website} isExternal>
        <Image src={require('../assets/HS+WHITE+FINAL.png')} alt="" width={480} />
      </Link>
      <HStack spacing={10}>
        {windowWidth > 950 && <Text fontSize="1.1em">PERSONAL RECORD BOARD</Text>}

        <ButtonGroup spacing="0">
          <Button
            _hover={{ bg: 'trasnparent' }}
            fontSize="0.66em"
            borderRadius="none"
            borderLeftRadius="md"
            border={`1px solid ${theme.colors.darkWhite}`}
            borderRight="none"
            backgroundColor={board === M ? theme.colors.darkWhite : 'transparent'}
            color={board === M ? theme.colors.dark : theme.colors.darkWhite}
            onClick={() => handleBoardChange(M)}
          >
            MEN
          </Button>
          <Button
            _hover={{ bg: 'trasnparent' }}
            fontSize="0.66em"
            borderRadius="none"
            borderRightRadius="md"
            border={`1px solid ${theme.colors.darkWhite}`}
            borderLeft="none"
            backgroundColor={board === W ? theme.colors.darkWhite : 'transparent'}
            color={board === W ? theme.colors.dark : theme.colors.darkWhite}
            onClick={() => handleBoardChange(W)}
          >
            WOMEN
          </Button>
        </ButtonGroup>
      </HStack>
    </VStack>
  );
};

export default PageHeader;
