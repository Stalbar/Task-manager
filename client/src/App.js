import NavBar from "./components/NavBar";
import { Switch, Route } from 'react-router-dom';
import TaskManager from "./pages/TaskManager";

function App() {
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={TaskManager}/>
      </Switch>
    </div>

  );
}

export default App;
