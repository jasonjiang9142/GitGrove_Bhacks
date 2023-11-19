import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function MyForm() {
    const navigate = useNavigate()


    const onFinish = async (values) => {

        try {
            const response = await axios.get('http://localhost:3000/info', { params: values })
            if (response.status === 200) {
                {/* Changed from response.ok to response.status */ }
                console.log(response)
                navigate('/island')
            } else {
                console.log('Error:', response);
            }
        } catch (e) {
            console.log(e)
        }
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-red-300">
            <div className='bg-blue-300 p-6 rounded-md shadow-md text-center rounded-xl'>
                <h1 className="text-3xl font-bold mb-4">Submit Your GitHub Page</h1>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 400,
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
                        name="githubUsername"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Github Username',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

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
                </Form>
            </div>
        </div>
    );
};

