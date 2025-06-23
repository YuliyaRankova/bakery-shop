import './App.css'
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Paths, Roles, RouteType} from "./utils/shop-types.ts";
import Home from "./components/Home.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx";
import Bread from "./components/Bread.tsx";
import Dairy from "./components/Dairy.tsx";
import {navItems, productsItems} from "./configurations/nav-config.ts";
import ErrorPage from "./components/servicePages/ErrorPage.tsx";
import {useEffect} from "react";
import NavigatorDeskTop from "./components/navigation/NavigatorDeskTop.tsx";
import LoginPage from "./components/servicePages/LoginPage.tsx";
import LogoutPage from "./components/servicePages/LogoutPage.tsx";
import {useAppSelector} from "./redux/hooks.ts";
import SignUpForm from "./components/templates/SignUpForm.tsx";


function App() {

    const location = useLocation();
    const navigate = useNavigate();
    const {authUser} = useAppSelector(state => state.auth);

    useEffect(() => {
        if(location.pathname === `/${Paths.ERROR}`)
            navigate(Paths.HOME)
    }, []);

    const predicate = (item:RouteType) => {
        const isAdmin = authUser?.includes("admin");
        if (item.title === "Shopping Cart" && isAdmin) {
            return false;
        };

        return(
            item.role === Roles.ALL ||
                item.role === Roles.USER && authUser ||
                item.role === Roles.ADMIN && isAdmin||
                item.role === Roles.NO_AUTH && !authUser
        )
    };

    const getRoles = ()=>{
        return navItems.filter(item => predicate(item))
    };

    return (
        <>
            <Routes>
                {/*<Route path={Paths.HOME} element={<Layout/>}>*/}
                {/*<Route path={Paths.HOME} element={<Navigator items={navItems}/>}>*/}
                {/*<Route path={Paths.HOME} element={<NavigatorDeskTop items={navItems}/>}>*/}
                <Route path={Paths.HOME} element={<NavigatorDeskTop items={getRoles()}/>}>
                    <Route index element={<Home/>}/>
                    <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
                    <Route path={Paths.ORDERS} element={<Orders/>}/>
                    <Route path={Paths.CART} element={<ShoppingCart/>}/>
                    {/*<Route path={Paths.PRODUCTS} element={<Products/>}>*/}
                    {/*<Route path={Paths.PRODUCTS} element={<ProductsLayout/>}>*/}
                    <Route path={Paths.PRODUCTS} element={<NavigatorDeskTop items={productsItems}/>}>
                        <Route path={Paths.BREAD} element={<Bread/>}/>
                        <Route path={Paths.DAIRY} element={<Dairy/>}/>
                        <Route path={Paths.BACK} element={<Navigate to={Paths.HOME}/>}/>
                    </Route>
                    <Route path={Paths.LOGIN} element={<LoginPage/>}/>
                    <Route path={Paths.LOGOUT} element={<LogoutPage/>}/>
                    <Route path={Paths.SIGNUP} element={<SignUpForm/>}/>
                </Route>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </>
    )
}

export default App;
