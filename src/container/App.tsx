import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Root from "./Root";
import A from "./A";
import B from "./B";
import C from "./C";

const App: React.FC<{}> = () => (
    <div className="container">
        <Switch>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
            <Route path="/c" component={C} />
            <Route path="/" component={Root} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;
