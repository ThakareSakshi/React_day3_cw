import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Herosection from './components/Herosection';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Herosection></Herosection>
      <GetInTouch></GetInTouch>
      <section class="section">
      <CardContainer/>
      </section>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
