import Header from "./components/ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./components/ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer";
import { useState } from "react";

function App() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/custom-software"
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path="/mobile-apps"
            component={() => <div>Mobile apps</div>}
          />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About us</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
