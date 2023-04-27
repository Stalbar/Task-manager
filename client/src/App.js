import NavBar from "./components/NavBar";
import { Switch, Route } from 'react-router-dom';
import TaskManager from "./pages/TaskManager";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import TaskPage from "./pages/TaskPage";

function App() {
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={TaskManager}/>
        <Route path='/task/:id' component={TaskPage}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/registration' component={Register}/>
      </Switch>
    </div>

  );
}

export default App;
