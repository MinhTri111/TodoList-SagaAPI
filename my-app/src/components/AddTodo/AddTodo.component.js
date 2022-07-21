import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input, Col, Row } from 'antd';
import { addRequest } from '../../saga/Todos/todos.action';
import { useDispatch, useSelector } from 'react-redux';
import { todosSelector } from '../../saga/Todos/todos.selector';
import 'react-toastify/dist/ReactToastify.css';
import addTodoHook from './addTodo.hooks';
import ListTodo from '../ListTodo/ListTodo.component';
import { toast } from 'react-toastify';
export default function AddTodo() {
    const dispatch = useDispatch();
    const { newTodo, setNewTodo } = addTodoHook();
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };
    const listTodo = useSelector(todosSelector);

    const handleClickAdd = () => {
        switch (newTodo) {
            case '':
                return toast.error('This field is required!!!');
            case newTodo:
                const check = listTodo.data?.findIndex((value) => value.title === newTodo);
                if (check === -1) {
                    return dispatch(
                        addRequest({ title: newTodo, completed: false }, () => {
                            toast.success('Add Success!');
                            setNewTodo('');
                        }),
                    );
                }
                return toast.error('This to do already exits!!!');
            default:
        }
    };

    return (
        <>
            <div className="addTodo">
                <Row>
                    <Col span={3}>
                        <label htmlFor="todo">Input Todo</label>
                    </Col>
                    <Col span={20}>
                        <Input placeholder="New Todo" size="medium" id="todo" onChange={handleChange} value={newTodo} />
                    </Col>
                    <Col span={1}>
                        <Tooltip title="Add">
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<PlusCircleOutlined />}
                                onClick={handleClickAdd}
                            />
                        </Tooltip>
                    </Col>
                    <Col span={24}>
                        <ListTodo />
                    </Col>
                </Row>
            </div>
        </>
    );
}
