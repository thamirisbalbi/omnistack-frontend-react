import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Login from './pages/Login';

export default function Routes() { //as rotas viram componentes
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Login} />
            </Switch>
        </BrowserRouter>
    );
}