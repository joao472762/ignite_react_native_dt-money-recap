import axios from "axios";

const transactionUrl = 'http://localhost:3000'
export const Api = axios.create({baseURL: transactionUrl})