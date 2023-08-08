import React from 'react';
import { Box, Text, WrapItem } from '@chakra-ui/react';
import { estimate1RM } from '../data';
import { theme } from '../styles';
import LiftRecordRow from './LiftRecordRow';

const LiftContainer = ({ liftName, records }) => {
  const numberOfRecordsDisplayed = 10;

  const recordsSorted = records
    .map(record => [...record, estimate1RM(record[1], record[2])])
    .sort((a, b) => (a[3] < b[3] ? -1 : 1))
    .slice(0, numberOfRecordsDisplayed);

  return (
    <WrapItem>
      <Box w="380px" m={6} backgroundColor={theme.colors.lightBlack}>
        <Text p={4} fontSize={'1.2em'} fontWeight="700" backgroundColor={theme.colors.hornOrange}>
          {liftName}
        </Text>

        <Box pl={4} pr={4}>
          <LiftRecordRow
            key="title"
            row={0}
            record={['NAME', 'WEIGHT', 'REPS']}
            len={recordsSorted.length}
          />

          {recordsSorted.map((record, index) => (
            <LiftRecordRow key={index} row={index + 1} record={record} len={recordsSorted.length} />
          ))}
        </Box>
      </Box>
    </WrapItem>
  );
};

export default LiftContainer;
