import axios from "axios"; 

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    "API-KEY": "9ea0b65b-29dc-4d3d-81d5-a42faf1e493e"
  }
})

export const usersAPI = {
  getUsers(setCurrentPage: (page: number)=>void, pageSize: number) {
    return  instance.get(`/users?page=${setCurrentPage}&count=${pageSize}`).then( response => {
      return response.data
    })
  },
   onChangeUsersPage (page: number, pageSize: number) {
    return  instance.get(`/users?page=${page}&count=${pageSize}`).then( response => {
      return response.data
    })
  },
   auth() {
    return instance.get(`/auth/me`).then(response => {
      return response.data
    })
  },
  getProfile (userId: number) {
    return instance.get('/profile/' + userId).then( response => {
      return response.data
    })
  },
  getFollow(id: number) {
    return instance.post(`/follow/${id}`, {}).then( response => {
      return response.data
    })
  },
  unFollow (id: number) {
    return instance.delete(`/follow/${id}`).then( response => {
      return response.data
    })
  },
  getStatus(id: number) {
    return instance.get(`/profile/status/${id}`).then( response => {
      return response.data
    })
  },
  changeStatus(status: string) {
    return instance.put('/profile/status', {status}).then( response => {
      return response.data
    })
  }
}


