
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
    ALL=0, USER = 1, ADMIN = 2, NO_AUTH =3
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
    fullName: string,
    email:string,
    password:string
};