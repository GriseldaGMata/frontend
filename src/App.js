
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import NovedadesPage from './pages/NovedadesPage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'



function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" exact component={NosotrosPage} />
        <Route path="/servicios" exact component={ServiciosPage} />
        <Route path="/novedades" exact component={NovedadesPage} />
        <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
