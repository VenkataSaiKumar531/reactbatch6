import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Mainarea from './components/Mainarea';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Mainarea></Mainarea>
      <Footer></Footer>
    </div>
  );
}

export default App;
