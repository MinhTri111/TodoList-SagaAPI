import React from 'react';
import { Button, Space, Input, Col, Row } from 'antd';
import * as Yup from 'yup';
import { useField, Form, Formik } from 'formik';
import { addRequest } from '../../saga/Todos/todos.action';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { tokenSelector } from '../../saga/Auth/auth.selector';
import { useNavigate } from 'react-router-dom';
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>
                {label}
                <Input {...field} {...props} autoComplete="on" />
            </label>
            {meta.touched || meta.error ? <div>{meta.error}</div> : null}
        </>
    );
};
export default function AddTodo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(tokenSelector);
    return (
        <>
            <div className="addTodo">
                <Row>
                    <Col span={24}>
                        <Formik
                            initialValues={{
                                name: '',
                                description: '',
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string().min(6, 'Must be 6 characters or less').required('Required'),
                                description: Yup.string().min(6, 'Must be 6 characters or less').required('Required'),
                            })}
                            onSubmit={(values) => {
                                dispatch(
                                    addRequest(values, token, () => {
                                        navigate('/');
                                        toast.success('Add Success!!!');
                                    }),
                                );
                            }}
                        >
                            <Form>
                                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                    <Row>
                                        <Col span={24}>
                                            <MyTextInput
                                                label="Name Todo:"
                                                name="name"
                                                id="name"
                                                type="text"
                                                placeholder="Name todo..."
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            {' '}
                                            <MyTextInput
                                                label="Description:"
                                                name="description"
                                                id="description"
                                                type="text"
                                                placeholder="Description..."
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            {' '}
                                            <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
                                                Add Todo
                                            </Button>
                                        </Col>
                                    </Row>
                                </Space>
                            </Form>
                        </Formik>
                    </Col>
                    {/* <Col span={2} offset={22}>
                    {loading && <Spin tip="Loading..." />}
                </Col> */}
                </Row>
            </div>
        </>
    );
}
