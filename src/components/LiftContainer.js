import React, { useEffect } from 'react';
import { Box, Text, WrapItem, SlideFade, useDisclosure } from '@chakra-ui/react';
import { estimate1RM } from '../data';
import { theme } from '../styles';
import LiftRecordRow from './LiftRecordRow';

const LiftContainer = ({ liftName, records }) => {
  const { isOpen, onOpen } = useDisclosure();

  const numberOfRecordsDisplayed = 10;

  const recordsSorted = records
    .map(record => [...record, estimate1RM(record[1], record[2])])
    .sort((a, b) => (a[3] < b[3] ? -1 : 1))
    .slice(0, numberOfRecordsDisplayed);

  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 200);
  }, [onOpen]);

  return (
    <WrapItem w="400px">
      <Box w="380px" m={6} backgroundColor={theme.colors.lightBlack}>
        <Text p={4} fontSize={'1.2em'} fontWeight="700" backgroundColor={theme.colors.hornOrange}>
          {liftName}
        </Text>

        <SlideFade in={isOpen} offsetY="20px">
          <Box pl={4} pr={4}>
            <LiftRecordRow key="title" row={0} record={['NAME', 'WEIGHT', 'REPS']} />

            {recordsSorted.map((record, index) => (
              <LiftRecordRow key={index} row={index + 1} record={record} />
            ))}
          </Box>
        </SlideFade>
      </Box>
    </WrapItem>
  );
};

export default LiftContainer;
