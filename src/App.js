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
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Layout>
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
  );
}

export default App;
