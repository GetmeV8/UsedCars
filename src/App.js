
import {  Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";


import Header from "./components/navbar/Header";
import About from "./components/landing/About";
import BrandsCarousel from "./components/landing/BrandsCarousel";
import Listing from "./components/landing/Listing";
import ViewmoreList from "./components/landing/ViewmoreList";
import Footer from "./components/footer/Footer";
import Review from "./components/landing/Review";
// import Footer from "./components/footer/Footer";
// import ServicesSection from "./components/services/ServicesSection";
// import GetInTouchSection from "./components/connect/GetInTouch";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Suspense>
                  <About />
                  <BrandsCarousel/>
                  <Listing/>
                  <ViewmoreList/>
                  <Review/>
                  {/* <ServicesSection /> */}
                </Suspense>
              </>
            }
          />
          {/* <Route
            path="/services"
            element={
              <>
                <Suspense>
                  <ServicesSection />
                </Suspense>
              </>
            }
          />
          <Route
            path="/getintouch"
            element={
              <>
                <Suspense>
                  <GetInTouchSection />
                </Suspense>
              </>
            }
          /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
