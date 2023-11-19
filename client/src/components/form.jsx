import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyForm.css'; // Import your CSS file for additional styling
import logo from '../../assets/Git_Grove_Logo.png';

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
            <h1 className="form-title drop-shadow-md" >VISUALIZE YOUR WORKFLOW WITH GIT GROVE.</h1>
            <div className='form-content'>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div >
                        <div>
                            <Form.Item
                                name="githubUsername"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your Github Username',
                                    },
                                ]}
                            >
                                <Input placeholder="Github Username" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="submit-btn">
                                    Transform
                                </Button>
                            </Form.Item>

                        </div>
                        
                    </div>
                </Form>
                
            </div>
            <img src={logo} alt="" className='w-1/6 self-end flex mb-1.5;'/>
        </div>
    );
};
