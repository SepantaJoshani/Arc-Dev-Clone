import Header from "./components/ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./components/ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/ui/Footer";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import CustomSoftware from "./pages/CustomSoftware";
import MobileApps from "./pages/MobileApps";
import Websites from "./pages/Websites";
import Revolution from "./pages/Revolution";
import AboutUs from "./pages/AboutUs";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
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
              <Services
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
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
              <Websites
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
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
              <AboutUs
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
