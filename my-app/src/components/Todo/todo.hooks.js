import { useState } from 'react';

const todoHooks = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showEdit, setShowEdit] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [todo, setTodo] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return {
        showEdit,
        setShowEdit,
        todo,
        setTodo,
    };
};
export default todoHooks;
