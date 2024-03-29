import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "10a5561f-fb79-47ea-8c1a-ee75444b85ba",
  },
});
export const authAPI = {
  me() {
    return instance.get(`auth/me`)
    }, 
  login(email, password, rememberMe) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout(){
    return instance.delete(`auth/login`)
  }
}; 

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)},
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)},
  getProfile(userId){
    console.warn("Obsolete method. Please profileAPI object")
    return profileAPI.getProfile(userId)
  }
};
export const profileAPI = {
  getProfile(userId){
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId)
  },
  updateStatus(status){
    return instance.put('profile/status', {status: status})
  },
  savePhoto(photoFile){
    const formData = new FormData();
    formData.append("image", photoFile)
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    })
  },
  saveProfile(profile){
    return instance.put('profile', profile)
  },

};



