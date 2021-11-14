import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from './services/Firebase'
import Login from './views/Login'
import Home from './views/Home'
import Carros from './views/Carros'
import CarrosLista from './views/CarrosLista'
import Menu from './components/Menu'
import Loja from './views/Loja'
import Registro from './views/Registro'
import Recados from './views/Recados'
import Contato from './views/Contato'
import Dados from './views/Dados'
import Footer from './components/Footer'
import "./App.css";


function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route
      {...rest}
      render={props => isAuthenticated() ? (
        <>
          <Menu />
          <Component {...props} />
          <Footer />
        </>
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
      }
    />
  }



  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/recados" component={Recados} />
        <Route path="/contatos" component={Contato} />
        <Route path="/dados" component={Dados} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/carros" component={Carros} />
        <PrivateRoute path="/carroslista" component={CarrosLista} />
        <PrivateRoute path="/loja" component={Loja} />
        
        <Route path="*" component={Login} />
      </Switch>
    </HashRouter>
  );
}

export default App;
