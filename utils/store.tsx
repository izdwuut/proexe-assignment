
import React from 'react'
import * as Types from '../types/functions'
import User from '../types/user'
import * as API from '../services/api'

export interface Store {
  users: {
      value: Array<User>,
      set: Types.SetUsers,
      add: Types.AddUser,
      update: Types.UpdateUser,
      delete: Types.SetNumber
  }
}

export const StoreContext = React.createContext(null)

export default ({ children }) => {
  let [users, setUsers] = React.useState(new Array<User>())

  React.useEffect(() => {
    setUsers(API.getUsers())
  }, [])

  function addUser(user: User) {
    API.addUser(user).then(() => {
      users.push(user)
      setUsers(users)
    })
  }

  function updateUser(user: User) {
    API.updateUser(user).then(() => {
      for(let u of users) {
          if (u.id === user.id) {
              u = user
              setUsers(users)
              return true
          }
      }
      return false
    })
  }

  function deleteUser(id: number) {
      API.deleteUser(id).then(() => {
        for(let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users[i].pop()
                setUsers(users)
                return true
            }
        }
        return false
      })
  }

  const store: Store = {
    users: {
        value: users,
        set: (value: Array<User>) => setUsers(value),
        add: (value: User) => addUser(value),
        update: (value: User) => updateUser(value),
        delete: (value: number) => deleteUser(value)
    }
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

