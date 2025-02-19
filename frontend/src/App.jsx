import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DiaryPage from './pages/DiaryPage';
import CalculatorPage from './pages/CalculatorPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;