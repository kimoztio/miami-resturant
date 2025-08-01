import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import DishDetails from "./pages/DishDetails/DishDetails";
// import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About";
import Booking from "./pages/Booking/Booking"
import NotFound from "./pages/NotFound/NotFound";




function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/dish/:id" element={<DishDetails />} />
            {/* <Route path="/Contact" element={<Contact />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
