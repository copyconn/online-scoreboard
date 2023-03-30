import React from "react";
import {useNavigate} from "react-router-dom";
import {Button, Table} from "antd";
import styled from "styled-components";

export const Results = () => {
    const navigate = useNavigate()

    const dataSource = [
        {
            key: '1',
            date: '01.01.2023',
            team_1: 'пепеги',
            team_2: 'мяк мяки',
            score: '5 : 2',
            delete: <Button type="primary">Х</Button>
        },
        {
            key: '2',
            date: '10.03.2023',
            team_1: 'пепежата',
            team_2: 'мяк мячата',
            score: '8 : 6',
            delete: <Button type="primary">Х</Button>
        },
    ];

    const columns = [
        {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Первая команда',
            dataIndex: 'team_1',
            key: 'team_1',
        },
        {
            title: 'Вторая команда',
            dataIndex: 'team_2',
            key: 'team_2',
        },
        {
            title: 'Счет',
            dataIndex: 'score',
            key: 'score',
        },
        {
            title: 'Удаление матча',
            dataIndex: 'delete',
            key: 'delete',
        },
    ];

    return (
        <Container>
            <Table dataSource={dataSource} columns={columns} />

            <ButtonContainer>
                <Button type="primary" onClick={() => navigate('/control')}>Управление текущим матчем</Button>
                <Button type="primary" onClick={() => navigate('/')}>Просмотр текущего матча</Button>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
  width: 700px;
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