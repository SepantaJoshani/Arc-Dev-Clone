import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import CustomSoftware from "./pages/CustomSoftware";
import MobileApps from "./pages/MobileApps";
import Websites from "./pages/Websites";
import Revolution from "./pages/Revolution";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Estimate from "./pages/Estimate";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "./components/ui/Theme";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Layout toggleTheme={toggleTheme}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/customsoftware" component={CustomSoftware} />
          <Route exact path="/mobileapps" component={MobileApps} />
          <Route exact path="/websites" component={Websites} />
          <Route exact path="/revolution" component={Revolution} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/estimate" component={Estimate} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
