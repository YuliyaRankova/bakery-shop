import './App.css'
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Paths} from "./utils/shop-types.ts";
import Home from "./components/Home.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx";
import Bread from "./components/Bread.tsx";
import Dairy from "./components/Dairy.tsx";
import {navItems, productsItems} from "./configurations/nav-config.ts";
import ErrorPage from "./components/ErrorPage.tsx";
import {useEffect} from "react";
import NavigatorDeskTop from "./components/navigation/NavigatorDeskTop.tsx";
import LoginPage from "./components/service/LoginPage.tsx";


function App() {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(location.pathname === `/${Paths.ERROR}`)
            navigate(Paths.HOME)
    }, []);

    return (
        <>
            <Routes>
                {/*<Route path={Paths.HOME} element={<Layout/>}>*/}
                {/*<Route path={Paths.HOME} element={<Navigator items={navItems}/>}>*/}
                <Route path={Paths.HOME} element={<NavigatorDeskTop items={navItems}/>}>
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
                </Route>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </>
    )
}

export default App
