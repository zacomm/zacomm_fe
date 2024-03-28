import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from './pages/Main';
import './App.css';
import { StyledEngineProvider } from '@mui/styled-engine';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
