import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Task } from "./Task"

export function TasksList() {

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
            <p>All tasks</p>
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
