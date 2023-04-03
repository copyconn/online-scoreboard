import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

import {getCurrent, ResultsResponse} from "../../api";

export const View = () => {
    const navigate = useNavigate()
    const [current, setCurrent] = useState<ResultsResponse | null>(null)

    const getData = async () => {
        const result = await getCurrent()
        setCurrent(result.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Container>
            {current && <Period>Период {current.period + 1}</Period>}
            {current ? <Scoreboard>
                <Team>
                    {current.leftTeam.name}
                    <div>{current.leftTeam.score}</div>
                </Team>
                <Team>
                    {current.rightTeam.name}
                    <div>{current.rightTeam.score}</div>
                </Team>
            </Scoreboard> : <h1>Нет текущего матча</h1>}

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
  align-items: center;
`

const Period = styled.div`
  display: flex;
  justify-content: center;
`

const Scoreboard = styled.div`
  display: flex;
  width: 700px;
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