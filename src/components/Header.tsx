import { Flex, Input } from "@chakra-ui/react"
import { useState, KeyboardEvent } from "react"
import { useTasks } from "../hooks/useTasks";

export function Header() {

  const { createTask } = useTasks();

  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);

  function handleNewTask(e: KeyboardEvent) {

    if (e.code === "Enter" && title !== "") {

      createTask({

        title,
        id,
        isCompleted: false,
      });

      setTitle("");
      setId(id + 1);
    }
  }

  return (
    <Flex mt="3rem" justify="center">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyUp={handleNewTask}
        width="35rem"
        placeholder="Enter task name"
        _placeholder={{color: "white"}}
        color="white"
      >
      </Input>
    </Flex>
  )
}