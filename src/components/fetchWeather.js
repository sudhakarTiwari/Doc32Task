import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
//const URL = "https://pro.openweathermap.org/data/2.5/forecast/hourly";
const API_KEY = "aae201a1ca5510b9eb8a778c7d897eaf"; //0f3fb9fa31ad3d41f1bb2bd0841c3f2f //7c23f417729baef3a324e50e25866fb9 //aae201a1ca5510b9eb8a778c7d897eaf
const fetchWeather = async query => {
  const data = await axios
    .get(URL, {
      params: {
        q: query,
        appid: API_KEY
      }
    })
    .catch(error => {
      console.log(error.response);
      return error.response;
    });
  return data;
};

export default fetchWeather;
