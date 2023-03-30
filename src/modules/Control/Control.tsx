import React from "react";
import {Button} from "antd";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export const Control = () => {
    const navigate = useNavigate()

    const currentPeriod = 0 //в стейт потом

    const data = [
        {
            started: true,
            rightTeam: {
                name: 'team1',
                score: 39
            },
            leftTeam: {
                name: 'team2',
                score: 40
            },
        },
        {
            started: false,
            rightTeam: {
                name: 'team1',
                score: 0
            },
            leftTeam: {
                name: 'team2',
                score: 0
            },
        },
    ]

    const period = data[currentPeriod]

    return (
        <Container>
            <ButtonContainer>
                <Button type="primary">Начать матч</Button>
                <Button type="primary">Завершить текущий матч</Button>
                <Button type="primary">Пауза</Button>
            </ButtonContainer>

            <PeriodBox>
                Период <Period>{currentPeriod + 1}</Period>
                <Timer>01:32</Timer>
            </PeriodBox>

            <Scoreboard>
                <Team>
                    {period.rightTeam.name}
                    <div>{period.rightTeam.score}</div>
                    <ButtonScoreContainer>
                        <Button type="primary">+1</Button>
                        <Button type="primary">+2</Button>
                        <Button type="primary">+3</Button>
                    </ButtonScoreContainer>
                </Team>
                <Team>
                    {period.leftTeam.name}
                    <div>{period.leftTeam.score}</div>
                    <ButtonScoreContainer>
                        <Button type="primary">+1</Button>
                        <Button type="primary">+2</Button>
                        <Button type="primary">+3</Button>
                    </ButtonScoreContainer>
                </Team>
            </Scoreboard>

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