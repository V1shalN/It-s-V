import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import CustomCursor from './components/cursor/customCursor';
import About from './components/about/about';
import TopView from './components/topView/TopView';
import AboutComp from './components/aboutcomp/AboutComp';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <TopView />
              <AboutComp />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/topview" element={<TopView />} />
        <Route path="/aboutcomp" element={<AboutComp />} />
      </Routes>
    </>
  );
}

export default App;
