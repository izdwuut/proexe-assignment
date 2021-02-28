import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Td,
  Tr
} from "@chakra-ui/react"
import React from 'react'
import { Store, StoreContext } from '../utils/store'
import UserRow from '../components/UserRow'
import UsersTableHead from '../components/UsersTableHead'

export default function Home() {
  const store: Store = React.useContext(StoreContext)

  return (
    <Table variant="simple">
      <Thead>
        <UsersTableHead />
      </Thead>
      <Tbody>
        {store.users.value.length > 0 ?
          store.users.value.map((user) => (
            <UserRow {...user} />
          )) :
          <Tr>
            <Td>No records</Td>
          </Tr>}
      </Tbody>
      <Tfoot>
        <UsersTableHead />
      </Tfoot>
    </Table>
  )
}
