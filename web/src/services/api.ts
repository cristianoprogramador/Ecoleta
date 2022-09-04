import axios from "axios";
import React from "react";

const api = axios.create({
    baseURL: 'http://localhost:3333/'
});

export default api;