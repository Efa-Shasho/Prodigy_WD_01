import React from 'react';
import Header from './Basics/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        
      </main>
    </div>
  );
};

export default App;
