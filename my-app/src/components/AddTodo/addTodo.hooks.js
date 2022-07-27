import { useState } from 'react';

const addTodoHooks = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nameTodo, setNameTodo] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [description, setDescription] = useState('');
    return {
        nameTodo,
        setNameTodo,
        description,
        setDescription,
    };
};
export default addTodoHooks;
