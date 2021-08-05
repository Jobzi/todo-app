import axios from 'axios'

const { VITE_HOST: baseUrl } = import.meta.env

export const loginCredential = async (credential:{}) => {
  // console.log(credential)
  const { data } = await axios.post(baseUrl + 'api/user/login', credential)
  return data // notes
}
