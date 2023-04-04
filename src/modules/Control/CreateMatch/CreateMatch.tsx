import React from "react";
import {Button, Form, Input} from "antd";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {createMatch} from "../../../api";

interface IValues {
    leftTeam: string,
    rightTeam: string
}

export const CreateMatch = () => {
    const navigate = useNavigate()

    const onFinish = async (values: IValues) => {
        await createMatch(values.leftTeam, values.rightTeam)
        navigate('/control')
    }
    return (
        <Container>
            <h1>Создание матча</h1>
            <h3>Введите названия команд</h3>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    width: 600,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Первая команда"
                    name="leftTeam"
                    rules={[
                        {
                            required: true,
                            message: 'Введите название команды!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Вторая команда"
                    name="rightTeam"
                    rules={[
                        {
                            required: true,
                            message: 'Введите название команды!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Form>

            <ButtonContainer>
                <Button type="primary" onClick={() => navigate('/results')}>Итоги матчей</Button>
                <Button type="primary" onClick={() => navigate('/')}>Просмотр текущего матча</Button>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
  margin: 100px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`