import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Marquee from './components/marque'

import Footer from './components/footer'
import BottomBar from './components/bottombar';
import Banner2 from './components/banner2'
import Story from './components/story'
import Gallery from './components/galary';
import Threepics from './components/three';
import Contact from './components/contact';
import Grid from './components/grid';
import Banner02 from './components/banner02';


function App() {
  return (
    <div >
      <Header />

      <div id="home">
        <Banner2 />
      </div>

      <Marquee />
      <div id="product">
      <Threepics />
      </div>
      
        <Banner02 />
 

      <div id="about">
        <Grid />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <div id="support">
        <Footer />
      </div>

      <BottomBar />
    </div>
  );
}
export default App;