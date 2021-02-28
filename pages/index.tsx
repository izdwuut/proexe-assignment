import {
  Table,
  Thead,
  Tbody,
  Tfoot,
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
        {store.users.value.map((user) => (
          <UserRow {...user} />
        ))}
      </Tbody>
      <Tfoot>
        <UsersTableHead />
      </Tfoot>
    </Table>
  )
}
