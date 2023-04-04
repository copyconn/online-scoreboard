import React, {useEffect, useState} from "react";
import {Button, InputNumber} from "antd";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

import {finishCurrent, getCurrent, ResultsResponse, updateScore} from "../../api";

export const Control = () => {
    const navigate = useNavigate()
    const [current, setCurrent] = useState<ResultsResponse | null>(null)

    const getData = async () => {
        const result = await getCurrent()
        setCurrent(result.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const finishMatch = async () => {
        if (current) {
            await finishCurrent(current.id)
            getData()
        }
    }

    const handleUpdateScore = async (score: number | null, id: number) => {
        if (typeof score === 'number' && score > 0) {
            await updateScore(id, score)
            getData()
        }
    }

    return (
        <Container>
            <ButtonContainer>
                <Button type="primary" disabled={!!current} onClick={() => navigate('/create')}>Начать матч</Button>
                <Button type="primary" disabled={!current} onClick={finishMatch}>Завершить текущий матч</Button>
                <Button type="primary" disabled={!current}>Пауза</Button>
            </ButtonContainer>

            <PeriodBox>
                Период <Period>{current && current.period + 1}</Period>
                <Timer>01:32</Timer>
            </PeriodBox>

            {current ?
                <Scoreboard>
                    <Team>
                        {current.leftTeam.name}
                        <InputNumber
                            min={1}
                            defaultValue={current.leftTeam.score}
                            onChange={(value) => {
                                handleUpdateScore(value, current.leftTeam.id)
                            }}
                        />
                        <ButtonScoreContainer>
                            <Button type="primary"
                                    onClick={() => handleUpdateScore(current.leftTeam.score + 1, current.leftTeam.id)}>+1</Button>
                            <Button type="primary">+2</Button>
                            <Button type="primary">+3</Button>
                        </ButtonScoreContainer>

                    </Team>
                    <Team>
                        {current.rightTeam.name}
                        <InputNumber
                            min={1}
                            defaultValue={current.rightTeam.score}
                            onChange={(value) => {
                                handleUpdateScore(value, current?.rightTeam.id)
                            }}
                        />
                        <ButtonScoreContainer>
                            <Button type="primary">+1</Button>
                            <Button type="primary">+2</Button>
                            <Button type="primary">+3</Button>
                        </ButtonScoreContainer>
                    </Team>
                </Scoreboard>
                : <h1>Нет текущего матча</h1>
            }

            <ButtonContainer>
                <Button type="primary" onClick={() => navigate('/results')}>Итоги матчей</Button>
                <Button type="primary" onClick={() => navigate('/')}>Просмотр текущего матча</Button>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
  width: 700px;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: 100px auto;
  gap: 80px;
  justify-content: center;
`

const PeriodBox = styled.div`
  display: flex;
  gap: 20px;
`

const Period = styled.div`
  width: 20px;
  height: 25px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`

const Timer = styled.div`
  height: 25px;
  width: 60px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`

const Scoreboard = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 200px;
`

const Team = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const ButtonScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`