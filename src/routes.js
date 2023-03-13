import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Reservations from "./pages/Reservations";

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reservas" exact component={Reservations} />
      </Switch>
  );
};