import React from "react";
import styled from "styled-components";
import { DeleteOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons";
import { Checkbox, Button, Tooltip, Row, Col, Space } from "antd";
import { deleteRequest, completedRequest } from "../../saga/Todos/todos.action";
import { toast } from "react-toastify";
import todoHooks from "./todo.hooks";
const StytedDiv = styled.button`
  padding-left: 10px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
`;
export default function Todo(props) {
  const { name, description, userId, id, isDone } = props;
  const { navigate, dispatch, userID, token, isLogin } = todoHooks();
  const handleEditClick = () => {
    navigate(`/${id}/${name}/${description}`, { replace: true });
  };
  const handleDeleteClick = () => {
    dispatch(
      deleteRequest(
        id,
        token,
        { userId: userID },
        () => {
          toast.success("Delete Success!!!");
        },
        () => {
          toast.error("Delete Failed!!!");
        }
      )
    );
  };
  const handleChangeCheckbox = (e) => {
    dispatch(
      completedRequest(
        {
          name: name,
          description: description,
          _id: id,
          isDone: e.target.checked,
          userId: userID,
        },
        token,
        () => {
          if (e.target.checked) {
            toast.success("Set todo is done!!!");
          }
        },
        () => {
          toast.error("Set done error!!!");
        }
      )
    );
  };
  return (
    <>
      <Row>
        <Col span={18}>
          <p className='test'>Content: {description}</p>
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
              <Tooltip title='Delete'>
                <Button
                  type='primary'
                  danger
                  shape='circle'
                  icon={<DeleteOutlined />}
                  onClick={handleDeleteClick}
                />
              </Tooltip>
              <Tooltip title='Edit'>
                <Button
                  type='primary'
                  shape='circle'
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
