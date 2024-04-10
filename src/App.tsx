import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/styled-engine';
import Main from './pages/Main';
import Post from './pages/Post';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MainContainer>
        <BrowserRouter>
          <Header>Zacomm</Header>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </MainContainer>
    </StyledEngineProvider>
  );
}

export default App;

const MainContainer = styled.div`
  max-width: 1440px;
  margin-inline: auto;
`;

const Header = styled.div`
  height: 85px;
  align-content: center;
`;
