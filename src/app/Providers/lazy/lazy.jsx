import { lazy } from "react";
export const Layout = lazy(()=>import ('../layout/layout'))
export const Home = lazy(()=>import ('../../../pages/HomePage/home'))
export const About = lazy(()=>import ('../../../pages/AboutPage/about'))
export const Account = lazy(()=>import ('../../../pages/AccountPage/account'))
export const Cart = lazy(()=>import ('../../../pages/CartPage/cart'))
export const Contact = lazy(()=>import ('../../../pages/ContactPage/contact'))
export const GetId = lazy(()=>import ('../../../pages/GetById_InfoPage/getId'))
export const Login = lazy(()=>import ('../../../pages/LoginPage/login'))
export const Products = lazy(()=>import ('../../../pages/ProductPage/products'))
export const Signup = lazy(()=>import ('../../../pages/SignUpPage/signup'))
export const Wishlist = lazy(()=>import ('../../../pages/WishListPage/wishlist'))
export const Checkout = lazy(()=>import ('../../../pages/CheckoutPage/checkout'))
