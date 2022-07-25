import { Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutRequest } from '../../saga/Auth/auth.action';
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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
            <div className="layout-header">
                <Menu
                    className="main-menu"
                    style={{ backgroundColor: '#FFEFD5' }}
                    mode="horizontal"
                    items={[
                        ...items,
                        {
                            label: (
                                <p
                                    onClick={() => {
                                        localStorage.removeItem('login');
                                        dispatch(logoutRequest());
                                        navigate('/');
                                    }}
                                >
                                    Logout
                                </p>
                            ),
                            key: 'logout',
                        },
                    ]}
                    selectedKeys={[location.pathname]}
                />
            </div>

            <Outlet />
        </>
    );
}
