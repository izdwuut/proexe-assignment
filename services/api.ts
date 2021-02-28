import { apiBaseUrl } from '../config/settings'
import axios from 'axios'
import User from '../types/user'

export function getUsers() {
    return axios.get(apiBaseUrl + '/users')
}

export function getUser(id: number) {
    return axios.get(apiBaseUrl + '/users/' + id.toString())
}

export function updateUser(user: User) {
    return axios.put(apiBaseUrl + '/users', user)
}

export function addUser(user: User) {
    return axios.post(apiBaseUrl + '/users', user)
}

export function deleteUser(id: number) {
    return axios.delete(apiBaseUrl + '/users/' + id.toString())
}