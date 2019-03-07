import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import './App.css';

const Pokemon = lazy(() => import('./modules/pokemon/Pokemon'));
const Wheather = lazy(() => import('./modules/wheather/Wheather'));
const BuscaCep = lazy(() => import('./modules/busca-cep/BuscaCep'));

const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pokemon">Pokemon</Link></li>
                <li><Link to="/clima">Wheather</Link></li>
                <li><Link to="/busca-cep">BuscaCep</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Pokemon}/>
                <Route path="/pokemon/" component={Pokemon}/>
                <Route path="/clima/" component={Wheather}/>
                <Route path="/busca-cep/" component={BuscaCep}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;
