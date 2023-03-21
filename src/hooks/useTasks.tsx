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

  return (

    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {

  const context = useContext(TasksContext);
  return context;
}