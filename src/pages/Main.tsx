import styled from 'styled-components';
import Board from '../components/Board';
import { Stack, styled as MUIStyled } from '@mui/material';

const Main = () => {
  return (
    <BodyContainer direction="row" spacing={6}>
      <Board />
      <Trending />
    </BodyContainer>
  );
};

export default Main;

const BodyContainer = MUIStyled(Stack)({
  marginTop: '40px',
  justifyContent: 'space-between',
});

const Trending = styled.div`
  width: 300px;
  height: 400px;
  background-color: #f8f8f8;
  border-radius: 30px;
`;
