import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import UserAccount from './components/lk/UserAccount';
import Payment from './payment';

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Modal />
    </>
  );
}

export default App;
