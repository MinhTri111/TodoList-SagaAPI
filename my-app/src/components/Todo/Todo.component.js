import React from 'react';
import styled from 'styled-components';
import { DeleteOutlined, EditOutlined, CheckOutlined, LogoutOutlined } from '@ant-design/icons';
import { Checkbox, Button, Tooltip, Input, Row, Col, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRequest, updateRequest, completedRequest } from '../../saga/Todos/todos.action';
import { todosSelector } from '../../saga/Todos/todos.selector';
import todoHooks from './todo.hooks';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { isLoginSelector, tokenSelector, userIdSelector } from '../../saga/Auth/auth.selector';
const StytedDiv = styled.button`
    padding-left: 10px;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
`;
export default function Todo(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { name, description, userId, id, isDone, setListSearch } = props;
    const { showEdit, setShowEdit, todo, setTodo } = todoHooks();
    const listTodo = useSelector(todosSelector);
    const userID = useSelector(userIdSelector);
    const token = useSelector(tokenSelector);
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const isLogin = useSelector(isLoginSelector);
    const handleEditClick = () => {
        navigate(`/${id}/${name}/${description}`, { replace: true });
    };
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
                            setShowEdit(!showEdit);
                        }),
                    );
                }
                return toast.error('This to do already exits!!!');
            default:
        }
    };

    const handleDeleteClick = () => {
        dispatch(
            deleteRequest(
                id,
                token,
                {
                    userId: userID,
                },
                () => {
                    toast.success('Delete Success!!!');
                },
                () => {
                    toast.success('Delete Failed!!!');
                },
            ),
        );
    };
    const handleExitClick = () => {
        setShowEdit(!showEdit);
        setTodo('');
    };

    const handleChangeCheckbox = (e) => {
        dispatch(
            completedRequest({ id: id, completed: e.target.checked }, () => {
                toast.success('This todo DONE!!!');
            }),
        );
    };
    return (
        <>
            <Row>
                <Col span={18}>
                    <p className="test">Content: {description}</p>
                </Col>
                <Col span={1}>{isDone && <CheckOutlined />}</Col>
                {isLogin && userId === userID && (
                    <Col span={5}>
                        <StytedDiv>
                            {isDone ? (
                                <Checkbox checked onChange={handleChangeCheckbox}>
                                    Done
                                </Checkbox>
                            ) : (
                                <Checkbox onChange={handleChangeCheckbox} checked={false}>
                                    Done
                                </Checkbox>
                            )}
                        </StytedDiv>

                        <Space>
                            <Tooltip title="Delete">
                                <Button
                                    type="primary"
                                    danger
                                    shape="circle"
                                    icon={<DeleteOutlined />}
                                    onClick={handleDeleteClick}
                                />
                            </Tooltip>
                            <Tooltip title="Edit">
                                <Button
                                    type="primary"
                                    shape="circle"
                                    icon={<EditOutlined />}
                                    onClick={handleEditClick}
                                />
                            </Tooltip>
                        </Space>
                    </Col>
                )}
            </Row>
        </>
    );
}
