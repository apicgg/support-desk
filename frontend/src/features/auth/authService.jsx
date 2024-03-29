// authService is to connect with backend

import axios from 'axios'

const API_URL = '/api/users'

// Register user
const register = async (userdata) => {
  const response = await axios.post(API_URL, userdata)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userdata) => {
  const response = await axios.post(API_URL + '/login', userdata)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  login,
  logout,
}

export default authService
