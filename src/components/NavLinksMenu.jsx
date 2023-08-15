import React from "react";
import { Link, NavLink } from "react-router-dom";
import Expertise from "./Expertise";
import { BsChevronDown } from "react-icons/bs";

const NavLinksMenu = ({ showMenuExpertise, setShowMenuExpertise }) => {
    return (
        <React.Fragment>
            <NavLink
                className={`h-[80px] w-[150px] font-Alexandria font-medium bg-blue-500 hidden lg:flex items-center justify-center`}
                to={""}
            >
                احجز موعد
            </NavLink>
            <div className="">
                <ul className="hidden lg:flex text-[14px] items-center w-full h-auto">
                    <NavLink
                        to={"/contactus"}
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        <li
                            className={`py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500`}
                        >
                            اتصل بنا
                        </li>
                    </NavLink>
                    {/* .................... */}
                    <NavLink
                        to={"/maqalat"}
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        <li
                            className={`py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500
                                `}
                        >
                            المقالات
                        </li>
                    </NavLink>
                    {/* .................... */}
                    <NavLink
                        to={"/results"}
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        <li
                            className={`py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500
                                `}
                        >
                            تنائج الحالات
                        </li>
                    </NavLink>
                    {/* .................... */}
                    <NavLink
                        to={"/customer"}
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        <li
                            className={`py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500`}
                        >
                            اراء العملاء
                        </li>
                    </NavLink>
                    {/* .................... */}
                    <NavLink
                        to={"/team"}
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        <li
                            className={`py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500`}
                        >
                            الفريق الطبي
                        </li>
                    </NavLink>
                    {/* .................... */}
                    <NavLink
                        onMouseEnter={() => setShowMenuExpertise(true)}
                        onMouseLeave={() => setShowMenuExpertise(false)}
                    >
                        <li className="flex items-center gap-3 py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500 relative">
                            الخدمات
                            <span>
                                <BsChevronDown />
                            </span>
                            <Expertise showMenuExpertise={showMenuExpertise} />
                        </li>
                    </NavLink>
                    {/* .................... */}
                    <NavLink
                        to={"/about"}
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        <li
                            className={`py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500
                            `}
                        >
                            عن المركز
                        </li>
                    </NavLink>
                    {/* .................... */}
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : ""
                        }
                    >
                        <li
                            className={`py-[31px] px-[20px] font-Alexandria font-medium hover:text-blue-500
                                `}
                        >
                            الرئيسية
                        </li>
                    </NavLink>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default NavLinksMenu;
