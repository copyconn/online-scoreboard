import axios, { AxiosResponse } from "axios";

import { MatchInformation } from "./types";

const URL = 'http://localhost:3001'

const axiosInstance = axios.create({
    baseURL: URL,
})

export const getSummary = (): Promise<AxiosResponse<MatchInformation[]>> =>
    axiosInstance.get('/scores')

export const getCurrent = (): Promise<AxiosResponse<MatchInformation>> =>
    axiosInstance.get('/scores/current')

export const createMatch = (leftTeam: string, rightTeam: string) =>
    axiosInstance.post('/scores', { leftTeamName: leftTeam, rightTeamName: rightTeam })

export const updatePeriod = (id: number) =>
    axiosInstance.put(`/scores/${id}`)

export const updateScore = (id: number, score: number) =>
    axiosInstance.put(`/scores/team/${id}`, { score: score })

export const finishCurrent = (id: number) =>
    axiosInstance.put(`/scores/match/${id}`)

export const deleteMatch = (id: number) =>
    axiosInstance.delete(`/scores/${id}`)