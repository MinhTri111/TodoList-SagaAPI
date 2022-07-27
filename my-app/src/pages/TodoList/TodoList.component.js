import { Row, Col } from 'antd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRouter, PublicRouter } from '../../router';
import { DashBoardPrivate, DashBoardPublic } from '../../layouts/header';
import React from 'react';
import 'antd/dist/antd.min.css';
import { useSelector } from 'react-redux';
import { isLoginSelector } from '../../saga/Auth/auth.selector';
const TodoList = () => {
    const isLogin = useSelector(isLoginSelector);
    return (
        <div className="App">
            <div className="TodoList">
                <Row>
                    <Col span={24}>
                        <h1>Todo App</h1>
                    </Col>
                    <Col span={24}>{isLogin ? <DashBoardPrivate /> : <DashBoardPublic />}</Col>
                </Row>
                {isLogin ? <PrivateRouter /> : <PublicRouter />}
                <ToastContainer />
            </div>
        </div>
    );
};

export default TodoList;
