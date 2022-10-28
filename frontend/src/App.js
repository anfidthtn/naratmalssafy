import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import KakaoLogin from "./components/Login/KakaoLogin.jsx";
import MainPage from "./pages/MainPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import UserFontInfo from "./components/Mypage/UserFontInfo.jsx"
import EditUserInfo from "./components/Mypage/EditUserInfo.jsx"
import "../src/styles/Common/App.scss";
import TopNav from "./components/Common/TopNav.jsx";
import Footer from "./components/Common/Footer.jsx";
import PadletPage from "./pages/PadletPage.jsx"


function App() {
  return (
    <div className="App">
      <TopNav />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth/callback/kakao" element={<KakaoLogin />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/userinfo" element={<EditUserInfo />} />
          <Route path="/fontinfo/:id" element={<UserFontInfo />} />
          <Route path="/padlet" element={<PadletPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
