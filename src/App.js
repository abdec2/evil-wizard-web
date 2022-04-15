import './App.css';

import Preloader from './components/Preloader';
import HeaderComponent from './components/HeaderComponent';
import ResponsiveMenu from './components/ResponsiveMenu';
import Hero from './components/Hero';
import Team from './components/Team';
import Story from './components/Story';

function App() {
  return (
    <div className="App">
      <Preloader />
      <div className='main'>
        <HeaderComponent />
        <Hero />
        <Story />
        <Team />
      </div>
      <ResponsiveMenu />
    </div>
  );
}

export default App;
