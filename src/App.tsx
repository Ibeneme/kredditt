import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./sections/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./sections/footer/Footer";
import AboutUs from "./pages/about/AboutUs";
import FinanceProgram from "./pages/FinanceProgram/FinanceProgram";
import ScrollToTop from "./ScrollToTop";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import OpportunitiesHeader from "./components/OpportunitiesHeader";
import OpportunitiesSection from "./sections/Opportunities/Opportunities";
import BlogPage from "./pages/Blog/Blog";

// Import your other pages here
// import About from "./pages/about/About";
// import Services from "./pages/services/Services";
// import Opportunities from "./pages/opportunities/Opportunities";
// import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/program" element={<FinanceProgram />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route
          path="/opportunities"
          element={
            <>
              <OpportunitiesHeader />
              <OpportunitiesSection />
            </>
          }
        />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
