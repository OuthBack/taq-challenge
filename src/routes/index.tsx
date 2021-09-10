import { Switch, Route } from "react-router-dom";
import Home from "../pages";
import Character from "../pages/character";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/character/:id" exact component={Character} />
    </Switch>
  );
}

export default Routes;
