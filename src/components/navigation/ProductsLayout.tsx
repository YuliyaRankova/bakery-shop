import {NavLink, Outlet} from "react-router-dom";

const ProductsLayout = () => {
    return (
        <div>
            <nav>
                <ul className={'nav-list'}>
                    <NavLink to={'bread'}><li>Bread</li></NavLink>
                    <NavLink to={'dairy'}><li>Dairy</li></NavLink>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default ProductsLayout;