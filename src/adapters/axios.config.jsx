import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://restcountries.com/v2/all',
     headers: {
      "Content-type": 'aplication/json',
      Accept: "aplication/json",
     },
  });

  instance.interceptors.request.use(async (config) =>{
    const insToken = false;
     if(isToken){
     // config.headers!.Authorization = "Bearer " + isToken;
     } 
  });

