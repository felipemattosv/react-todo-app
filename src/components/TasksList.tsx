import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Task } from "./Task"
import { useTasks } from "../hooks/useTasks"

export function TasksList() {

  const { tasks } = useTasks();

  return(
    <Flex
      justify="center"
      mt="3rem"
    >
      <Tabs variant='soft-rounded' colorScheme='blue' >
        <TabList
          justifyContent="center"
          mb="1rem"
        >
          <Tab>All</Tab>
          <Tab>Active</Tab>
          <Tab>Completed</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {tasks.map(task => {
              return (
                <Task key={task.id} id={task.id} title={task.title} isCompleted={task.isCompleted}/>
              )
            })}
          </TabPanel>
          <TabPanel>
            <p>Only Active tasks</p>
          </TabPanel>
          <TabPanel>
            <p>Only Completed tasks</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}
