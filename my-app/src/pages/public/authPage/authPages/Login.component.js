import React from 'react';
import { useField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Row, Col } from 'antd';
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
export default function Login() {
    return (
        <>
            <Row>
                <Col span={24}>
                    <Formik
                        initialValues={{
                            account: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            account: Yup.string().required('Required'),
                            password: Yup.string().min(6, 'Must be 6 characters or less').required('Required'),
                        })}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <Form>
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
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </>
    );
}
