import { Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './header.scss';
const items = [
    {
        label: <Link to="/">Home</Link>,
        key: '/',
    },
    {
        label: <Link to="/add">Add</Link>,
        key: '/add',
    },
    {
        label: <Link to="/search">Search</Link>,
        key: '/search',
    },
];
export default function HeaderPrivate() {
    const location = useLocation();
    return (
        <>
            <div className="layout-header">
                <Menu
                    className="main-menu"
                    style={{ backgroundColor: '#FFEFD5' }}
                    mode="horizontal"
                    items={items}
                    selectedKeys={[location.pathname]}
                />
            </div>

            <Outlet />
        </>
    );
}
