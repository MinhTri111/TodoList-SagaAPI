import { Routes, Route } from 'react-router-dom';
import HeaderPrivate from '../layouts/header/HeaderPrivate.component';
import ListTodo from '../components/ListTodo/ListTodo.component';
import { AddTodo } from '../components';
import SearchTodo from '../components/SearchTodo/SearchTodo';
import EditTodo from '../components/EditTodo/EditTodo';
const PrivateRouter = () => (
    <Routes>
        <Route path="/" element={<HeaderPrivate />}>
            <Route index element={<ListTodo />} />
            <Route path="add" element={<AddTodo />} />
            <Route path="search" element={<SearchTodo />} />
            <Route path="/:id/:title" element={<EditTodo />} />
            <Route
                path="*"
                element={
                    <>
                        <h1>404 NOT FOUND</h1>
                    </>
                }
            />
        </Route>
    </Routes>
);

export default PrivateRouter;
