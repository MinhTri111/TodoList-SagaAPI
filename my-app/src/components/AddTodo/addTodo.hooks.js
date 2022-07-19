import { useState } from 'react';

const addTodoHooks = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newTodo, setNewTodo] = useState('');
    return {
        newTodo,
        setNewTodo,
    };
};
export default addTodoHooks;
