import styled from 'styled-components';
import Board from '../components/Board';
import { Stack } from '@mui/material';

const Main = () => {
  return (
    <MainContainer>
      <Header>Zacomm</Header>
      <Banner />
      <Stack direction="row" spacing={6} style={{ marginTop: '40px' }}>
        <Board />
        <Trending></Trending>
      </Stack>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  max-width: 1440px;
  margin-inline: auto;
`;

const Header = styled.div`
  height: 85px;
  align-content: center;
`;

const Banner = styled.div`
  height: 335px;
  border-radius: 30px;
  background-color: #edfaf7;
`;

const Trending = styled.div`
  width: 300px;
  height: 400px;
  background-color: #f8f8f8;
  border-radius: 30px;
`;
