import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import NavLinksMenu from "./NavLinksMenu";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const [show, setShow] = useState("translate-y-0");
    const [showMenuExpertise, setShowMenuExpertise] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(4);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !showMobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        // ترتيب الاحداث هنا هو ال مخلي قيمت دي اكبر من الي فوق
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`bg-white shadow-sm sticky top-0 transition duration-200 ${show}`}
        >
            <div className="max-w-[1536px] h-[80px] mx-auto flex items-center justify-between px-4">
                <div className="relative">
                    <HiOutlineMenuAlt1
                        size={30}
                        className="cursor-pointer block lg:hidden"
                        onClick={() => setShowMobileMenu(true)}
                    />

                    <MobileMenu
                        showMobileMenu={showMobileMenu}
                        setShowMobileMenu={setShowMobileMenu}
                        showMenuExpertise={showMenuExpertise}
                        setShowMenuExpertise={setShowMenuExpertise}
                    />
                </div>
                <NavLinksMenu
                    showMenuExpertise={showMenuExpertise}
                    setShowMenuExpertise={setShowMenuExpertise}
                />
                <div className="h-[80px]">
                    <Link to={"/"}>
                        <img src={logo} className="h-full" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
