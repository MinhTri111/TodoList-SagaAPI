import { List, Row, Col, Divider, Spin } from 'antd';
import { AddTodo, Todo } from '../../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { loadingSelector, todosSelector } from '../../saga/Todos/todos.selector';
import { useDispatch } from 'react-redux';
import { fetchRequest } from '../../saga/Todos/todos.action';
import React, { useEffect } from 'react';
import 'antd/dist/antd.min.css';
const TodoList = () => {
    const dispatch = useDispatch();
    const listTodo = useSelector(todosSelector);
    const loading = useSelector(loadingSelector);
    useEffect(() => {
        dispatch(fetchRequest('fetchRequest'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
            <div className="TodoList">
                <Row justify="left">
                    <Col span={24}>
                        <h1>Todo App</h1>
                    </Col>
                    <Col span={24}>
                        <AddTodo />
                    </Col>
                    <Divider plan="true">LIST TODO</Divider>
                    <Col span={24}>
                        {loading ? (
                            <Spin tip="Loading...">
                                <List
                                    itemLayout="vertical"
                                    size="large"
                                    pagination={{
                                        onChange: (page) => {
                                            console.log(page);
                                        },
                                        pageSize: 4,
                                    }}
                                    dataSource={listTodo.data}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <Todo
                                                title={item.title}
                                                id={item.id}
                                                key={item.id}
                                                complete={item.completed}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Spin>
                        ) : (
                            <List
                                itemLayout="vertical"
                                size="large"
                                pagination={{
                                    onChange: (page) => {
                                        console.log(page);
                                    },
                                    pageSize: 4,
                                }}
                                dataSource={listTodo.data}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Todo title={item.title} id={item.id} key={item.id} complete={item.completed} />
                                    </List.Item>
                                )}
                            />
                        )}
                    </Col>
                </Row>
                <ToastContainer />
            </div>
        </div>
    );
};

export default TodoList;
