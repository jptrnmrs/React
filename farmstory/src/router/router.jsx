import {createBrowserRouter} from 'react-router-dom'
import MainPage from '../pages/main/MainPage'
import LoginPage from '../pages/user/LoginPage'
import TermsPage from '../pages/user/TermsPage';
import RegisterPage from '../pages/user/RegisterPage';
const router = createBrowserRouter([
    {path: "/", element: <MainPage />},
    {path: "/introduction/hello", element: null},
    {path: "/introduction/direction", element: null},
    {path: "/market/list", element: null},
    {path: "/croptalk/story", element: null},
    {path: "/croptalk/grow", element: null},
    {path: "/croptalk/school", element: null},
    {path: "/user/login", element: <LoginPage />},
    {path: "/user/terms", element: <TermsPage />},
    {path: "/user/register", element: <RegisterPage />},
    {path: "/admin", element: null},
    {path: "/admin/product/register", element: null},
])

export default router;