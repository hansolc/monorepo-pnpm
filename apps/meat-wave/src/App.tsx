import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import Aboutpage from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Link to="/">회사소개</Link>
        <Link to="/about">사업영역</Link>
        <Link to="/about">IR</Link>
        <Link to="/about">고객센터</Link>
        <Link to="/about">채용정보</Link>
      </Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
