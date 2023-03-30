import React from "react";
import styled from "styled-components";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

export const View = () => {
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
            <Period>Период {currentPeriod + 1}</Period>
            <Scoreboard>
                <Team>
                    {period.rightTeam.name}
                    <div>{period.rightTeam.score}</div>
                </Team>
                <Team>
                    {period.leftTeam.name}
                    <div>{period.leftTeam.score}</div>
                </Team>
            </Scoreboard>
            <ButtonContainer>
                <Button type="primary" onClick={() => navigate('/results')}>Итоги матчей</Button>
                <Button type="primary" onClick={() => navigate('/control')}>Управление текущим матчем</Button>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 100px auto;
  gap: 50px;
  font-size: 20px;
`

const Period = styled.div`
  display: flex;
  justify-content: center;
`

const Scoreboard = styled.div`
  display: flex;
`

const Team = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin: 0 auto;
  height: 200px;
  align-items: flex-end;
`