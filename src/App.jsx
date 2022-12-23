import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home/Home.jsx';

import { GlobalStyle } from './assets/globalStyles/globalStyle.js';

function App() {

  return (
    <>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>


  )
}

export default App;
