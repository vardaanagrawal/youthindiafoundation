import Navbar from './components/navbar/Navbar';
import Body from './components/body/Body';
import Getintouch from './components/footer/Getintouch';
import Footer from './components/footer/Footer';
import Second from './components/body/Second';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Body /> <Getintouch /> <Footer /></>}></Route>
        <Route path="/about" element={<Second title="About Us"/>} />
        <Route path="/work" element={<Second title="Our Work"/>} />
        <Route path="/team" element={<Second title="Our Team"/>} />
        <Route path="/events" element={<Second title="Our Events"/>} />
        <Route path="/joinus" element={<Second title="Join Us"/>} />
        <Route path="/memberlogin" element={<Second title="Member Login"/>} />
        <Route path="/getstarted" element={<Second title="Get Started"/>} />
        <Route path="/register" element={<Second title="Register"/>} />
        <Route path="/adminlogin" element={<Second title="Admin Login"/>} />
        <Route path="/contact" element={<Second title="Contact Us"/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
