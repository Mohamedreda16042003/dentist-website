import React from "react";
import { Link, NavLink } from "react-router-dom";
import Expertise from "./Expertise";
import { BsChevronDown } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import ExpertiseMobile from "./ExpertiseMobile";

const MobileMenu = ({
    setShowMobileMenu,
    showMobileMenu,
    setShowMenuExpertise,
    showMenuExpertise,
}) => {
    return (
        <>
            {showMobileMenu && (
                <div className="bg-white fixed top-0 left-0 w-full h-[100vh] overflow-y-auto">
                    <GrClose
                        className="mt-7 ml-5 cursor-pointer"
                        size={22}
                        onClick={() => {
                            setShowMobileMenu(false);
                        }}
                    />

                    <div className="w-full text-end px-4">
                        <ul className="flex flex-col-reverse text-[14px] items-center w-full h-auto">
                            <NavLink
                                to={"/contactus"}
                                onClick={() => {
                                    setShowMobileMenu(false);
                                    setShowMenuExpertise(false);
                                }}
                                className={`${({ isActive }) =>
                                    isActive ? "text-blue-500" : ""} w-full`}
                            >
                                <li
                                    className={`w-full py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500`}
                                >
                                    اتصل بنا
                                </li>
                            </NavLink>
                            {/* .................... */}
                            <NavLink
                                to={"/maqalat"}
                                onClick={() => {
                                    setShowMobileMenu(false);
                                    setShowMenuExpertise(false);
                                }}
                                className={`${({ isActive }) =>
                                    isActive ? "text-blue-500" : ""} w-full`}
                            >
                                <li
                                    className={`w-full py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500
                                `}
                                >
                                    المقالات
                                </li>
                            </NavLink>
                            {/* .................... */}
                            <NavLink
                                to={"/results"}
                                onClick={() => {
                                    setShowMobileMenu(false);
                                    setShowMenuExpertise(false);
                                }}
                                className={`${({ isActive }) =>
                                    isActive ? "text-blue-500" : ""} w-full`}
                            >
                                <li
                                    className={`w-full py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500
                                `}
                                >
                                    تنائج الحالات
                                </li>
                            </NavLink>
                            {/* .................... */}
                            <NavLink
                                to={"/customer"}
                                onClick={() => {
                                    setShowMobileMenu(false);
                                    setShowMenuExpertise(false);
                                }}
                                className={`${({ isActive }) =>
                                    isActive ? "text-blue-500" : ""} w-full`}
                            >
                                <li
                                    className={`w-full py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500`}
                                >
                                    اراء العملاء
                                </li>
                            </NavLink>
                            {/* .................... */}
                            <NavLink
                                to={"/team"}
                                onClick={() => {
                                    setShowMobileMenu(false);
                                    setShowMenuExpertise(false);
                                }}
                                className={`${({ isActive }) =>
                                    isActive ? "text-blue-500" : ""} w-full`}
                            >
                                <li
                                    className={`w-full py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500`}
                                >
                                    الفريق الطبي
                                </li>
                            </NavLink>
                            {/* .................... */}
                            <button className={`w-full cursor-pointer`}>
                                <li
                                    className="w-full flex items-center justify-between py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500"
                                    onClick={() =>
                                        setShowMenuExpertise(!showMenuExpertise)
                                    }
                                >
                                    <span>
                                        <BsChevronDown />
                                    </span>
                                    الخدمات
                                </li>
                                <ExpertiseMobile
                                    showMenuExpertise={showMenuExpertise}
                                    setShowMobileMenu={setShowMobileMenu}
                                    setShowMenuExpertise={setShowMenuExpertise}
                                />
                            </button>
                            {/* .................... */}
                            <NavLink
                                to={"/about"}
                                onClick={() => {
                                    setShowMobileMenu(false);
                                    setShowMenuExpertise(false);
                                }}
                                className={`${({ isActive }) =>
                                    isActive ? "text-blue-500" : ""} w-full`}
                            >
                                <li
                                    className={`w-full py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500
                                `}
                                >
                                    عن المركز
                                </li>
                            </NavLink>
                            {/* .................... */}
                            <NavLink
                                to={"/"}
                                onClick={() => {
                                    setShowMobileMenu(false);
                                    setShowMenuExpertise(false);
                                }}
                                className={`${({ isActive }) =>
                                    isActive ? "text-blue-500" : ""} w-full`}
                            >
                                <li
                                    className={`w-full py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500
                                `}
                                >
                                    الرئيسية
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <NavLink
                        className={`h-[80px] w-full font-Alexandria font-medium bg-blue-500 flex items-center justify-center`}
                        to={""}
                    >
                        احجز موعد
                    </NavLink>
                </div>
            )}
        </>
    );
};

export default MobileMenu;
