import { Flex, Text, IconButton, Checkbox } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"

export function Task() {

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
        <Checkbox size="md"></Checkbox>
        <Text fontSize="2xl" color="white" ml="1rem">
          task name
        </Text>
      </Flex>
      <IconButton
        aria-label='Exclude task'
        icon={<DeleteIcon />}
        size="sm"
        color="white"
        variant="ghost"
        _hover={{bg: "black"}}
      >
      </IconButton>
    </Flex>
  )
}