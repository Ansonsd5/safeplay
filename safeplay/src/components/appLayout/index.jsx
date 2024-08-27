import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Outlet} from "react-router-dom";
import "./index.css";

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header/>
            <div className="feature-content">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default AppLayout;
