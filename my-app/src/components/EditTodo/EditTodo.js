import React, { useState } from 'react';
import { Row, Col, Tooltip, Button, Input } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { todosSelector } from '../../saga/Todos/todos.selector';
import { updateRequest } from '../../saga/Todos/todos.action';
import { toast } from 'react-toastify';
export default function EditTodo() {
    const id = useParams().id;
    const title = useParams().title;
    console.log(title);
    const dispatch = useDispatch();
    const listTodo = useSelector(todosSelector);
    const [todo, setTodo] = useState('');
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const navigate = useNavigate();
    const handleSaveClick = () => {
        switch (todo) {
            case '':
                return toast.error('This field is required!!!');
            case todo:
                const check = listTodo.data?.findIndex((value) => value.title === todo);
                if (check === -1) {
                    return dispatch(
                        updateRequest({ id: id, title: todo }, () => {
                            toast.success('Update Success!!!');
                            setTodo('');
                            navigate('/');
                        }),
                    );
                }
                return toast.error('This to do already exits!!!');
            default:
        }
    };

    return (
        <>
            <div className="editTodo">
                <Row>
                    <Col span={3}>
                        <label htmlFor="todo">Edit Todo</label>
                    </Col>
                    <Col span={20}>
                        <Input size="medium" id="todo" onChange={handleChange} placeholder={title} />
                    </Col>
                    <Col span={1}>
                        <Tooltip title="Edit">
                            <Button type="primary" shape="circle" icon={<CheckOutlined />} onClick={handleSaveClick} />
                        </Tooltip>
                    </Col>
                </Row>
            </div>
        </>
    );
}
