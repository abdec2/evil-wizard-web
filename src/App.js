import './App.css';

import Preloader from './components/Preloader';
import HeaderComponent from './components/HeaderComponent';
import ResponsiveMenu from './components/ResponsiveMenu';
import Hero from './components/Hero';
import Team from './components/Team';
import Story from './components/Story';
import Mission from './components/Mission';
import Roadmap from './components/Roadmap';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <Preloader />
      <div className='main'>
        <HeaderComponent />
        <Hero />
        <Story />
        <Mission />
        <Team />
        <Roadmap />
        <FooterComponent />
      </div>
      <ResponsiveMenu />
    </div>
  );
}

export default App;
