import { List, Row, Col, Divider, Spin } from 'antd';
import { Todo } from '../../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { loadingSelector, todosSelector } from '../../saga/Todos/todos.selector';
import { tokenSelector, userIdSelector } from '../../saga/Auth/auth.selector';
import { useDispatch } from 'react-redux';
import { fetchRequest } from '../../saga/Todos/todos.action';
import React, { useEffect } from 'react';
import 'antd/dist/antd.min.css';
const ListTodo = (props) => {
    const dispatch = useDispatch();
    const listTodo = useSelector(todosSelector);
    const token = useSelector(tokenSelector);
    const userID = useSelector(userIdSelector);
    const loading = useSelector(loadingSelector);
    useEffect(() => {
        dispatch(fetchRequest(JSON.parse(token) ? JSON.parse(token) : 'null'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Row className="listTodo">
                <Divider plan="true">LIST TODO</Divider>
                <Col span={24}>
                    {loading ? (
                        <Spin tip="Loading...">
                            <List
                                itemLayout="vertical"
                                size="large"
                                pagination={{
                                    onChange: (page) => {},
                                    pageSize: 3,
                                }}
                                dataSource={listTodo}
                                renderItem={(item) => (
                                    <List.Item>
                                        <List.Item.Meta title={<p>FOR:{item.name}</p>} />
                                        <Todo
                                            name={item.name}
                                            description={item.description}
                                            userId={item.userId}
                                            id={item._id}
                                            key={item.id}
                                            isDone={item.isDone}
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
                                onChange: (page) => {},
                                pageSize: 3,
                            }}
                            dataSource={
                                props.search ? listTodo.filter((item) => item.name.includes(props.search)) : listTodo
                            }
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta title={<p>FOR:{item.name}</p>} />
                                    <Todo
                                        name={item.name}
                                        description={item.description}
                                        userId={item.userId}
                                        id={item._id}
                                        key={item.id}
                                        isDone={item.isDone}
                                    />
                                </List.Item>
                            )}
                        />
                    )}
                </Col>
            </Row>
            <ToastContainer />
        </>
    );
};

export default ListTodo;
