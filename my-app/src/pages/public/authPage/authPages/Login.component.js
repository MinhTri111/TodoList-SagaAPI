import React from 'react';
import { useField, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Input, Button, Row, Col, Spin } from 'antd';
import { loginRequest } from '../../../../saga/Auth/auth.action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { isLoadingSelector } from '../../../../saga/Auth/auth.selector';
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

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector(isLoadingSelector);
    return (
        <>
            <Row>
                <Col span={24}>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().required('Required'),
                            password: Yup.string().min(6, 'Must be 6 characters or less').required('Required'),
                        })}
                        onSubmit={(values) => {
                            dispatch(
                                loginRequest(
                                    values,
                                    () => {
                                        toast.success('Login success!!!');
                                        navigate('/');
                                    },
                                    (mes) => {
                                        toast.error(mes);
                                    },
                                ),
                            );
                        }}
                    >
                        <Form>
                            <MyTextInput
                                label="Email:"
                                name="email"
                                id="email"
                                type="text"
                                placeholder="Your email..."
                            />
                            <MyTextInput
                                label="PassWord:"
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Your password..."
                            />
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form>
                    </Formik>
                </Col>
                <Col span={2} offset={22}>
                    {loading && <Spin tip="Loading..." />}
                </Col>
            </Row>
        </>
    );
}
