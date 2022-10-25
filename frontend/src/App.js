import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx'
import KakaoLogin from './components/Login/KakaoLogin.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/kakaoLogin" element={<KakaoLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
