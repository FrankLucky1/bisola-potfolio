
import './App.css';
import Hero from './components/Hero/Hero'
import Benefits from './components/Benefits/Benefits'
import Projects from './components/Projects/Projects'
import Review from './components/Review/Review'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Hero/>
      <Benefits/>
      <Projects/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
