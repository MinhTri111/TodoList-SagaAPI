import React from 'react';
import { useField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { registerRequest } from '../../../../saga/Auth/auth.action';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>
                {label}
                <Input {...field} {...props} />
            </label>
            {meta.touched || meta.error ? <div>{meta.error}</div> : null}
        </>
    );
};
export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <Row>
                <Col span={24}>
                    <Formik
                        initialValues={{
                            account: '',
                            password: '',
                            cfpassword: '',
                        }}
                        validationSchema={Yup.object({
                            account: Yup.string().required('Required'),
                            password: Yup.string().min(6, 'Must be 6 characters or less').required('Required'),
                            cfpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
                        })}
                        onSubmit={(values) => {
                            const account = values.account;
                            const password = values.password;
                            const name = values.name;
                            dispatch(
                                registerRequest({ account, password, name }, () => {
                                    navigate('/login');
                                    toast('Register Success!!!');
                                }),
                            );
                        }}
                    >
                        <Form>
                            <MyTextInput label="Name:" name="name" id="name" type="text" placeholder="Your name..." />
                            <MyTextInput
                                label="Account:"
                                name="account"
                                id="account"
                                type="text"
                                placeholder="Your account..."
                            />
                            <MyTextInput
                                label="PassWord:"
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Your password..."
                            />
                            <MyTextInput
                                label="Confirm PassWord:"
                                name="cfpassword"
                                id="cfpassword"
                                type="password"
                                placeholder="Your password..."
                            />
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </>
    );
}
