import { Flex, Text, IconButton, Checkbox } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { useTasks } from "../hooks/useTasks"

interface TaskProps {

  title: string;
  id: number;
  isCompleted: boolean;
}

export function Task(props: TaskProps) {

  const { excludeTask, changeTaskState } = useTasks();

  function handleExcludeTask() {

    excludeTask(props.id);
  }

  function handleCheckBox() {

    changeTaskState(props.id);
  }

  return(
    <Flex
      width="35rem"
      justify="space-between"
      align="center"
      pl="1rem"
      pr="1rem"
      borderRadius="0.25rem"
      borderWidth="0.05rem"
      borderColor="white"
      mb="1rem"
    >
      <Flex align="center">
        <Checkbox 
          size="md"
          isChecked = {props.isCompleted}
          onChange = {handleCheckBox}
        ></Checkbox>
        <Text fontSize="2xl" color="white" ml="1rem">
          {props.title}
        </Text>
      </Flex>
      <IconButton
        aria-label='Exclude task'
        icon={<DeleteIcon />}
        size="sm"
        color="white"
        variant="ghost"
        _hover={{bg: "black"}}
        onClick={handleExcludeTask}
      >
      </IconButton>
    </Flex>
  )
}