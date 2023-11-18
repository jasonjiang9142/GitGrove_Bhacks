import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

export default function MyForm() {


    const onFinish = (values) => {
        console.log('Success:', values);
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