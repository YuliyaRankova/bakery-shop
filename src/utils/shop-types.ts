
export enum Paths{
    HOME = "/",
    ORDERS = "orders",
    PRODUCTS = "products",
    CART = "cart",
    CUSTOMERS = "customers",
    BREAD = "bread",
    DAIRY = "dairy",
    ERROR = "error",
    BACK = "back",
    LOGIN = "login",
    LOGOUT = "logout",
    REGISTER = "register"
};

export enum Roles {
    ALL=0, USER = 1, ADMIN = 2, NO_AUTH =3, NO_ADMIN =4
};

export type RouteType = {
    path: Paths,
    title: string,
    role?:Roles
};

export type LoginData = {
    email:string,
    password:string
};

export type SignUpData = {
    firstName: string,
    lastName:string,
    email:string,
    password:string
};

export type ProductType ={
    id?:string,
    title:string,
    category:string,
    unit:string,
    cost:number,
    img:string
}

export type Category={
    category_name:string,
}