import { List, Row, Col, Divider, Spin } from 'antd';
import { Todo } from '../../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { loadingSelector, todosSelector } from '../../saga/Todos/todos.selector';
import { useDispatch } from 'react-redux';
import { fetchRequest } from '../../saga/Todos/todos.action';
import React, { useEffect } from 'react';
import 'antd/dist/antd.min.css';
const ListTodo = (props) => {
    const dispatch = useDispatch();
    const listTodo = useSelector(todosSelector);
    const loading = useSelector(loadingSelector);
    useEffect(() => {
        dispatch(fetchRequest('fetchRequest'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const x = useSelector((state) => {
        console.log(state);
        return state;
    });
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
                            dataSource={
                                props.search
                                    ? listTodo.data.filter((item) => item.title.includes(props.search))
                                    : listTodo.data
                            }
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
        </>
    );
};

export default ListTodo;
