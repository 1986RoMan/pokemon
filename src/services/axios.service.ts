import axios from "axios";
import {baseURL} from "../constans";

const axiosInstance = axios.create({baseURL});

export {axiosInstance}
