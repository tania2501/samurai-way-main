import axios from "axios";


const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const usersAPI = {
  getUsers(setCurrentPage: (page: number)=>void, pageSize: number) {
    return  instanse.get(`/users?page=${setCurrentPage}&count=${pageSize}`).then( response => {
      return response.data
    })
  }
}
export const usersAPIpage = {
  onChangeUsersPage (page: number, pageSize: number) {
    return  instanse.get(`/users?page=${page}&count=${pageSize}`).then( response => {
      return response.data
    })
  }
}

export const authAPI = {
  auth() {
    return instanse.get(`/auth/me`).then(response => {
      return response.data
    })
  }
}
export const profileAPI = {
  getProfile (userId: number) {
    return instanse
    .get('/profile/' + userId).then( response => {
      return response.data
    })
  } 
}

export const profileAPIpost = {
  getFollow(id: number) {
    return instanse.post(`/follow/${id}`, {}).then( response => {
      return response.data
    })
  }
}

export const profileAPIdel = {
  unFollow (id: number) {
    return instanse.delete(`/follow/${id}`,{ withCredentials: true}).then( response => {
      return response.data
    })
  }
}

