import NavBar from "./components/NavBar";
import { Switch, Route } from 'react-router-dom';
import TaskManager from "./pages/TaskManager";
import Auth from "./pages/Auth";

function App() {
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={TaskManager}/>
        <Route path='/auth' component={Auth}/>
      </Switch>
    </div>

  );
}

export default App;
