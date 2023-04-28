import NavBar from "./components/NavBar";
import { Switch, Route } from 'react-router-dom';
import TaskManager from "./pages/TaskManager";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import TaskPage from "./pages/TaskPage";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import { useContext } from "react";
import DataContext from "./context/DataContext";

function App() {
  
  const { isAuth } = useContext(DataContext);

  return (
    <div>
      <NavBar />
      <Switch>
        {isAuth && <Route exact path="/task" component={NewTask}/>}
        {isAuth &&<Route exact path="/" component={TaskManager}/>}
        {isAuth &&<Route path='/task/:id' component={TaskPage}/>}
        {isAuth &&<Route path='/edit/:id' component={EditTask}/>}
        <Route path='/auth' component={Auth}/>
        <Route path='/registration' component={Register}/>
        <Route path='*' component={Register}/>
      </Switch>
    </div>

  );
}

export default App;
