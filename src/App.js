// Components
import SignIn from './comp/SignIn';
import SignUp from './comp/SignUp';
import Dashboard from './comp/Dashboard'
import {AuthProvider} from './contexts/AuthContexts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}