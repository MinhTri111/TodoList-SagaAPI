/* eslint-disable react-hooks/exhaustive-deps */
import { List, Row, Col, Divider, Spin } from "antd";
import { Todo } from "../../components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchRequest } from "../../saga/Todos/todos.action";
import React, { useEffect } from "react";
import { setCurrentPage } from "../../saga/Todos/todos.action";
import "antd/dist/antd.min.css";
import listTodoHooks from "./listTodo.hooks";
const ListTodo = (props) => {
  const { dispatch, listTodo, token, loading, currentPage } = listTodoHooks();
  useEffect(() => {
    dispatch(fetchRequest(JSON.parse(token) ? JSON.parse(token) : "null"));
  }, []);

  return (
    <>
      <Row className='listTodo'>
        <Divider plan='true'>LIST TODO</Divider>
        <Col span={24}>
          {loading ? (
            <Spin tip='Loading...'>
              <List
                itemLayout='vertical'
                size='large'
                pagination={{
                  onChange: (page) => {
                    dispatch(setCurrentPage(page));
                  },
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
              itemLayout='vertical'
              size='large'
              pagination={{
                onChange: (page) => {
                  dispatch(setCurrentPage(page));
                },
                pageSize: 3,
                defaultCurrent: currentPage,
              }}
              dataSource={
                props.search
                  ? listTodo.filter((item) => item.name.includes(props.search))
                  : listTodo
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
