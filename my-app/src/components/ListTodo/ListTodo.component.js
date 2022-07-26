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
    useEffect(() => {
        dispatch(fetchRequest('fetchRequest'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const listTodo = useSelector(todosSelector);
    console.log('a', listTodo);
    const loading = useSelector(loadingSelector);
    return (
        <>
            <Row className="listTodo">
                <Divider plan="true">LIST TODO</Divider>
                <Col span={24}>
                    {/* {loading ? (
                        <Spin tip="Loading...">
                            <List
                                itemLayout="vertical"
                                size="large"
                                pagination={{
                                    onChange: (page) => {},
                                    pageSize: 4,
                                }}
                                dataSource={listTodo}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Todo
                                            name={item.name}
                                            description={item.description}
                                            id={item._id}
                                            key={item.id}
                                            isDone={item.isDone}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Spin>
                    ) : ( */}
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
                                <Todo description={item.description} id={item._id} key={item.id} isDone={item.isDone} />
                            </List.Item>
                        )}
                    />
                    {/* )
                    } */}
                </Col>
            </Row>
            <ToastContainer />
        </>
    );
};

export default ListTodo;
