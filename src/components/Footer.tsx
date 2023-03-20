import { Flex, Divider, Text} from "@chakra-ui/react"

export function Footer() {

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
        X items left
      </Text>
    </Flex>
  )
}