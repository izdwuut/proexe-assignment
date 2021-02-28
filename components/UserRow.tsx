import {
    Tr,
    Td,
} from "@chakra-ui/react"
import User from "../types/user"

export default function UserRow(props: User) {
    return (
        <Tr>
            <Td>{props.id}</Td>
            <Td>{props.name}</Td>
            <Td>{props.username}</Td>
            <Td>{props.email}</Td>
            <Td>{props.city}</Td>
        </Tr>
    )
}
