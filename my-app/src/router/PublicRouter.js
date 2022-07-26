import { Routes, Route } from 'react-router-dom';
import { HeaderPublic } from '../layouts/header';
import { Login, Register } from '../pages/public/authPage/authPages';
const PublicRouter = () => (
    <Routes>
        <Route path="/" element={<HeaderPublic />}>
            <Route path="login" index element={<Login />} />
            <Route path="register" element={<Register />} />
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

export default PublicRouter;
