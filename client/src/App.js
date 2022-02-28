import React from 'react'
import './App.css';
import About from './Pages/About'
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
