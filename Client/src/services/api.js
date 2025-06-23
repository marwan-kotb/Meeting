import axios from "axios"
import { constant } from "../constant"

const getAuthHeader = () => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token")

  return token ? { Authorization: `Bearer ${token}` } : {}
}

export const postApi = async (path, data, login) => {
  try {
    let result = await axios.post(constant.baseUrl + path, data, {
      headers: getAuthHeader()
    })

    if (result.data?.token && result.data?.token !== null) {
      if (login) {
        localStorage.setItem('token', result.data?.token)
      } else {
        sessionStorage.setItem('token', result.data?.token)
      }

      localStorage.setItem('user', JSON.stringify(result.data?.user))
    }

    return result
  } catch (e) {
    console.error(e)

    return e
  }
}

export const putApi = async (path, data, id) => {
  try {
    let result = await axios.put(constant.baseUrl + path, data, {
      headers: getAuthHeader()
    })

    return result
  } catch (e) {
    console.error(e)

    return e
  }
}

export const deleteApi = async (path, param) => {
  try {
    let result = await axios.delete(constant.baseUrl + path + param, {
      headers: getAuthHeader()
    })

    if (result.data?.token && result.data?.token !== null) {
      localStorage.setItem('token', result.data?.token)
    }
  
    return result
  } catch (e) {
    console.error(e)

    return e
  }
}

export const deleteManyApi = async (path, data) => {
  try {
    let result = await axios.post(constant.baseUrl + path, data, {
      headers: getAuthHeader()
    })

    if (result.data?.token && result.data?.token !== null) {
      localStorage.setItem('token', result.data?.token)
    }

    return result
  } catch (e) {
    return e
  }
}

export const getApi = async (path, id) => {
  try {
    const fullPath = id ? path + id : path
    let result = await axios.get(constant.baseUrl + fullPath, {
      headers: getAuthHeader()
    })

    return result
  } catch (e) {
    console.error(e)
    return e
  }
}
