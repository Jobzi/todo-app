import axios from 'axios'

const { VITE_HOST: baseUrl } = import.meta.env

export const loginCredential = async (credential: {}) => {
  const { data } = await axios.post(baseUrl + 'api/user/login', credential)
  return data // LoginData
}

export const registerUser = async (newUser: {}) => {
  const { data } = await axios.post(baseUrl + 'api/user', newUser)
  return data // RegisterData
}
