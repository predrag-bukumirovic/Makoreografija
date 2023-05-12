import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import GoTop from "./components/GoTop";
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./page/Home"));
const Studio = lazy(() => import("./page/Studio"));
const MoulinRouge = lazy(() => import("./page/MoulinRouge"));
const Music = lazy(() => import("./page/Music"));
const CommercialsTvShow = lazy(() => import("./page/CommercialsTvShow"));
const Musical = lazy(() => import("./page/Musical"));
const Fitness = lazy(() => import("./page/Fitness"));
const Biography = lazy(() => import("./page/Biography"));
const Contact = lazy(() => import("./page/Contact"));
const Makoreografija = lazy(() => import("./page/Makoreografija"));
const NotFound = lazy(() => import("./NotFound"));
const KKCZ = lazy(() => import("./page/KKCZ"));
const F4Euroleague = lazy(() => import("./page/F4Euroleague"));
const SerbianNationalTeam = lazy(() => import("./page/SerbianNationalTeam"));
const BeachSports = lazy(() => import("./page/BeachSports"));
const Gallery = lazy(() => import("./page/Gallery"));

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 900);
  }, []);

  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {!isLoading ? (
            <Loading />
          ) : (
            <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dance-studio" component={Studio} />
                <Route path="/makoreografija" component={Makoreografija} />
                <Route path="/moulin-rouge" component={MoulinRouge} />
                <Route path="/music" component={Music} />
                <Route path="/KKCZ" component={KKCZ} />
                <Route path="/f4-euroleague" component={F4Euroleague} />
                <Route
                  path="/serbian-national-team"
                  component={SerbianNationalTeam}
                />
                <Route path="/beach-sports" component={BeachSports} />
                <Route path="/gallery" component={Gallery} />
                <Route
                  path="/commercials-and-tv-show"
                  component={CommercialsTvShow}
                />
                <Route path="/musical" component={Musical} />
                <Route path="/fitness" component={Fitness} />
                <Route path="/biography" component={Biography} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
              <GoTop />
            </div>
          )}
        </Suspense>
      </Router>
    </>
  );
}

export default App;
