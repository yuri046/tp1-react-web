import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Form from "../views/Form";
import Setings from "../views/Settings";
import Signin from "../views/Signin";
import SignUp from "../views/SignUp";
import Teste from '../views/test/Teste'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Protected from "./protected";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={Protected}>
                <Route path="/" index element={<Home/>}/>
                <Route path="settings" index element={<Setings />}/>
                <Route path="dashboard" index element={<Dashboard/>} />
                <Route path="form" index element={<Form/>}/>
            </Route>
            <Route path="teste" index element={<Teste/>}/>
            <Route path="signin" index element={<Signin />}/>
            <Route path="signup" index element={<SignUp />}/>
        </Route>
    )
);

const Index = ()=>{
    return <RouterProvider router={router}/>
}

export default Index