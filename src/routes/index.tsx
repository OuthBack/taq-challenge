import { Switch, Route } from "react-router-dom";
import Home from "../pages";
import { Error404 } from "../pages/404";
import Character from "../pages/character";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/character/:id" exact component={Character} />
      <Route path="*" exact component={Error404} />
    </Switch>
  );
}

export default Routes;
