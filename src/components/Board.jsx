import React from 'react';
import { Wrap } from '@chakra-ui/react';
import LiftContainer from './LiftContainer.jsx';
import { SQ, PR, BP, DL } from '../data';

const Board = ({ records, windowWidth }) => {
  return (
    <Wrap spacing={2} justify="center">
      {[SQ, PR, BP, DL].map(liftName => (
        <LiftContainer
          key={liftName}
          liftName={liftName}
          records={records[liftName]}
          windowWidth={windowWidth}
        />
      ))}
    </Wrap>
  );
};

export default Board;
