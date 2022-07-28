import { Route, Switch } from "wouter";
import {
  ActiveEmps,
  EditEmp,
  EmpDetails,
  EmpLogs,
  RegisterEmp,
  WorkedHours,
} from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" component={ActiveEmps} />
      <Route path="/edit/:id" component={EditEmp} />
      <Route path="/details/:id" component={EmpDetails} />
      <Route path="/logs" component={EmpLogs} />
      <Route path="/register" component={RegisterEmp} />
      <Route path="/hours" component={WorkedHours} />
    </Switch>
  );
}

export default App;
