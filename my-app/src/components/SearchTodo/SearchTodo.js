import React, { useState } from 'react';

import { Input, Col, Row } from 'antd';

// import { useDispatch, useSelector } from 'react-redux';
// import { todosSelector } from '../../saga/Todos/todos.selector';
import 'react-toastify/dist/ReactToastify.css';
import ListTodo from '../ListTodo/ListTodo.component';

export default function SearchTodo() {
    // const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    // const listTodo = useSelector(todosSelector);
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    return (
        <>
            <div className="addTodo">
                <Row>
                    <Col span={3}>
                        <label htmlFor="todo">Search Todo</label>
                    </Col>
                    <Col span={20}>
                        <Input
                            placeholder="search todo"
                            size="medium"
                            id="todo"
                            onChange={handleChange}
                            value={search}
                        />
                    </Col>
                    <Col span={24}>
                        <ListTodo search={search} />
                    </Col>
                </Row>
            </div>
        </>
    );
}
