import React from "react";
import { BaseCSS } from "styled-bootstrap-grid";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomeView } from './views';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HomeView />
                </Route>
            </Switch>
            <BaseCSS />
        </Router>
    );
}
