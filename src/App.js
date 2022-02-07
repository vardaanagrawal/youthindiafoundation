import './App.css';
import Navbar from './components/navbar/Navbar';
import Body from './components/body/Body';
import Getintouch from './components/footer/Getintouch';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body />
      <Getintouch />
      <Footer />
    </div>
  );
}

export default App;
