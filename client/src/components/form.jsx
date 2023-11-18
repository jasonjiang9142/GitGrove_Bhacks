import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'

export default function MyForm() {


    const onFinish = async (values) => {
        console.log("hi")

        try {
            const response = await axios.get('http://localhost:3000/info', { params: values })
            if (response.ok) {
                console.log(response)
            }
            else {
                console.log(error)
            }
        } catch (e) {
            console.log(e)
        }


    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"



        >
            <Form.Item
                label="Github"
                name="Github"
                rules={
                    [
                        {
                            required: true,
                            message: 'Please enter your Github Username',
                        },
                    ]}
            >
                <Input />
            </Form.Item >


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" className=" ">
                    Submit
                </Button>
            </Form.Item>
        </Form >)
}