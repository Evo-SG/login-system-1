import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import './CSS/login.css';

const App = () => {
    const history = useHistory();

    const submit = async (value) => {
        let jwt;
        try {
            jwt = await axios.post('http://localhost:8080/authenticate', value)
        } catch (e) {
            alert("wrong username or password");
            return
        }

        localStorage.setItem('localhost_token', jwt.data.token);
        pages(value);
    }
    const pages = (value) => {
        if (value.username === 'admin') {
            history.push('/admin')
        } else {
            history.push('/user')
        }
    }

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                initialValues={{ remember: true }}
                onFinish={submit}
                autoComplete="off"
                style={{ margin: "5%" }}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default App;