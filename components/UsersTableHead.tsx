import {
    Tr,
    Th
} from "@chakra-ui/react"

export default function UsersTableHead() {
    return (
        <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>City</Th>
            <Th>Update</Th>
            <Th>Delete</Th>
        </Tr>
    )
}
