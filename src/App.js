import './App.css';
import { Hero } from './components/Hero-section';
import { About } from './components/About-section';
import { Services } from './components/Services-section';
import { Tech } from './components/Tech-section';
import { Process } from './components/Process-section';
import { Form } from './components/Form-section';
import { Footer } from './components/Footer-section';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Tech />
      <Process />
      <Form />
      <Footer />
    </div> 
  );
}

export default App;
