import { Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './header.scss';
const items = [
    {
        label: <Link to="/">Home</Link>,
        key: '/',
    },
    {
        label: <Link to="/login">Login</Link>,
        key: 'login',
    },
    {
        label: <Link to="/register">Register</Link>,
        key: 'register',
    },
];
export default function HeaderPublic() {
    const location = useLocation();
    return (
        <>
            <div className="layout-header">
                <Menu
                    className="main-menu"
                    style={{ backgroundColor: '#FFEFD5' }}
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={items}
                />
            </div>

            <Outlet />
        </>
    );
}
