import { Routes, Route } from 'react-router-dom';
import { Login, Register } from '../pages/public/authPage/authPages';
const PublicRouter = () => (
    <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
            path="*"
            element={
                <>
                    <h1>404 NOT FOUND A</h1>
                </>
            }
        />
    </Routes>
);

export default PublicRouter;
