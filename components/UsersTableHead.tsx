import {
    Tr,
    Thead,
    Th
} from "@chakra-ui/react"
import User from "../types/user"

export default function UsersTableHead() {
    return (
        <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>City</Th>
        </Tr>
    )
}
