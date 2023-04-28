import { check } from "../http/userAPI";

const { createContext, useState, useEffect } = require("react");

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const filterResults = tasks.filter(task => 
      ((task.title).toLowerCase()).includes(search.toLowerCase())
      || ((task.content).toLowerCase()).includes(search.toLowerCase())
      || ((task.expiredAt).toLowerCase()).includes(search.toLowerCase()));

      setSearchResults(filterResults.reverse());
  }, [tasks, search]);

  useEffect(() => {
    check().then(data => {
      setIsAuth(true);
    })
  }, [])

  return (
    <DataContext.Provider value={{
      isAuth, setIsAuth,
      tasks, setTasks,
      search, setSearch,
      searchResults, setSearchResults
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;