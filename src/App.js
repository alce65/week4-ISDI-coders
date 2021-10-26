import { Route, Switch } from "react-router-dom";
import { HomePage } from "./components/home/home.page";
import { Layout } from "./components/core/layout";
import AboutPage from "./components/about/about.page";
import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
