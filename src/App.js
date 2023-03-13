import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./store";

import Header from "./components/Header";
import history from "./services/history";


export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}
