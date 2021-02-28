import User from './user'

export interface SetNumber {
    (value: number): any
}

export interface SetString {
    (value: string): any
}

export interface SetUsers {
    (value: Array<User>): any
}

export interface AddUser {
    (value: User): any
}

export type UpdateUser = AddUser

export type DeleteUser = SetNumber