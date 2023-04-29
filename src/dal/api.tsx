import axios from "axios"; 

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    "API-KEY": "9ea0b65b-29dc-4d3d-81d5-a42faf1e493e"
  }
})

export const usersAPI = {
  getUsers(setCurrentPage: (page: number)=>void, pageSize: number) {
    return  instanse.get(`/users?page=${setCurrentPage}&count=${pageSize}`).then( response => {
      return response.data
    })
  },
   onChangeUsersPage (page: number, pageSize: number) {
    return  instanse.get(`/users?page=${page}&count=${pageSize}`).then( response => {
      return response.data
    })
  },
   auth() {
    return instanse.get(`/auth/me`).then(response => {
      return response.data
    })
  },
  getProfile (userId: number) {
    return instanse
    .get('/profile/' + userId).then( response => {
      return response.data
    })
  },
  getFollow(id: number) {
    return instanse.post(`/follow/${id}`, {}).then( response => {
      return response.data
    })
  },
  unFollow (id: number) {
    return instanse.delete(`/follow/${id}`).then( response => {
      return response.data
    })
  }
}


