const { createContext, useState } = require("react");

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  
  const [isAuth, setIsAuth] = useState(false);
  const [tasks, setTasks] = useState([
    {
      "id": "1",
      "title": "Task 1 title",
      "content": "Task 1 content",
      "expiredAt": "2023-04-30",
      "status": "IN PROGRESS"
    },
    {
      "id": "2",
      "title": "Task 2 title",
      "content": "Task 2 content",
      "expiredAt": "2023-04-30",
      "status": "IN PROGRESS"
    },
    {
      "id": "3",
      "title": "Task 3 title",
      "content": "Task 3 content",
      "expiredAt": "2023-04-30",
      "status": "IN PROGRESS"
    },
    {
      "id": "4",
      "title": "Task 4 title",
      "content": "Task 4 content",
      "expiredAt": "2023-04-30",
      "status": "IN PROGRESS"
    },
    {
      "id": "5",
      "title": "Task 5 title",
      "content": "Task 5 content",
      "expiredAt": "2023-04-30",
      "status": "IN PROGRESS"
    },
    {
      "id": "6",
      "title": "Task 6 title",
      "content": "Task 6 content",
      "expiredAt": "2023-04-30",
      "status": "IN PROGRESS"
    },
    {
      "id": "7",
      "title": "Task 7 title",
      "content": "Task 7 content",
      "expiredAt": "2023-04-30",
      "status": "IN PROGRESS"
    },
  ])

  return (
    <DataContext.Provider value={{
      isAuth, setIsAuth,
      tasks, setTasks
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;