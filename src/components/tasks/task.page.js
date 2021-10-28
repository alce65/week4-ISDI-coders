import { Link, Route, Switch } from "react-router-dom";
import { List } from "./tasks-state/list";
import { List as List2 } from "./tasks-context/list";
import { List as List3 } from "./tasks-redux-native/list";

import "./tareas.css";

export function TaskPage() {
  const template = (
    <>
      <nav>
        <Link to="/tasks/state">Tareas by State</Link>
        <span> | </span>
        <Link to="/tasks/context">Tareas by Context</Link>
        <span> | </span>
        <Link to="/tasks/redux">Tareas by Redux</Link>
      </nav>
      <Switch>
        <Route path="/tasks/state">
          <List />
        </Route>
        <Route path="/tasks/context">
          <List2 />
        </Route>
        <Route path="/tasks/redux">
          <List3 />
        </Route>
      </Switch>
    </>
  );

  return template;
}

/*   let { path, url } = useRouteMatch();
  const template = (
    <>
      <nav>
        <Link to={`${url}/sample1`}>Component State</Link>
        <span> | </span>
        <Link to={`${url}/sample2`}>Context</Link>
      </nav>
      <Switch>
        <Route path={`${url}/sample1`}>
          <List />;
        </Route>
        <Route path={`${url}/sample2`}>
          <div>Sample 2</div>
        </Route>
      </Switch>
    </> */
