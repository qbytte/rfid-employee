import { Route, Switch } from "wouter";
import { Layout } from "./components";
import {
  ActiveEmps,
  EditEmp,
  EmpDetails,
  Logs,
  RegisterEmp,
  WorkedHours,
} from "./pages";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={ActiveEmps} />
        <Route path="/edit/:id" component={EditEmp} />
        <Route path="/details/:id" component={EmpDetails} />
        <Route path="/logs" component={Logs} />
        <Route path="/register" component={RegisterEmp} />
        <Route path="/hours" component={WorkedHours} />
      </Switch>
    </Layout>
  );
}

export default App;
