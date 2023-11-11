import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Box } from '@chakra-ui/react';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Resume from './components/resume/Resume';
import About from './components/AboutMe/AboutMe';
import Introduction from './components/AboutMe/AboutMe';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Box className="App" background={'#fff4f9'} bgGradient={[
      'linear(to-b, gray.300, #fff4f9)',
    ]}>
        <Header />
        <Box pt='100px'>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home-intro" element={<Introduction />}></Route>
              <Route path="/aboutme" element={<AboutMe />}></Route>
              <Route path="/WorkExperience" element={<WorkExperience />}></Route>
              <Route path="/resume" element={<Resume />}></Route>
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
