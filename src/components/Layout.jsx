import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <div className="h-[5000px]"></div>
            <Footer />
        </div>
    );
};

export default Layout;
