import { Link, Route, Switch, use } from "react-router-dom";
import { List } from "./tasks-state/list";
import { List as List2 } from "./tasks-context/list";

export function TaskPage() {
  const template = (
    <>
      <nav>
        <Link to="/tasks/state">Tareas by State</Link>
        <Link to="/tasks/context">Tareas by Context</Link>
      </nav>
      <Switch>
        <Route path="/tasks/state">
          <List />
        </Route>
        <Route path="/tasks/context">
          <List2 />
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
