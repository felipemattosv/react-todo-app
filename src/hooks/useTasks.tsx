import { createContext, ReactNode, useState, useContext } from "react";

interface Task {

  id: number;
  title: string;
  isCompleted: boolean;
}

interface TaskProviderProps {

  children: ReactNode;
}

interface TasksContextData {

  tasks: Task[];
  createTask: (task: Task) => void;
  excludeTask: (taskId: number) => void;
  changeTaskState: (taskId: number) => void;
}

const TasksContext = createContext<TasksContextData>(

  {} as TasksContextData
);

export function TasksProvider({ children }: TaskProviderProps) {

  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(taskInput: Task) {

    setTasks([
      ...tasks,
      taskInput
    ])
  }

  function excludeTask(taskId: number) {

    let indexOnArray = tasks.findIndex(task => task.id === taskId);
    let newTasksArray = [...tasks];
    newTasksArray.splice(indexOnArray, 1);

    setTasks(newTasksArray);
  }

  function changeTaskState(taskId: number) {

    let indexOnArray = tasks.findIndex(task => task.id === taskId);
    let newTasksArray = [...tasks];
    newTasksArray[indexOnArray].isCompleted = !(newTasksArray[indexOnArray].isCompleted);

    setTasks(newTasksArray);
  }

  return (

    <TasksContext.Provider value={{ tasks, createTask, excludeTask, changeTaskState }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {

  const context = useContext(TasksContext);
  return context;
}