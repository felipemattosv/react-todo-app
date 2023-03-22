import { Flex, Divider, Text} from "@chakra-ui/react"
import { useTasks } from "../hooks/useTasks";

export function Footer() {

  const { tasksLeft } = useTasks();

  return(
    <Flex
      justify="center"
      align="center"
      flexDir="column"
      mt="1rem"
    >
      <Divider
        colorScheme="white"
        width="20rem"
        mb="0.5rem"
      />
      <Text
        fontSize="xl"
        color="white"
      >
        {tasksLeft} items left
      </Text>
    </Flex>
  )
}