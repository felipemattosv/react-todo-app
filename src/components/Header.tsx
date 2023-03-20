import { Flex, Input } from "@chakra-ui/react"

export function Header() {

  return (
    <Flex mt="3rem" justify="center">
      <Input
        width="35rem"
        placeholder="Enter task name"
        _placeholder={{color: "white"}}
        color="white"
      >
      </Input>
    </Flex>
  )
}