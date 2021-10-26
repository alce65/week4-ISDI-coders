import { Route, Switch } from "react-router-dom";
import { HomePage } from "./components/home/home.page";
import { Layout } from "./components/core/layout";
import AboutPage from "./components/about/about.page";
import { GentlemenPage } from "./components/gent/Gentlemen.Page";
import { TaskPage } from "./components/tasks/task.page";
import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/gent">
          <GentlemenPage />
        </Route>
        <Route path="/tasks">
          <TaskPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
