import axios from "axios";

export const webServerArduino = axios.create({
  baseURL: 'http://192.168.0.1',
});