import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyForm.css'; // Import your CSS file for additional styling

export default function MyForm() {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await axios.get('http://localhost:3000/info', { params: values });
            if (response.status === 200) {
                const manipulatedData = response.data.map(item => {
                    return item;
                });
                console.log(manipulatedData);
                navigate('/island', { state: { data: manipulatedData } });
            } else {
                console.log('Error:', response);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="form-container">
            <div className='form-content'>
                <h1 className="form-title">Submit Your GitHub Page</h1>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="githubUsername"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Github Username',
                            },
                        ]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="submit-btn">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
