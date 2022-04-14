import './App.css';

import Preloader from './components/Preloader';
import HeaderComponent from './components/HeaderComponent';
import ResponsiveMenu from './components/ResponsiveMenu';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Preloader />
      <div className='main'>
        <HeaderComponent />
        <Hero />

      </div>
      <ResponsiveMenu />
    </div>
  );
}

export default App;
