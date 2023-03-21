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
}

const TasksContext = createContext<TasksContextData>(

  {} as TasksContextData
);

export function TasksProvider({ children }: TaskProviderProps) {

  const [tasks, setTasks] = useState<Task[]>([]);

  return (

    <TasksContext.Provider value={{ tasks }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {

  const context = useContext(TasksContext);
  return context;
}