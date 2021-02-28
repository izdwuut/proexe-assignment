import {
    Tr,
    Td,
} from "@chakra-ui/react"
import User from "../types/user"
import { Button } from "@chakra-ui/react"
import { Store, StoreContext } from '../utils/store'
import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from "@chakra-ui/react"

export default function UserRow(props: User) {
    const store: Store = React.useContext(StoreContext)
    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()

    function deleteUser(id: number) {
        store.users.delete(id)
    }

    return (
        <>
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
                    <Button colorScheme="red" onClick={() => setIsOpen(true)}>Delete</Button>
                </Td>
            </Tr>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete User
            </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure?
            </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
              </Button>
                            <Button colorScheme="red" onClick={() => deleteUser(props.id)} ml={3}>
                                Delete
              </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}
