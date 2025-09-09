import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Support from './components/Support';

import RideCard from './components/Ride'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Service />
              <Explore />
              <Support />
            </>
          }
        />
        <Route path="/ride" element={<RideCard />} />
        
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
