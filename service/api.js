import axios from 'axios';
// axios 配置
axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://127.0.0.1:3000/';
// axios.defaults.baseURL = "http://47.98.115.136:3000";
axios.defaults.withCredentials = true;
axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});
axios.interceptors.response.use((res) => {
  return res;
}, (error) => {
  console.log('网络异常');
  return Promise.reject(error);
});
export default function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      }).catch((error) => {
        reject(error);
      });
  });
}
export function says(){
  return fetch('say/list');
}
export function getArticals(data) {
  return fetch('artical/list',data);
}
export function getVisitorMount(){
  return fetch('count/visitor');
}

