import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import CustomSoftware from "./pages/CustomSoftware";
import MobileApps from "./pages/MobileApps";
import Websites from "./pages/Websites";
import Revolution from "./pages/Revolution";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Estimate from "./pages/Estimate";
import Layout from "./components/ui/Layout";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <Layout
      value={value}
      setValue={setValue}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
    >
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <LandingPage
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
        <Route
          exact
          path="/services"
          component={() => (
            <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />
          )}
        />
        <Route
          exact
          path="/customsoftware"
          component={() => (
            <CustomSoftware
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
        <Route
          exact
          path="/mobileapps"
          component={() => (
            <MobileApps
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
        <Route
          exact
          path="/websites"
          component={() => (
            <Websites setValue={setValue} setSelectedIndex={setSelectedIndex} />
          )}
        />
        <Route
          exact
          path="/revolution"
          component={() => (
            <Revolution
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
        <Route
          exact
          path="/about"
          component={() => (
            <AboutUs setValue={setValue} setSelectedIndex={setSelectedIndex} />
          )}
        />
        <Route
          exact
          path="/contact"
          component={() => (
            <ContactUs
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
        <Route
          exact
          path="/estimate"
          component={() => (
            <Estimate setValue={setValue} setSelectedIndex={setSelectedIndex} />
          )}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
