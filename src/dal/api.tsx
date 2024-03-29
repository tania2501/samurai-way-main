import axios from "axios";
import { LoginDataType } from "../mainRedux/login-reducer";
import { ProfileUserType } from "../components/Profile/ProfileContainer";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "9ea0b65b-29dc-4d3d-81d5-a42faf1e493e",
  },
});

export const usersAPI = {
  getUsers(setCurrentPage: (page: number) => void, pageSize: number) {
    return instance
      .get(`/users?page=${setCurrentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  onChangeUsersPage(page: number, pageSize: number) {
    return instance
      .get(`/users?page=${page}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getFollow(id: number) {
    return instance.post(`/follow/${id}`, {}).then((response) => {
      return response.data;
    });
  },
  unFollow(id: number) {
    return instance.delete(`/follow/${id}`).then((response) => {
      return response.data;
    });
  },
};
export const profileAPI = {
  getProfile(userId: number) {
    return instance.get("/profile/" + userId).then((response) => {
      return response.data;
    });
  },
  getStatus(id: number) {
    return instance.get(`/profile/status/${id}`).then((response) => {
      return response.data;
    });
  },
  changeStatus(status: string) {
    return instance.put("/profile/status", { status }).then((response) => {
      return response.data;
    });
  },
  updatePhoto(file: File) {
    const formData = new FormData();
    formData.append("image", file);
    return instance
      .put("/profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      });
  },
  updateProfileData(data: ProfileUserType) {
    return instance.put('/profile', data).then((response) => {
      return response.data
    })
  }
};
export const authAPI = {
  auth() {
    return instance.get(`/auth/me`).then((response) => {
      return response.data;
    });
  },
  login(data: LoginDataType) {
    return instance.post("/auth/login", data).then((response) => {
      return response.data;
    });
  },
  logOut() {
    return instance.delete("/auth/login").then((response) => {
      return response.data;
    });
  },
};
export const securityAPI = {
  getCaptcha() {
    return instance.get('/security/get-captcha-url').then((res)=> res.data)
  }
}