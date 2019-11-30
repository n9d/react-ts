import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Root from "./Root";
import A from "./A";
import B from "./B";

const App: React.FC<{}> = () => (
    <div className="container">
        <Switch>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
            <Route path="/" component={Root} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;
