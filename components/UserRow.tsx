import {
    Tr,
    Td,
} from "@chakra-ui/react"
import User from "../types/user"
import { Button} from "@chakra-ui/react"
import { Store, StoreContext } from '../utils/store'
import React from 'react'

export default function UserRow(props: User) {
    const store: Store = React.useContext(StoreContext)

    function deleteUser(id: number) {
        store.users.delete(id)
    }

    return (
        <Tr>
            <Td>{props.id}</Td>
            <Td>{props.name}</Td>
            <Td>{props.username}</Td>
            <Td>{props.email}</Td>
            <Td>{props.city}</Td>
            <Td>
                <Button colorScheme="yellow">Update</Button>
            </Td>
            <Td>
                <Button colorScheme="red" onClick={() => deleteUser(props.id)}>Delete</Button>
            </Td>
        </Tr>
    )
}
