import React from "react";
import { BaseCSS } from "styled-bootstrap-grid";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomeView, ProjectsView } from './views';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/projects">
                    <ProjectsView />
                </Route>
                <Route path="/">
                    <HomeView />
                </Route>
            </Switch>
            <BaseCSS />
        </Router>
    );
}
