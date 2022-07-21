import { Row, Col } from 'antd';
import ListTodo from '../../components/ListTodo/ListTodo.component';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HeaderPublic, HeaderPrivate } from '../../layouts/header';
import { PrivateRouter, PublicRouter } from '../../router';
import { AddTodo } from '../../components';
import EditTodo from '../../components/EditTodo/EditTodo';
import SearchTodo from '../../components/SearchTodo/SearchTodo';
import React from 'react';
import 'antd/dist/antd.min.css';
const TodoList = () => {
    return (
        <div className="App">
            <div className="TodoList">
                <Row>
                    <Col span={24}>
                        <h1>Todo App</h1>
                    </Col>
                    <Col span={24}>
                        <PublicRouter />
                    </Col>
                </Row>
                <ToastContainer />
            </div>
        </div>
    );
};

export default TodoList;
