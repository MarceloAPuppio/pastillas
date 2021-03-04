import "./App.css";
import PageHome from "./pages/page-home";
import Medicamentos from "./components/medicamentos";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageHome} />
        {/* <Route exact path="/medicamentos" component={Medicamentos} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
