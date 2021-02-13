import axios from 'axios';

const base = axios.create({
    baseURL: '/api/auth',
    headers: {
        'Content-Type': 'application/json',
      }
});

base.interceptors.request.use(config=> {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

const login = (body) =>{
    return base.post('/login', body)
    .then((result) => {
        return Promise.resolve(result);
    }).catch((err) => {
        return Promise.reject(err);
        
    });
}

const register = (body) =>{
    return base.post('/register', body)
    .then((result) => {
        return Promise.resolve(result);
    }).catch((err) => {
        return Promise.reject(err);
        
    });
}

const getUser = () =>{

    return base.get('/authenticate')
    .then((result) => {
        console.log("aqui foi");
        return Promise.resolve(result.data.data);
    }).catch((err) => {
        console.log("why");
        return Promise.reject(err);
    });
}

export {login, register, getUser};