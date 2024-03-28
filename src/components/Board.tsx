import React from 'react';
import styled from 'styled-components';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Stack } from '@mui/material';

const Board = () => {
  return (
    <BoardContainer>
      <Stack direction="row">
        <div style={{ width: '1100px' }}>
          <StarPurple500Icon />
        </div>
        <div>
          <KeyboardArrowRightIcon />
        </div>
      </Stack>
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  margin-top: 40px;
`;
