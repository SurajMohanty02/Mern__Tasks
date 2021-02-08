import logo from "./logo.svg";
import "./App.css";
import CompanyDetails from "./Components/CompanyDetails";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <CompanyDetails />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
