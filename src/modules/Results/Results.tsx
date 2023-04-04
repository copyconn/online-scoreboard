import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Table} from "antd";
import styled from "styled-components";

import {deleteMatch, getResults} from "../../api";

const {Column} = Table;

interface IResults {
    id: number,
    key: number,
    date: string,
    leftTeam: string,
    rightTeam: string,
    score: string,
}

export const Results = () => {
    const navigate = useNavigate()
    const [results, setResults] = useState<IResults[]>([])

    const getData = async () => {
        const result = await getResults()
        const rawData = result.data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        const data = rawData.map((el, index) => {
            return {
                id: el.id,
                key: index,
                date: new Date(el.date).toLocaleDateString("ru-RU"),
                leftTeam: el.leftTeam.name,
                rightTeam: el.rightTeam.name,
                score: `${el.leftTeam.score} : ${el.rightTeam.score}`,
            }
        })
        setResults(data)
    }

    useEffect(() => {
        getData()
    }, [])

    const removeMatch = async (index: number) => {
        await deleteMatch(results[index].id)
        getData();
    }

    return (
        <Container>
            <Table
                dataSource={results}
                pagination={{
                    pageSize: 4,
                }}
            >

                {/*<Column title="id" dataIndex="id" key="id"/>*/}
                <Column title="Дата" dataIndex="date" key="date"/>
                <Column title="Первая команда" dataIndex="leftTeam" key="leftTeam"/>
                <Column title="Вторая команда" dataIndex="rightTeam" key="rightTeam"/>
                <Column title="Счет" dataIndex="score" key="score"/>
                <Column title="Удаление матча" key="delete" render={(_, __, index) => (
                    <Button type="primary" onClick={() => removeMatch(index)}>X</Button>
                )}/>
            </Table>

            <ButtonContainer>
                <Button type="primary" onClick={() => navigate('/control')}>Управление текущим матчем</Button>
                <Button type="primary" onClick={() => navigate('/')}>Просмотр текущего матча</Button>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
  width: 900px;
  font-size: 20px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin: 200px auto 0;
`