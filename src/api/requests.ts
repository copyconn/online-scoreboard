import axios, {AxiosResponse} from "axios";

import {ResultsResponse} from "./types";

const URL = 'http://localhost:3001'

const axiosInstance = axios.create({
    baseURL: URL,
})

export const getResults = (): Promise<AxiosResponse<ResultsResponse[]>> =>
    axiosInstance.get('/scores')

export const getCurrent = (): Promise<AxiosResponse<ResultsResponse>> =>
    axiosInstance.get('/scores/current')

export const updateScore = (id: number, score: number) =>
    axiosInstance.put(`/scores/team/${id}`, {score: score})

export const deleteMatch = (id: number) =>
    axiosInstance.delete(`/scores/${id}`)