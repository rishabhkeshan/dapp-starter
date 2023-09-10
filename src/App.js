import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutScreen from "./pages/AboutScreen/AboutScreen";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen";
import MyEventsScreen from "./pages/MyEventsScreen/MyEventsScreen";
import EventScreen from "./pages/MyEventsScreen/EventScreen";

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/message" component={MyEventsScreen} />
        <Route exact path="/about" component={AboutScreen} />
        <Route exact path="/directory" component={ProfileScreen} />
        <Route exact path="/myevent/:_id" component={EventScreen} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
